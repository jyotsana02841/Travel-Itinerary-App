import React from "react";
import "./../styles/Home/Home.css";
import reviews from "./../assets/images/reviews.png";
import { feature } from "../data/feature.js";
import Card from "../components/Home/Card.jsx";
import Footer from "../components/Footer.jsx";
import { FaArrowRight } from "react-icons/fa6";
import Join from "./../assets/images/Join.png";
import Flight from "./../assets/images/FlightBar.png";
import FlightStatus from "./../assets/images/FlightStatus.png";
import Section from "./../assets/images/Section.png";
import Section2 from "./../assets/images/Section2.png";
import Background from "./../assets/images/Background.png";
import lower from "./../assets/images/lower.png";
import home from "./../assets/images/home.jpg";
import Navbar from "./../components/Navbar.jsx"
import { Outlet, Link } from "react-router-dom";
import { MdFlight } from "react-icons/md";
import { CiWifiOff } from "react-icons/ci";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { MdOutlineRoute } from "react-icons/md";
import { RxBookmark } from "react-icons/rx";
import { GrAttachment } from "react-icons/gr";
import { SiGooglemaps } from "react-icons/si";

const Home = () => {
  const pressData = [
    {
      title: "thrillist",
      quote:
        "If you're looking for a more 360-degree travel planner, Wanderlog might be a good option for you. The platform is very intuitive, and it's super easy to navigate regardless of the many features it offers. In short, it gives you a lot of tools, but isn't overwhelming.",
      author: "Serena Tara",
      source: "@thrillist",
    },
    {
      title: "Traveler",
      quote:
        "One of the best travel apps for planning every kind of trip, including road trips and group travel: create a trip itinerary, budget costs, organize flights and hotel reservations, and collaborate with friends. After your trip, share a travel guide to inspire other travelers.",
      author: "Charlotte Davey",
      source: "@CN Traveler",
    },
    {
      title: "ANDROID AUTHORITY",
      quote:
        "If you're looking for an app to help you plan trips, try Wanderlog. It is the travel planner to end all travel planners. I can easily replicate lists in Maps, spreadsheets, Chrome bookmarks, calendar events, personal notes, and more. I used to get exhausted planning one or two trips a year; now, I can plan 10 trips a year and have time to spare. That's how good this app is!",
      author: "Rita El Khoury",
      source: "@Android Authority",
    },
  ];

  const statsData = [
    { number: "8M+", label: "Trips planned" },
    { number: "33K+", label: "Reviews" },
    { number: "4.9★", label: "Rating on App Store" },
    { number: "4.7★", label: "Rating on Google Play" },
  ];

  const sections = [
    {
      title: "Create a trip itinerary to see everything in one place",
      description:
        "Add the places you want to visit and we'll show you how to go between them on a map. Check distances and travel times between locations and attractions, schedule specific times for your visits, and optimize your route so you can make the most of your trip. See your flights and hotels. For the days to keep track of what's coming up.",
    },
    {
      title: "See top attractions and restaurants from the entire web",
      description:
        "Get recommended the top places to visit and the best restaurants. Get ratings for top attractions, check opening hours, and website links for additional info. We've gathered the top of what the entire web has to show you so you can see what are the consensus picks.",
    },
    {
      title: "Plan road trips and hit the road",
      description:
        "Create a detailed itinerary for your road trip. Add all your stops, check distances between them, and see route alternatives to optimize your route between cities. We optimize your route to make sure and ensure a smooth journey.",
    },
  ];
  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="hero-section">
        <h1>One app for all your travel planning needs</h1>
        <p>
          Create detailed itineraries, explore user-curated guides, and manage
          your bookings seamlessly — all in one place.
        </p>
        <div className="hero-buttons">
          <Link to='/onboarding'><button className="start-btn">Start planning</button></Link>
          <button className="app-btn">Get the app →</button>
        </div>
        <div className="hero-image-placeholder">
          <img src={home} alt="" className="home-image" />
        </div>
      </main>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-header">
          <h2>Your itinerary and your map in one view</h2>
          <p>
            No more switching between different steps, tabs... and it's so easy
            to keep track of travel plans.
          </p>
        </div>

        <div className="reviews-header">
          <h2>What travelers are raving about</h2>
          <p>
            Over 1 million people have already tried Wanderlog and loved its
            easy trip planning features.
          </p>
        </div>

        <div className="review">
          <img src={reviews} alt="" />
        </div>

        <div className="see-more">
          <a href="#">See more reviews</a>
        </div>
      </section>
      <div className="feature-sec">
        <span>Features to replace all your other tools</span>
        <div className="features">
          {feature.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        <div className="buttons">
        <Link to='/onboarding'><button className="start-btn">Start planning</button></Link>

          <button className="button2">
            Get the app
            <FaArrowRight />{" "}
          </button>
        </div>
      </div>

      <section className="press-section">
        <h2 className="press-title">Recommended by the press</h2>
        <p className="press-subtitle">
          Leading companies and media outlets are talking about Wanderlog.
          Discover why we're their top choice for travel planning.
        </p>

        {/* Press cards */}
        <div className="press-cards">
          {pressData.map((press, index) => (
            <div key={index} className="press-card">
              <h3 className="press-card-title">{press.title}</h3>
              <p className="press-card-quote">"{press.quote}"</p>
              <p className="press-card-author">
                {press.author}{" "}
                <span className="press-card-source">{press.source}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="press-stats">
          {statsData.map((stat, index) => (
            <div key={index} className="press-stat">
              <h4 className="press-stat-number">{stat.number}</h4>
              <p className="press-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="join">
        <img src={Join} alt="" />
      </div>
      <div className="flight-status">
        <img src={FlightStatus} alt="" />
      </div>

      <div className="trip-itinerary-container">
        {sections.map((section, index) => (
          <div key={index} className={`itinerary-section section-${index + 1}`}>
            <div className="image-container">
              {/* No image provided for this section */}
            </div>
            <div className="text-content">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pro-page-container">
        <div className="header-section">
          <h1 className="title">Maximize your trip planning with Pro</h1>
          <p className="description">
            Experience the full potential of Wandering with a Pro subscription.
            Enjoy enhanced features and streamlined planning.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <span className="feature-icon"><MdFlight/></span>
            <h2 className="feature-title">Live flight updates</h2>
            <p className="feature-description">
              Get notified and monitor your flight status to ensure a smooth
              travel experience.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon"><CiWifiOff/></span>
            <h2 className="feature-title">Offline access</h2>
            <p className="feature-description">
              No wifi, no problem. Your trip plans are locally downloaded for
              access anywhere.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon"><FaEnvelopeCircleCheck/></span>
            <h2 className="feature-title">Automatic Gmail scanning</h2>
            <p className="feature-description">
              Get your travel reservations automatically synced into your trip
              plan.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon"><MdOutlineRoute/></span>
            <h2 className="feature-title">Optimize your route</h2>
            <p className="feature-description">
              Perfect for road trips and saving $$$ on gas. Get the best route
              auto-rearranged.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon"><RxBookmark/></span>
            <h2 className="feature-title">Flight deals</h2>
            <p className="feature-description">
              Cheap flight deals sent straight to your inbox so you can plan
              your next best trip.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon"><GrAttachment/></span>
            <h2 className="feature-title">Unlimited attachments</h2>
            <p className="feature-description">
              Never dig through your emails again - access all your trip files
              and PDFs in one place.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon"><SiGooglemaps/></span>
            <h2 className="feature-title">Export to Google Maps</h2>
            <p className="feature-description">
              Get your places exported to Google Maps. Auto-updated when your
              plans change.
            </p>
          </div>
        </div>

        <div className="button-section">
          <Link to='/onboarding'><button className="start-planning-button">Start planning</button></Link>
          <button className="get-the-app-button">Get the app →</button>
        </div>
      </div>

      <div className="corner">
        <img src={Section} alt="" className="responsive-image"/>
      </div>

      <div>
        <img src={Section2} alt="" className="responsive-image"/>
      </div>

      <div>
        <img src={Background} alt="" className="responsive-image"/>
      </div>

      <div>
        <img src={lower} alt="" className="responsive-image"/>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
