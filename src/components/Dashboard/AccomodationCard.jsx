import React from 'react';
import '../../styles/Dashboard/AccomodationCard.css'; 
import { CiCircleCheck } from "react-icons/ci";
import { FaClockRotateLeft } from "react-icons/fa6";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      
      <div className="img-container">
        <img src={item.img} alt={item.title} />
        <div className="rating">
          <span className="star">★</span> {item.rating}
        </div>
      </div>
      <div className="details">
        <h3 className="title">{item.title}</h3>
        <p className="checkin">Check in: {item.checkin}</p>
        <p className="checkout">Check out: {item.checkout}</p>
        <p className="duration">{item.time}</p>
        <div className="status-container">
          <span className={`status ${item.status.toLowerCase()}`}>
            {item.status === "Confirmed" && <span className="icon check"><CiCircleCheck /></span>}
            {item.status === "Pending" && <span className="icon clock"><FaClockRotateLeft /></span>}
            {item.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;