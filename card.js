import React from 'react';
import './Card.css';

const Card = ({ title, value, icon }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Card;