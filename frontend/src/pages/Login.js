import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate(); // React Router hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login request to the backend
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token); // Save the token
        // Redirect to courses on successful login
        navigate('/careers/data-analyst-associate');
        window.dispatchEvent(new Event('storage')); // Trigger storage event manually
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{ 
        position: 'fixed',     // ← take it out of the normal flow 
        top: 0,                // ← anchor to the very top 
        left: 0,               // ← and the very left 
        width: '100%',         // ← span the full viewport width 
        height: '100%',        // ← span the full viewport height 
        margin: 0,             // ← override any parent margins 
        padding: 0,            // ← override any parent padding 
        backgroundImage: "url('/images/background3.png')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'top', 
        backgroundRepeat: 'no‑repeat',
        backgroundAttachment: 'scroll',
      }} 
    >
      <div className="card p-4 shadow" style={{ width: '400px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <h2 className="text-center mb-4">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}