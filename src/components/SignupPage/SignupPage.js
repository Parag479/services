import React, { useState } from 'react';
import './SignupPage.css';
import { FaEye, FaEyeSlash, FaHome, FaUser, FaCommentDots, FaCog } from 'react-icons/fa';

const SignupPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(form);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="signup-container">
      <div className="logo">Clean</div>
      <h2>Create New Account</h2>
      <p>Set up your username and password.<br />You can always change it later.</p>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Enter Name</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Smith Johnson" required />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="smithjohnson@example.com" required />
        </div>
        <div className="input-container">
          <label htmlFor="phone">Mobile Number</label>
          <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="(219) 555-0114" required />
        </div>
        <div className="input-container password-container">
          <label htmlFor="password">Password</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <span className="password-toggle" onClick={togglePasswordVisibility}>
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="input-container password-container">
          <label htmlFor="confirmPassword">Re-Enter Password</label>
          <input
            type={confirmPasswordVisible ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Re-Enter Password"
            required
          />
          <span className="password-toggle" onClick={toggleConfirmPasswordVisibility}>
            {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button type="submit">Signup</button>
      </form>
      <p className="login-text">Already have an account? <a href="#login">Login</a></p>
      <div className="bottom-nav">
        <FaHome />
        <FaUser />
        <FaCommentDots />
        <FaCog />
      </div>
    </div>
  );
};

export default SignupPage;
