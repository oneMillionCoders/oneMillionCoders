require('dotenv').config();
const bcrypt = require('bcrypt');
const { Pool } = require('pg'); // PostgreSQL client

// Use DATABASE_URL (Neon) if present; fallback to individual env vars
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || undefined,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  // If you prefer separate vars for local dev, pg will still read them from env
});

// Function to hash a password
async function hashPassword(plainPassword) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
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

// If run directly, create a user and then close the pool
if (require.main === module) {
  (async () => {
    try {
      const username = process.argv[2] || 'admin';
      const password = process.argv[3] || 'superSecurePassword123!';
      const isAdmin = (process.argv[4] || 'true') === 'true';
      const id = await addUser(username, password, isAdmin);
      console.log(`User created with id: ${id}`);
    } catch (err) {
      console.error(err);
    } finally {
      await pool.end();
      process.exit(0);
    }
  })();
}