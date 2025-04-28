import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for redirection
import "./../styles/Signup/Signup.css";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const navigate = useNavigate(); // Hook to handle navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email and password are valid (for now, we skip validation)
    if (email && password) {
      // On successful sign-up, redirect to home page
      navigate("/");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-card">
        <h2 className="sign-up-title">Sign up to view this page</h2>

        <button className="facebook-button">
          <span className="facebook-icon"><FaFacebook/></span> Sign up with Facebook
        </button>
        <button className="google-button">
          <span className="google-icon"><FcGoogle/></span> Sign up with Google
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

          <button className="sign-up-button" type="submit">Sign up with email</button> {/* Submit button */}
        </form>

        <p className="login-link">
          Already have an account? <a href="#">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
