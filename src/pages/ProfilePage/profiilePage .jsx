import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { getToken } from '../../service/SessionStorageService';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState('');

  // Function to handle JWT token retrieval (assuming stored in sessionStorage or localStorage)
  // const getJwtToken = () => {
  //   return getToken();
  // };

  // Fetch user details from the backend
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = sessionStorage.getItem('jwtToken');
        if (!token) {
          setError('No token found. Please log in again.');
          return;
        }

        const response = await axios.get('http://localhost:9090/userdetails', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Assuming response.data contains the user details in the structure of UserDTO
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setError('Failed to load user details. Please try again later.');
      }
    };

    fetchUserDetails();
  }, []);

  const handleEditPersonalDetails = () => {
    navigate('/Profile');
  };

  const handleAddVehicle = () => {
    navigate('/VehicleBrand');
  };

  return (
    <div>
      <div className="profile-section">
        <p className="section-title">Profile Details</p>
        {error ? (
          <p className="error-message">{error}</p>
        ) : userDetails ? (
          <table className="profile-details-table">
            <tbody>
              <tr>
                <td><strong>First Name:</strong></td>
                <td>{userDetails.firstName}</td>
              </tr>
              <tr>
                <td><strong>Last Name:</strong></td>
                <td>{userDetails.lastName}</td>
              </tr>
              <tr>
                <td><strong>Registered Email:</strong></td>
                <td>{userDetails.userEmail}</td>
              </tr>
              <tr>
                <td><strong>Registered Vehicle:</strong></td>
                <td>{userDetails.userLisenceNo || 'No vehicle registered'}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading user details...</p>
        )}
        <button className="edit-button" onClick={handleEditPersonalDetails}>
          <b>Edit Personal Details</b>
        </button>
      </div>

      <hr className="divider" />

      <div className="profile-section">
        <p className="section-title">Vehicles</p>
        <button className="add-vehicle-button" onClick={handleAddVehicle}>
          + Add Vehicle
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
