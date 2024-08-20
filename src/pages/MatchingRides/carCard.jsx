// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Card, CardContent, Button } from '@mui/material';
// import { styled } from '@mui/system';
// import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
// import { getToken } from '../../service/SessionStorageService';
// import { useLocation, useNavigate } from 'react-router-dom';

// const StyledCard = styled(Card)(({ theme }) => ({
//   borderRadius: '16px',
//   border: '3px solid red',
//   backgroundColor: '#76A9A0',
//   padding: theme.spacing(2),
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   maxWidth: 1000,
//   minWidth: 800,
//   color: 'white',
// }));

// const InfoRow = styled(Box)({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// });

// const Divider = styled('hr')({
//   border: 'none',
//   borderTop: '10px solid white',
//   margin: '8px 0',
// });

// const CarCard = () => {
//   const [matchingRides, setRides] = useState([]);
//   const [error, setError] = useState('');
//   const { state } = useLocation();
//   const { origin, destination, date } = state || {};
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRides = async () => {
//       try {
//         const token = getToken();
//         if (!token) {
//           alert('No token found. Please log in again.');
//           return;
//         }
//         console.log(origin, destination, date);
//         const response = await fetch('http://localhost:9090/availableMatchingRides', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//           },
//           body: JSON.stringify({
//             source: origin?.address || '',
//             destination: destination?.address || '',
//             rideDate: date || ''
//           })
//         });

//         if (response.status === 404) {
//           setError('No rides available');
//           return;
//         }

//         if (!response.ok) {
//           throw new Error('Failed to fetch rides');
//         }

//         const data = await response.json();
//         setRides(data);
//       } catch (error) {
//         console.error('Error fetching rides:', error);
//         setError('Failed to load rides. Please try again.');
//       }
//     };

//     fetchRides();
//   }, [origin, destination, date]);

//   const handleBookRide = (ride) => {
//     navigate('/PaymentDetails', { state: { ride } });
//   };

//   return (
//     <div>
//       {error ? (
//         <Typography variant="h5" color="error" align="center">{error}</Typography>
//       ) : matchingRides.length === 0 ? (
//         <Typography variant="h5" align="center">No rides available</Typography>
//       ) : (
//         matchingRides.map(ride => (
//           <Box
//             key={ride.id}
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             marginTop={5}
//             marginBottom={5}
//           >
//             <StyledCard>
//               <CardContent>
//                 <InfoRow>
//                   <Typography variant="h6" style={{ color: '#ECECEC' }}>{ride.rideTime}</Typography>
//                   <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>{ride.duration}</Typography>
//                   <Typography variant="h6" style={{ color: '#ECECEC' }}>{ride.farePerSeat}</Typography>
//                 </InfoRow>
//                 <InfoRow>
//                   <Typography variant="body1" style={{ fontWeight: 'bold', marginLeft: '10px' }}>{ride.source}</Typography>
//                   <Typography variant="body1" style={{ fontWeight: 'bold', marginLeft: '30px', marginRight: '20px' }}>Duration</Typography>
//                   <Typography variant="body1" style={{ fontWeight: 'bold', marginRight: '80px' }}>{ride.destination}</Typography>
//                   <Typography variant="body1" style={{ fontWeight: 'bold', marginRight: '30px' }}>Price</Typography>
//                 </InfoRow>
//                 <Divider />
//                 <InfoRow>
//                   <Box display="flex" alignItems="center">
//                     <DirectionsCarIcon style={{ color: 'red', marginRight: '8px' }} />
//                     <Typography variant="h6" style={{ fontWeight: 'bold' }}>{ride.vehicleName}</Typography>
//                   </Box>
//                   <Typography variant="body2" style={{ color: '#ECECEC', marginLeft: '20px', marginRight: '450px', marginTop: '5px' }}>{ride.vehicleNumber}</Typography>
//                   <Typography variant="h4" style={{ fontWeight: 'bold', marginRight: '50px' }}>{ride.seatsAvailable}</Typography>
//                 </InfoRow>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => handleBookRide(ride)}
//                   style={{ marginTop: '16px' }}
//                 >
//                   Book Ride
//                 </Button>
//               </CardContent>
//             </StyledCard>
//           </Box>
//         ))
//       )}
//     </div>
//   );
// };

// export default CarCard;
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/system';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { getToken } from '../../service/SessionStorageService';
import { useLocation, useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  border: '3px solid red',
  backgroundColor: '#76A9A0',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWidth: 1000,
  minWidth: 800,
  color: 'white',
}));

const InfoRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Divider = styled('hr')({
  border: 'none',
  borderTop: '10px solid white',
  margin: '8px 0',
});

const CarCard = () => {
  const [matchingRides, setRides] = useState([]);
  const [error, setError] = useState('');
  const { state } = useLocation();
  const { origin, destination, date, seats } = state || {};
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRides = async () => {
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
            source: origin?.address || '',
            destination: destination?.address || '',
            rideDate: date || ''
          })
        });

        if (response.status === 404) {
          setError('No rides available');
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to fetch rides');
        }

        const data = await response.json();
        setRides(data);
      } catch (error) {
        console.error('Error fetching rides:', error);
        setError('Failed to load rides. Please try again.');
      }
    };

    fetchRides();
  }, [origin, destination, date]);

  const handleBookRide = async (ride) => {
    try {
      const token = getToken();
      if (!token) {
        alert('No token found. Please log in again.');
        return;
      }

      const response = await fetch('http://localhost:9090/book-ride', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          publishedRideId: ride.id, // ID of the published ride being booked
          source: ride.source, // Source from the ride details
          destination: ride.destination,
          rideDate: date,
          rideTime: ride.rideTime,
          vehicleName: ride.vehicleName,
          vehicleNumber: ride.vehicleNumber,
          seatsBooked: seats // Number of seats to book
        })
      });

      if (!response.ok) {
        throw new Error('Failed to book ride');
      }

      const bookingDetails = await response.json();

      // Navigate to the booking details page or show booking details
      navigate('/bookingDetails', { state: { bookingDetails } });
    } catch (error) {
      console.error('Error booking ride:', error);
      alert('Failed to book ride. Please try again.');
    }
  };

  return (
    <div>
      {error ? (
        <Typography variant="h5" color="error" align="center">{error}</Typography>
      ) : matchingRides.length === 0 ? (
        <Typography variant="h5" align="center">No rides available</Typography>
      ) : (
        matchingRides.map(ride => (
          <Box
            key={ride.id}
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop={5}
            marginBottom={5}
          >
            <StyledCard>
              <CardContent>
                <InfoRow>
                  <Typography variant="h6" style={{ color: '#ECECEC' }}>{ride.rideTime}</Typography>
                  <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>{ride.duration}</Typography>
                  <Typography variant="h6" style={{ color: '#ECECEC' }}>{ride.farePerSeat}</Typography>
                </InfoRow>
                <InfoRow>
                  <Typography variant="body1" style={{ fontWeight: 'bold', marginLeft: '10px' }}>{ride.source}</Typography>
                  <Typography variant="body1" style={{ fontWeight: 'bold', marginLeft: '30px', marginRight: '20px' }}>Duration</Typography>
                  <Typography variant="body1" style={{ fontWeight: 'bold', marginRight: '80px' }}>{ride.destination}</Typography>
                  <Typography variant="body1" style={{ fontWeight: 'bold', marginRight: '30px' }}>Price</Typography>
                </InfoRow>
                <Divider />
                <InfoRow>
                  <Box display="flex" alignItems="center">
                    <DirectionsCarIcon style={{ color: 'red', marginRight: '8px' }} />
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>{ride.vehicleName}</Typography>
                  </Box>
                  <Typography variant="body2" style={{ color: '#ECECEC', marginLeft: '20px', marginRight: '450px', marginTop: '5px' }}>{ride.vehicleNumber}</Typography>
                  <Typography variant="h4" style={{ fontWeight: 'bold', marginRight: '50px' }}>{ride.seatsAvailable}</Typography>
                </InfoRow>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleBookRide(ride)}
                  style={{ marginTop: '16px' }}
                >
                  Book Ride
                </Button>
              </CardContent>
            </StyledCard>
          </Box>
        ))
      )}
    </div>
  );
};

export default CarCard;
