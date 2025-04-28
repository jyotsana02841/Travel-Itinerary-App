import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for redirection
import "./../styles/Onboarding.css";
import Header from "./../components/Dashboard/Header.jsx";

const Onboarding = () => {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [travelGroup, setTravelGroup] = useState("");
  const [darkMode, setDarkMode] = useState(true); // Dark mode by default
  const navigate = useNavigate(); // Hook to handle navigation

  // Toggle dark and light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Handle "Continue" button click (redirect to dashboard)
  const handleContinue = () => {
    // Add any form validation here if necessary
    navigate("/dashboard");
  };

  return (
    <div className={darkMode ? "travel-container dark" : "travel-container light"}>
      <Header />
      {/* Dark mode toggle button */}
      <button onClick={toggleTheme} className="theme-toggle">
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>

      <h2>Plan Your Journey, Your Way!</h2>
      <p>Let's create your personalised travel experience</p>

      <div className="form-group">
        <label>Where would you like to go?</label>
        <input
          type="text"
          placeholder="Enter Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>How long will you stay?</label>
        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        >
          <option value="">Select Duration</option>
          <option value="1-3 days">1-3 days</option>
          <option value="4-7 days">4-7 days</option>
          <option value="1-2 weeks">1-2 weeks</option>
          <option value="More than 2 weeks">More than 2 weeks</option>
        </select>
      </div>

      <div className="form-group">
        <label>Who are you traveling with?</label>
        <div className="button-group">
          <button onClick={() => setTravelGroup("Solo")}>Solo</button>
          <button onClick={() => setTravelGroup("Couple")}>Couple</button>
          <button onClick={() => setTravelGroup("Family")}>Family</button>
          <button onClick={() => setTravelGroup("Friends")}>Friends</button>
        </div>
      </div>

      <button onClick={handleContinue} className="submit">Continue</button>
    </div>
  );
};

export default Onboarding;
