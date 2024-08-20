import React from 'react';
import './steps.css';

import easeOfBookingImg from './images/ease-of-booking.png';
import gpsTrackingImg from './images/gps-tracking.png';
import comfortableRidesImg from './images/comfortable-rides.png';
import affordablePricesImg from './images/affordable-prices.png';
import twentyFourSevenServiceImg from './images/24-7-service.png';

const FullWidthImage = () => {
  return (
    <div className="container">
      <div className="rectangle">
        <div className="text">
          <h1>01. Ease of booking</h1>
          <p>Securing a ride is effortless, just a few taps and you're all set for your ride.</p>
        </div>
        <div className="image">
          <img src={easeOfBookingImg} alt="Ease of Booking" />
        </div>
      </div>

      <div className="rectangle">
        <div className="image">
          <img src={gpsTrackingImg} alt="GPS Tracking" />
        </div>
        <div className="text">
          <h1>02. GPS tracking</h1>
          <p>With advanced GPS tracking, get the exact location of your vehicle.</p>
        </div>
      </div>

      <div className="rectangle">
        <div className="text">
          <h1>03. Comfortable & secure rides</h1>
          <p>Enjoy comfortable and secure rides with our trusted carpooling service, ensuring a stress-free and reliable commute for all passengers.</p>
        </div>
        <div className="image">
          <img src={comfortableRidesImg} alt="Comfortable & Secure Rides" />
        </div>
      </div>

      <div className="rectangle">
        <div className="image">
          <img src={affordablePricesImg} alt="Affordable Prices" />
        </div>
        <div className="text">
          <h1>04. Affordable prices</h1>
          <p>Experience top-notch service at unbeatable prices, making travel more affordable than ever.</p>
        </div>
      </div>

      <div className="rectangle">
        <div className="text">
          <h1>05. 24/7 Service</h1>
          <p>Count on our round-the-clock availability to provide you with dependable service whenever you need it.</p>
        </div>
        <div className="image">
          <img src={twentyFourSevenServiceImg} alt="24/7 Service" />
        </div>
      </div>
    </div>
  );
}

export default FullWidthImage;
