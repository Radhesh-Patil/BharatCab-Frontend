import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InstantBooking.css';

const InstantBooking = () => {
    const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/publishride/instantbooking/pricerange');
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={require('./passengers.jpg')} alt="Passenger" className="image" />
      </div>
      <div className="content-container">
        <h1><b>Enable Instant Booking for your passengers</b></h1>
        <ul>
          <li>
            <i className="icon-bell"></i>
            <div>
              <strong>🔔 More convenience</strong>
              <p>No need to review every passenger’s request before it expires</p>
            </div>
          </li>
          <li>
            <i className="icon-lightning"></i>
            <div>
              <strong>⚡ Get more passengers</strong>
              <p>They prefer to get an instant answer</p>
            </div>
          </li>
          <li>
          <button className="primary-button" onClick={handleBooking}>Enable Instant Booking.....</button>
          </li>
        
        </ul>
      </div>
    </div>
  );
};

export default InstantBooking;
