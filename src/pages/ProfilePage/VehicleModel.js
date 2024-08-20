import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VehicleModel.css';
export default function VehicleModel() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/VehicleColor'); // Change '/page2' to the route you want to navigate to
  };
  const handleBackClick = () => {
    navigate('/profile'); // Change '/page2' to the route you want to navigate to
  };


  return (
    <div className='vehiclemodel'>
      <h2 align="center"><b>What's your vehicle's model?</b></h2>
      <input type="text" id="name" name="name" placeholder="enter model" required/><br></br><br></br>
      <br></br>
      <div>
        <button  onClick={handleClick}>Continue</button>
        <button  onClick={handleBackClick}>Back</button>
      </div>
    </div>
  );
}
