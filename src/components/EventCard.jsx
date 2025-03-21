import React from 'react';

const EventCard = ({ title, time, location, description, image }) => {
  return (
    <div className="card shadow-sm">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"><strong>Time:</strong> {time}</p>
        <p className="card-text"><strong>Location:</strong> {location}</p>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
