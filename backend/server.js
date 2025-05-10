require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt'); // For password hashing
const { Pool } = require('pg'); // PostgreSQL client
const cors = require('cors'); // To allow requests from the frontend
const jwt = require('jsonwebtoken'); // For token-based authentication
const path = require('path');

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

app.use(cors());  // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Secret key for signing JWTs (store this securely in your .env file)
const JWT_SECRET = process.env.JWT_SECRET || 'oneMillionCoders';


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


// Middleware to authenticate any logged‑in user (not just admin)
async function authenticateUser(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    console.error('Auth error:', err);
    res.status(401).json({ message: 'Invalid token' });
  }
}

// GET completed‑sections
app.get(
  '/api/completed-sections',
  authenticateUser,
  async (req, res) => {
    try {
      const result = await pool.query(
        'SELECT completed_sections FROM users WHERE id = $1',
        [req.userId]
      );
      if (!result.rows.length) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ completed_sections: result.rows[0].completed_sections });
    } catch (err) {
      console.error('Error fetching completed sections:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
);

// POST complete‑section
app.post(
  '/api/complete-section',
  authenticateUser,
  async (req, res) => {
    const { section } = req.body;
    if (typeof section !== 'string') {
      return res.status(400).json({ message: 'Section must be a string' });
    }

    try {
      // Append the section if it’s not already present
      const update = await pool.query(
        `UPDATE users
         SET completed_sections = 
           CASE
             WHEN NOT (completed_sections @> to_jsonb($2::text) :: jsonb) 
             THEN completed_sections || to_jsonb($2::text) :: jsonb
             ELSE completed_sections
           END
         WHERE id = $1
         RETURNING completed_sections`,
        [req.userId, section]
      );

      if (!update.rows.length) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({ completed_sections: update.rows[0].completed_sections });
    } catch (err) {
      console.error('Error updating completed section:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
);

// Serve static files from the React app
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  // Handle React routing, return all requests to React's index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});