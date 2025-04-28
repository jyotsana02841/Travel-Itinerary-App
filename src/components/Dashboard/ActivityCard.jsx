import React from 'react';
import '../../styles/Dashboard/ActivityCard.css'; // Import the CSS file

const ActivityCard = ({ item }) => {
  return (
    <div className="activity-card">
      <div className="image-container">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="details">
        <h3 className="title">{item.title}</h3>
        {item.subtitle && <h4 className="subtitle">{item.subtitle}</h4>}
        <p className="timing">Timing: {item.timing}</p>
        <p className="duration">Duration: {item.duration}</p>
        <p className="pickup">Pick up: {item.pickup}</p>
      </div>
    </div>
  );
};

export default ActivityCard;