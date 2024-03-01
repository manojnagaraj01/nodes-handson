// LoginForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    // Validate login (e.g., check if the email and password match a user)
    // For simplicity, let's assume login is always successful
    setIsLoginSuccessful(true);
  };

  const redirectToNextPage = () => {
    navigate('/next-page');
  };

  return (
    <div className={`login-container ${isLoginSuccessful ? 'successful' : ''}`}>
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>

      {isLoginSuccessful && (
        <div className="message-container">
          <p>Login successful! Welcome back.</p>
          <button onClick={redirectToNextPage}>Continue</button>
        </div>
      )}

      <div className="register-link-container">
        <p>Don't have an account? </p>
        <Link className="register-link" to="/">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
