import React from "react";
import profile from "../../assets/images/profile.png";
import "../../styles/Dashboard/Header.css";
import { GiNetworkBars } from "react-icons/gi";
import { CiWifiOn } from "react-icons/ci";
import { CiBatteryFull } from "react-icons/ci";

const Header = () => {
  return (
    <div className="nav">
      <div className="upper-nav">
        <div className="cnt-one">
          <span>9:41</span>
        </div>
        <div className="cnt-two">
          <span className="icons">
            <GiNetworkBars />
          </span>
          <span className="icons">
            <CiWifiOn />
          </span>
          <span className="icons">
            <CiBatteryFull />
          </span>
        </div>
      </div>

      <div className="lower-nav">
        <div className="content">
          <h1>Hello Chhavi!</h1>
          <p>Ready for the trip?</p>
        </div>
        <img src={profile} alt="profile" className="img" />
      </div>
    </div>
  );
};

export default Header;
