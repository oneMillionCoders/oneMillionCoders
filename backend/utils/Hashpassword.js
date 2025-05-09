require('dotenv').config();
const bcrypt = require('bcrypt');
const { Pool } = require('pg'); // PostgreSQL client

// Database connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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
      console.log(`User with username "${username}" already exists.`);
      return;
    }

    // Hash the password
    const hashedPassword = await hashPassword(plainPassword);

    // Insert the user into the database
    const result = await pool.query(
      'INSERT INTO users (username, password, is_admin) VALUES ($1, $2, $3) RETURNING id',
      [username, hashedPassword, isAdmin]
    );

    console.log(`User added with ID: ${result.rows[0].id}`);
  } catch (error) {
    console.error('Error adding user:', error);
  } finally {
    // Close the database connection
    pool.end();
  }
}

/*admin user test
(async () => {
  await addUser('admin', 'superSecurePassword123!', true); // username, plain-text pw, isAdmin
  process.exit(0);
})();*/