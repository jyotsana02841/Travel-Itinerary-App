import React from "react";
import Header from "./../components/Dashboard/Header.jsx";
import HeadBar from "../components/Dashboard/HeadBar.jsx";
import AccomodationCard from "../components/Dashboard/AccomodationCard.jsx";
import ActivityCard from "../components/Dashboard/ActivityCard.jsx";
import Footer from "../components/Dashboard/Footer.jsx";
import "./../styles/Dashboard/Dashboard.css";
import Tokyo from "./../assets/images/Tokyo.png";
import Flight from "./../assets/images/Flight.png";
import Activity from "./../assets/images/Activities.png";
import { data } from "../data/data.js";
import { data2 } from "../data/data2.js";
import { MdElderlyWoman } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <span className="text">Your Upcoming Trip</span>
        <div className="tokyo">
          <img src={Tokyo} alt="" className="tokyo-image" />
        </div>
        <div className="flight">
          <img src={Flight} alt="" />
        </div>
        <div className="accomodation">
          <HeadBar title={"Accomodation"} />

          <div className="cont">
            <div className="card">
              {data.map((item) => (
                <AccomodationCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="activities">
          <HeadBar title={"Activities"} />
          <div className="img">
            <img src={Activity} alt="" />
          </div>
          <div className="buttons">
            <button className="btn1">Day 1 27.01.2025</button>
            <span className="btn2">
              <MdElderlyWoman />3 Activities
            </span>
          </div>
          <div className="ActivityCard">
            {data2.map((item) => (
              <ActivityCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
