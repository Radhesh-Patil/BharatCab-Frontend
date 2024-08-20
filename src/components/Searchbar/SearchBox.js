import React, { useRef, useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import './searchbar.css';

const SearchBox = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState('');
  const [seats, setSeats] = useState(1); // Added state for number of seats
  const originRef = useRef(null);
  const destinationRef = useRef(null);
  const navigate = useNavigate();

  const handlePlaceChanged = (ref, setPlace) => {
    const place = ref.current.getPlace();
    if (place.geometry) {
      setPlace({
        address: place.formatted_address,
        location: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
      });
    } else {
      alert('Please select a valid location from the dropdown');
    }
  };

  const handleSearch = () => {
    if (!origin || !destination) {
      alert('Please fill in both origin and destination');
      return;
    }

    navigate('/resultpage', { state: { origin, destination, date, seats } });
  };

  return (
    <nav className="navbar2 navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Autocomplete
          onLoad={(autocomplete) => (originRef.current = autocomplete)}
          onPlaceChanged={() => handlePlaceChanged(originRef, setOrigin)}
        >
          <input
            className="form-control me-2"
            type="text"
            placeholder="Leaving from"
            aria-label="Leaving from"
          />
        </Autocomplete>

        <Autocomplete
          onLoad={(autocomplete) => (destinationRef.current = autocomplete)}
          onPlaceChanged={() => handlePlaceChanged(destinationRef, setDestination)}
        >
          <input
            className="form-control me-2"
            type="text"
            placeholder="Going to"
            aria-label="Going to"
          />
        </Autocomplete>

        <input
          className="form-control me-2"
          type="date"
          aria-label="Travel date"
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          className="form-control me-2"
          type="number"
          value={seats}
          min="1"
          onChange={(e) => setSeats(Number(e.target.value))} // Ensure value is a number
          aria-label="Number of seats"
        />

        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default SearchBox;
