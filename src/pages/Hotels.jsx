import React from "react";
import Navbar from "../components/Navbar";
import "./../styles/Hotel/Hotel.css";
import { FaBed } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import search from "./../assets/images/search.jpg";
import pricedrop from "./../assets/images/price-drop.jpg";
import upfront from "./../assets/images/upfront.png";
import Footer from './../components/Footer.jsx'

const Hotels = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="main">
        <div className="hotel-search-container">
          <h1 className="main-title">
            Search for hotel and Airbnb stays in one place
          </h1>
          <p className="description">
            Experience a better hotel search that helps you find the perfect
            lodging, with your preferences as the highest priority.
          </p>
          <div className="search-bar">
            <div className="input-group">
              <label>Where</label>
              <input type="text" placeholder="Search destinations" />
            </div>

            <div className="input-group">
              <label>When</label>
              <div className="date-picker">
                <span role="img" aria-label="calendar">
                  <SlCalender />
                </span>
                <input type="text" value="February 19" readOnly />
                <input type="text" value="February 20" readOnly />
              </div>
            </div>

            <div className="input-group">
              <label>Rooms, guests</label>
              <div className="rooms-guests">
                <span role="img" aria-label="bed">
                  <FaBed />
                </span>{" "}
                1
                <span role="img" aria-label="guest">
                  <HiMiniUsers />
                </span>{" "}
                2
              </div>
            </div>

            <button className="search-button">Search</button>
          </div>
          <div className="status">
            <span>Already booked?</span>
            <span className="two">Manage your bookings</span>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="all-in-one-container">
          <div className="text-section">
            <div className="image">
              <img src={search} alt="" />
            </div>
            <div className="text">
              <h2 className="title">All-in-one hotel search</h2>
              <p className="description">
                Never switch tabs again. Compare results from trusted booking
                sites like Airbnb, Google, Expedia, Hotels.com, Booking.com, and
                more.
              </p>
            </div>
          </div>
          <div className="text-section">
            <div className="image">
              <img src={pricedrop} alt="" />
            </div>
            <div className="text">
              <h2 className="title">Never miss a price drop</h2>
              <p className="description">
                We monitor for when your hotel price drops, and notify you so
                you can re-book.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hotel-features-container">
        <div className="feature-item">
          <img src={upfront} alt="Full Price" className="feature-image" />
          <h2 className="feature-title">See the full total upfront</h2>
          <p className="feature-description">
            We show the full price with fees upfront, so there are no surprises
            on the check.
          </p>
        </div>

        <div className="feature-item">
          <img
            src={upfront}
            alt="Transparent Ranking"
            className="feature-image"
          />
          <h2 className="feature-title">Transparent ranking</h2>
          <p className="feature-description">
            Unlike other search sites, we rank hotels only by price and rating,
            not by how much they pay us.
          </p>
        </div>

        <div className="feature-item">
          <img src={upfront} alt="Compare Location" className="feature-image" />
          <h2 className="feature-title">Compare location</h2>
          <p className="feature-description">
            Integrated with our trip planner, you can see hotels close to the
            places you were planning to visit.
          </p>
        </div>

        <div className="feature-item">
          <img src={upfront} alt="Find Best Deals" className="feature-image" />
          <h2 className="feature-title">We find the best deals</h2>
          <p className="feature-description">
            We search multiple sites and make sure you’re getting the best
            prices across all of them.
          </p>
        </div>

        <div className="feature-item">
          <img src={upfront} alt="Designed For You" className="feature-image" />
          <div className="text">
            <h2 className="feature-title">Designed with you in mind</h2>
            <p className="feature-description">
              We make it easier to find the right hotel with a more
              user-friendly interface.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="lower">
        <span className="one">Plan your entire trip while you're at it</span>
        <span className="two">Not just another hotel seach - plan out you trip with us too!With feature like real time colloboration, importing reservations, and much more</span>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Hotels;
