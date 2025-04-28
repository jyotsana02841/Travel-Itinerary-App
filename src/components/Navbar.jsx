import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./../styles/Navbar.css";
import logo from "./../assets/images/logo.png";

const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <div className="nav-links">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/travel-guide">Travel Guides</Link>
          <Link to="/hotels">Hotels</Link>
        </div>
        <div className="search-login">
          <input type="text" placeholder="Explore by Destination" />
          <Link to="/login">
            <button className="login-btn">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
