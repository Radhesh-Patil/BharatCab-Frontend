// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import './PriceRange.css'; // Import the CSS for PricePage

// const PriceRange = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   const { distance, origin, destination, date } = state || {};

//   // Calculate the base price by multiplying the distance by 4
//   // const distanceInKm = parseFloat(distance);
//   // const maxPrice = distanceInKm * 4;
//   const maxPrice=2000;

//   // Initialize price with the maximum price
//   const [price, setPrice] = useState(maxPrice);

//   const handlePriceChange = (event) => {
//     setPrice(event.target.value);
//   };

//   const handleConfirmClick = () => {
//     // Logic to save the ride details can go here
//     navigate("/publishride/success"); // Navigate to SuccessPage
//   };

//   return (
//     <div>
//       <div className="row">
//         <h1><b>Set Your Cab Price</b></h1>
//       </div>
//       <div className="price-page-container">
//         <p><strong>Max Price (per person):</strong> ₹{maxPrice.toFixed(2)}</p>

//         <div className="price-range">
//           <label>Set your price: ₹{price}</label>
//           <input
//             type="range"
//             min={0}
//             max={maxPrice}
//             value={price}
//             onChange={handlePriceChange}
//           />
//           <p><strong>Selected Price:</strong> ₹{price}</p>
//         </div>

//         <button className="confirm-button" onClick={handleConfirmClick}>Confirm Price</button>
//       </div>
//     </div>
//   );
// };

// export default PriceRange;


import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './PriceRange.css';

const PriceRange = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { distance, origin, destination, date, time, passengerCount, maxTwoInBack, womenOnly } = state || {};

  const maxPrice = 2000;
  const [price, setPrice] = useState(maxPrice);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleConfirmClick = async () => {
    try {
      const response = await fetch("http://localhost:9090/publish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionStorage.getItem('jwtToken')}`
        },
        body: JSON.stringify({
          source: origin,
          destination: destination,
          rideDate: date,
          rideTime: time,
          vehicleId: "2", // Example vehicleId, replace with actual data if needed
          farePerSeat: price,
          seatsAvailable: passengerCount
        })
      });

      if (response.ok) {
        navigate("/publishride/success");
      } else {
        console.error("Failed to publish ride:", response.statusText);
      }
    } catch (error) {
      console.error("Error publishing ride:", error);
    }
  };

  return (
    <div>
      <div className="row">
        <h1><b>Set Your Cab Price</b></h1>
      </div>
      <div className="price-page-container">
        <p><strong>Max Price (per person):</strong> ₹{maxPrice.toFixed(2)}</p>

        <div className="price-range">
          <label>Set your price: ₹{price}</label>
          <input
            type="range"
            min={0}
            max={maxPrice}
            value={price}
            onChange={handlePriceChange}
          />
          <p><strong>Selected Price:</strong> ₹{price}</p>
        </div>

        <button className="confirm-button" onClick={handleConfirmClick}>Confirm Price</button>
      </div>
    </div>
  );
};

export default PriceRange;
