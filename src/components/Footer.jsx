import React from 'react';
import './../styles/Footer.css';
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="made-with">
        <p>Made with <CiHeart/> from SF & more</p>
        <p>© 2022 Travelchime Inc.</p>
      </div>
      <div className="wanderlog-section">
        <h3 className="footer-heading">Wanderlog</h3>
        <ul className="footer-list">
          <li>Hotels</li>
          <li>Blog</li>
          <li>Report security issue</li>
          <li>Terms, Privacy Policy & Copyright</li>
          <li>Mobile app</li>
          <li>Browser extension</li>
          <li>Travel budgeting & cost tracking</li>
          <li>Jobs</li>
          <li>Contact us</li>
          <li>Google data disclosure</li>
          <li>How to embed a map on your travel blog</li>
        </ul>
      </div>
      <div className="guides-resources-section">
        <h3 className="footer-heading">Guide and resources</h3>
        <ul className="footer-list">
          <li>Trip planners by destination</li>
          <li>Explore cities and countries</li>
          <li>Road trips by destination</li>
          <li>Best places to visit by category</li>
          <li>Popular search terms by destination</li>
          <li>Weather around the world</li>
          <li>Travel questions & answers</li>
          <li>Travel itinerary guides</li>
          <li>Maps of cities and national parks</li>
          <li>Destinations at different times of the year</li>
          <li>Places to visit by destination</li>
        </ul>
      </div>
      <div className="get-the-app-section">
        <h3 className="footer-heading">Get the app</h3>
        <div className="app-store">App Store</div>
        <div className="google-play">Google Play</div>
      </div>
    </div>
  );
};

export default Footer;
