import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/TravelGuide/Card.jsx";
import Button from "../components/TravelGuide/Button.jsx";
import Footer from "./../components/Footer.jsx";
import "./../styles/TravelGuide/TravelGuide.css";
import { cards } from "../data/cards.js";

const TravelGuide = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const buttons = [
    { id: 1, title: "Japan" },
    { id: 2, title: "New York City" },
    { id: 3, title: "London" },
    { id: 4, title: "Oahu" },
    { id: 5, title: "Paris" },
    { id: 6, title: "Tokyo" },
    { id: 7, title: "Scotland" },
    { id: 8, title: "San Francisco" },
    { id: 9, title: "Iceland" },
    { id: 10, title: "Orlando" },
    { id: 11, title: "Barcelona" },
    { id: 12, title: "Amsterdam" },
    { id: 13, title: "Rome" },
    { id: 14, title: "Spain" },
    { id: 15, title: "Los Angeles" },
    { id: 16, title: "Chicago" },
    { id: 17, title: "Ireland" },
    { id: 18, title: "Seoul" },
    { id: 19, title: "Hong Kong" },
    { id: 20, title: "Italy" },
    { id: 21, title: "Bali" },
    { id: 22, title: "Toronto" },
    { id: 23, title: "Las Vegas" },
    { id: 24, title: "Seattle" },
    { id: 25, title: "Singapore" },
    { id: 26, title: "Lisbon" },
    { id: 27, title: "Branson" },
    { id: 28, title: "New Zealand" },
    { id: 29, title: "Copenhagen" },
    { id: 30, title: "Madrid" },
  ];

  // Filtered cards based on search query
  const filteredCards = cards.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="main">
        <div className="content">
          <div className="travel-guides-container">
            <h2 className="title">Explore travel guides and itineraries</h2>
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search for a destination"
                className="search-input"
                value={searchQuery} // Bind the input value to state
                onChange={(e) => setSearchQuery(e.target.value)} // Update the state on input change
              />
              <span className="search-icon">🔍</span> {/* Search icon */}
            </div>
            <div className="popular-destinations">
              <p className="popular-text">
                Or browse our most popular destinations:
              </p>
              <div className="destination-buttons">
                <button className="destination-button">Japan</button>
                <button className="destination-button">New York City</button>
                <button className="destination-button">See more...</button>
              </div>
            </div>
          </div>

          <span className="tit">Recent guides</span>
          <div className="cont">
            <div className="cards">
              {filteredCards.length > 0 ? (
                filteredCards.map((item) => <Card key={item.id} item={item} />)
              ) : (
                <p>No guides found</p>
              )}
            </div>
            <button>See more</button>
          </div>
        </div>

        <span className="tit">
          Or browse our destinations with the most guides
        </span>
        <div className="buttons">
          {buttons.map((item) => (
            <Button key={item.id} item={item} />
          ))}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default TravelGuide;
