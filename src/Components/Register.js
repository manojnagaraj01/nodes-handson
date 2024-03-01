// RegisterForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    // Validate registration (e.g., check if the email is unique)
    // For simplicity, let's assume registration is always successful
    setIsRegistered(true);
  };

  const redirectToLogin = () => {
    navigate('/login');
  };

  const redirectToNextPage = () => {
    navigate('/next-page');
  };

  return (
    <div className={`register-container ${isRegistered ? 'registered' : ''}`}>
      <h2>Register</h2>
      <form>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
        <br />
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
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>

      {isRegistered && (
        <div className="message-container">
          <p>Registration successful! Thank you for registering.</p>
          <button onClick={redirectToNextPage}>Continue</button>
        </div>
      )}


      <div className="login-link-container">
        <p>Already have an account? </p>
        <button className="login-link" onClick={redirectToLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
