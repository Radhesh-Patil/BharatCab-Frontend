import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VehicleBrand.css';
export default function VehicleBrand() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/VehicleModel'); // Change '/page2' to the route you want to navigate to
  };
  const handleBackClick = () => {
    navigate('/profile'); // Change '/page2' to the route you want to navigate to
  };

  return (
    <div className='vehiclebrand'>
      <h2><b>What's your vehicle's brand?</b></h2>
      <input type="text" id="name" name="name" placeholder="enter brand" required /><br></br><br></br>
      <br></br>
      <div>
        <button onClick={handleClick}>Continue</button>
        <button  onClick={handleBackClick}>Back</button>
      </div>
    </div>
        
  );
}
