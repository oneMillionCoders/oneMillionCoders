require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt'); // For password hashing
const { Pool } = require('pg'); // PostgreSQL client
const cors = require('cors'); // To allow requests from the frontend
const jwt = require('jsonwebtoken'); // For token-based authentication

const app = express();
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Secret key for signing JWTs (store this securely in your .env file)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Middleware to authenticate and authorize admin users
async function authenticateAdmin(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Check if the user is an admin
    const result = await pool.query('SELECT is_admin FROM users WHERE id = $1', [decoded.userId]);
    const user = result.rows[0];

    if (!user || !user.is_admin) {
      return res.status(403).json({ message: 'Forbidden: Admin access required' });
    }

    // User is authenticated and authorized
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
}

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const user = result.rows[0];

    // Verify the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

    // Successful login
    res.json({
      message: 'Login successful',
      user: { id: user.id, username: user.username },
      token, // Include the token in the response
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User creation endpoint (restricted to admins)
app.post('/api/users', authenticateAdmin, async (req, res) => {
  const { username, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the database
    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id',
      [username, hashedPassword]
    );

    res.status(201).json({ message: 'User created', userId: result.rows[0].id });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('✅ Server is running on http://localhost:5000');
});