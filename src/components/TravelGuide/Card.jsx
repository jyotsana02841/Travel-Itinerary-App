import React from 'react';
import '../../styles/TravelGuide/Card.css'
import { TiUser } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={item.image_url} alt={item.title} />
      </div>
      <div className="title">{item.title}</div>
      
      <div className="likes-views">
      <div className="profile-name"><TiUser/> {item.profile_name}</div>
        <span><CiHeart/> {item.likes}</span>
        <span><FiEye/> {item.views}</span>
      </div>
    </div>
  );
};

export default Card;
