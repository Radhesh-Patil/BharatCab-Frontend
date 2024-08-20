import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingDetails = () => {
  const { state } = useLocation();
  const { bookingDetails } = state || {};
  const navigate = useNavigate();

  if (!bookingDetails) {
    return <p>No booking details available.</p>;
  }

  const handleProceedToPayment = () => {
    navigate('/paymentDetails', {
      state: {
        totalAmount: bookingDetails.totalFare, // Pass the total fare to the payment page
        bookingDetails
      }
    });
  };

  return (
    <div>
      <h2>Booking Confirmed</h2>
      <p><strong>Booking ID:</strong> {bookingDetails.id}</p>
      <p><strong>Published Ride ID:</strong> {bookingDetails.publishedRideId}</p>
      <p><strong>Source:</strong> {bookingDetails.source}</p>
      <p><strong>Destination:</strong> {bookingDetails.destination}</p>
      <p><strong>Ride Date:</strong> {bookingDetails.rideDate}</p>
      <p><strong>Ride Time:</strong> {bookingDetails.rideTime}</p>
      <p><strong>Vehicle Name:</strong> {bookingDetails.vehicleName}</p>
      <p><strong>Vehicle Number:</strong> {bookingDetails.vehicleNumber}</p>
      <p><strong>Seats Booked:</strong> {bookingDetails.seatsBooked}</p>
      <p><strong>Total Fare:</strong> {bookingDetails.totalFare}</p>
      
      <button onClick={handleProceedToPayment} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#07a291db', color: 'white', border: 'none', borderRadius: '5px' }}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default BookingDetails;
