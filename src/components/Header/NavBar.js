import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css'; // Ensure this file exists
import userImage from './user.png'; // Adjust path according to your structure

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">BharatCab</div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/publishride">Publish a ride</Link></li>

        {/* Profile Dropdown */}
        <li className="dropdown">
          <div onClick={toggleDropdown} className="dropdown-toggle">
            <img 
              src={userImage} 
              alt="User Profile" 
              className="profile-image"
            />
          </div>
          {dropdownOpen && (
            <div>
              <ul>
                <li onClick={() => navigate("/your-rides")}>Your Rides</li>
                <li onClick={() => navigate("/profile")}>Profile</li>
                <li onClick={() => navigate("/PaymentDetails")}>Payments & Refunds</li>
                <li onClick={() => navigate("/logout")}>Logout</li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
