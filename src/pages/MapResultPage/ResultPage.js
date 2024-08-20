// import React, { useState, useEffect, useCallback } from 'react';
// import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { getToken } from '../../service/SessionStorageService';

// const libraries = ['places'];

// const ResultPage = () => {
//   const { state } = useLocation();
//   const { origin, destination, date } = state || {};
//   const navigate = useNavigate();

//   const [directionsResponse, setDirectionsResponse] = useState(null);
//   const [distance, setDistance] = useState('');
//   const [duration, setDuration] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const calculateRoute = useCallback(() => {
//     if (origin && destination) {
//       setLoading(true);
//       setError('');

//       const directionsService = new window.google.maps.DirectionsService();
//       directionsService.route(
//         {
//           origin: origin.address,
//           destination: destination.address,
//           travelMode: window.google.maps.TravelMode.DRIVING,
//         },
//         (result, status) => {
//           setLoading(false);
//           if (status === window.google.maps.DirectionsStatus.OK) {
//             setDirectionsResponse(result);
//             setDistance(result.routes[0].legs[0].distance.text);
//             setDuration(result.routes[0].legs[0].duration.text);
//           } else {
//             setError('Error fetching directions. Please try again.');
//             console.error('Error fetching directions:', status);
//           }
//         }
//       );
//     }
//   }, [origin, destination]);

//   useEffect(() => {
//     calculateRoute();
//   }, [calculateRoute]);

//   const handleNext = async () => {
//     try {
//       // Retrieve the token from session storage
//       const token = getToken();
//       console.log("jwt token :"+token);
//       //Check if the token exists
//       if (!token) {
//         alert('No token found. Please log in again.');
//         return;
//       }

//       // Make the request to the server
//       const response = await fetch('http://localhost:9090/availableMatchingRides', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}` // Include the token in the Authorization header
//         },
//         body: JSON.stringify({
//           source: origin.address,
//           destination: destination.address,
//           rideDate: date
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch matching rides');
//       }

//       const data = await response.json();
      
//       // Navigate to the next page with the response data
//       navigate('/matchingRidesPage', { state: { origin, destination, date, rides: data } });

      
//     } catch (error) {
//       console.error('Error fetching matching rides:', error);
//       alert('Failed to fetch matching rides. Please try again.');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <GoogleMap
//         center={{ lat: 20.5937, lng: 78.9629 }} // Default center (India)
//         zoom={6}
//         mapContainerStyle={{ height: '400px', width: '100%' }}
//       >
//         {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
//       </GoogleMap>

//       <div style={{ marginTop: '20px' }}>
//         {loading && <p>Calculating route...</p>}
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <p>Distance: {distance}</p>
//         <p>Duration: {duration}</p>
//         <p>Travel Date: {date}</p> {/* Display the selected date */}
        
//         {/* Add the "Next" button */}
//         <button
//           className="btn btn-primary"
//           type="button"
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ResultPage;

import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';
import { useLocation, useNavigate } from 'react-router-dom';
import { getToken } from '../../service/SessionStorageService';

const libraries = ['places'];

const ResultPage = () => {
  const { state } = useLocation();
  const { origin, destination, date, seats } = state || {}; // Extract number of seats
  const navigate = useNavigate();

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const calculateRoute = useCallback(() => {
    if (origin && destination) {
      setLoading(true);
      setError('');

      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin.address,
          destination: destination.address,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          setLoading(false);
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
            setDistance(result.routes[0].legs[0].distance.text);
            setDuration(result.routes[0].legs[0].duration.text);
          } else {
            setError('Error fetching directions. Please try again.');
            console.error('Error fetching directions:', status);
          }
        }
      );
    }
  }, [origin, destination]);

  useEffect(() => {
    calculateRoute();
  }, [calculateRoute]);

  const handleNext = async () => {
    try {
      const token = getToken();
      if (!token) {
        alert('No token found. Please log in again.');
        return;
      }

      const response = await fetch('http://localhost:9090/availableMatchingRides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          source: origin.address,
          destination: destination.address,
          rideDate: date
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch matching rides');
      }

      const data = await response.json();
      
      // Navigate to the next page with the response data and seats
      navigate('/matchingRidesPage', { state: { origin, destination, date, seats, rides: data } });

    } catch (error) {
      console.error('Error fetching matching rides:', error);
      alert('Failed to fetch matching rides. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <GoogleMap
        center={{ lat: 20.5937, lng: 78.9629 }}
        zoom={6}
        mapContainerStyle={{ height: '400px', width: '100%' }}
      >
        {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
      </GoogleMap>

      <div style={{ marginTop: '20px' }}>
        {loading && <p>Calculating route...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p>Distance: {distance}</p>
        <p>Duration: {duration}</p>
        <p>Travel Date: {date}</p>
        <p>Number of Seats: {seats}</p> {/* Display number of seats */}
        
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
