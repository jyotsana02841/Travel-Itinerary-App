import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for redirection
import "./../styles/Login/Login.css";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate(); // Hook to handle navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email and password are valid (for now, we skip validation)
    if (email && password) {
      // On successful login, redirect to home page
      navigate("/");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-card">
        <h2 className="sign-up-title">Log in to view this page</h2>

        <button className="facebook-button">
          <span className="facebook-icon"><FaFacebook/></span> Log in with Facebook
        </button>
        <button className="google-button">
          <span className="google-icon"><FcGoogle/></span> Log in with Google
        </button>
        <button className="google-button">
          <span className="google-icon"><FaApple/></span> Log in with Apple
        </button>

        <div className="separator">
          <span className="separator-text">or</span>
        </div>

        <form onSubmit={handleSubmit}> {/* Add form submission handler */}
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Handle email input change
            />
            <input
              type="password"
              placeholder="Password"
              className="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Handle password input change
            />
          </div>

          <span className='forgot-pass'>Forgot password?</span>
          <button className="sign-up-button" type="submit">Log in with email</button> {/* Submit button */}
        </form>

        <p className="login-link">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
