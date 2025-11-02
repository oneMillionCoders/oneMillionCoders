require('dotenv').config();
const bcrypt = require('bcrypt');
const pool = require('./db'); // PostgreSQL client

const SALT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS || '12', 10);

// Function to hash a password
async function hashPassword(plainPassword) {
  const hashedPassword = await bcrypt.hash(plainPassword, SALT_ROUNDS);
  return hashedPassword;
}

// Function to add a user to the database
async function addUser(username, plainPassword, isAdmin = false) {
  try {
    // Check if the username already exists
    const userCheck = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (userCheck.rows.length > 0) {
      return;
    }

    // Hash the password
    const hashedPassword = await hashPassword(plainPassword);

    // Insert the user into the database
    const result = await pool.query(
      'INSERT INTO users (username, password, is_admin) VALUES ($1, $2, $3) RETURNING id',
      [username, hashedPassword, isAdmin]
    );

    return result.rows[0].id;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  } 
  // NOTE: do NOT close the pool here — let the application manage the pool lifecycle
}

// Export functions so other modules or a CLI can use them
module.exports = { addUser, hashPassword };

// If run directly, prompt securely for password (avoid shell history)
if (require.main === module) {
  (async () => {
    const rl = require('readline');
    const r = rl.createInterface({ input: process.stdin, output: process.stdout, terminal: true });

    const question = (q, hide = false) => new Promise(resolve => {
      if (!hide) return r.question(q, ans => resolve(ans));
      // hide input
      process.stdout.write(q);
      const stdin = process.openStdin();
      const onData = (char) => {
        char = char + '';
        switch (char) {
          case '\n':
          case '\r':
          case '\u0004':
            stdin.removeListener('data', onData);
            break;
          default:
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            process.stdout.write(q + Array(r.line.length + 1).join('*'));
            break;
        }
      };
      stdin.on('data', onData);
      r.question('', answer => {
        process.stdout.write('\n');
        resolve(answer);
      });
    });

    try {
      const username = process.argv[2] || await question('Username: ');
      const password = process.argv[3] || await question('Password (will be hidden): ', true);
      const isAdmin = (process.argv[4] || await question('Is admin? (true/false): ')) === 'true';
      const id = await addUser(username, password, isAdmin);
      console.log(`User created with id: ${id}`);
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    } finally {
      // close shared pool only for CLI runs
      await pool.end();
      process.exit(0);
    }
  })();
}