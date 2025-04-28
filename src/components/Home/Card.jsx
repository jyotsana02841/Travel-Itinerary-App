import React from "react";
import "../../styles/Home/Card.css";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={item.image} alt="" />
      </div>
      <div className="title">{item.title} </div>
      <div className="description">{item.description} </div>
    </div>
  );
};

export default Card;
