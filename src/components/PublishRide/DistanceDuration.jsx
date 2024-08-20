// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useJsApiLoader } from "@react-google-maps/api";
// import './DistanceDuration.css'; // Import the CSS for ResultsPage

// const libraries = ["places"];

// const DistanceDuration = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   const { origin, destination } = state || {};
  
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "AIzaSyDzd9ZLvRkNAf5K4svJ7qQeZMkidAwt5Ec",
//     libraries,
//   });

//   const handleContinue = () => {
//     navigate('/publishride/datepicker');
//   };

//   const [distance, setDistance] = useState(null);
//   const [duration, setDuration] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!isLoaded || !origin || !destination) return;

//     const service = new window.google.maps.DistanceMatrixService();
//     service.getDistanceMatrix(
//       {
//         origins: [origin],
//         destinations: [destination],
//         travelMode: window.google.maps.TravelMode.DRIVING, // You can change this to WALKING, BICYCLING, TRANSIT
//       },
//       (response, status) => {
//         if (status === "OK") {
//           const result = response.rows[0].elements[0];

//           if (result.status === "OK") {
//             setDistance(result.distance?.text || "N/A");
//             setDuration(result.duration?.text || "N/A");
//             setError(""); // Clear any previous errors
//           } else {
//             setError("Unable to calculate distance for the provided locations.");
//           }
//         } else {
//           setError(`Error with distance matrix: ${status}`);
//           console.error("Error with distance matrix:", status);
//         }
//       }
//     );
//   }, [isLoaded, origin, destination]);

//   if (!origin || !destination) {
//     return <p>Please go back and enter the origin and destination.</p>;
//   }

//   return (
//     <div>
//       <div className="row">
//         <h1><b>Distance and Duration</b></h1>
//       </div>
//     <div className="results-page-container">
//       <p><strong>From:</strong> {origin}</p>
//       <p><strong>To:</strong> {destination}</p>

//       {error && <p className="error-message">{error}</p>}
//       {distance && <p><strong>Distance:</strong> {distance}</p>}
//       {duration && <p><strong>Duration:</strong> {duration}</p>}
//     <div className="continue-button">
//       <button onClick={handleContinue}>Continue</button>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default DistanceDuration;


import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useJsApiLoader } from "@react-google-maps/api";
import './DistanceDuration.css';

const libraries = ["places"];

const DistanceDuration = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { origin, destination } = state || {};
  
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDzd9ZLvRkNAf5K4svJ7qQeZMkidAwt5Ec", 
    libraries,
  });

  const handleContinue = () => {
    console.log(origin, destination, distance, duration)
    navigate('/publishride/datepicker', { state: { origin, destination, distance, duration } });
  };

  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isLoaded || !origin || !destination) return;

    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          const result = response.rows[0].elements[0];
          if (result.status === "OK") {
            setDistance(result.distance?.text || "N/A");
            setDuration(result.duration?.text || "N/A");
            setError("");
          } else {
            setError("Unable to calculate distance for the provided locations.");
          }
        } else {
          setError(`Error with distance matrix: ${status}`);
        }
      }
    );
  }, [isLoaded, origin, destination]);

  return (
    <div>
      <h1><b>Distance and Duration</b></h1>
      <div className="results-page-container">
        <p><strong>From:</strong> {origin}</p>
        <p><strong>To:</strong> {destination}</p>
        {error && <p className="error-message">{error}</p>}
        {distance && <p><strong>Distance:</strong> {distance}</p>}
        {duration && <p><strong>Duration:</strong> {duration}</p>}
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default DistanceDuration;
