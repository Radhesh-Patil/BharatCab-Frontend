import React from "react";
import { useNavigate } from "react-router-dom";
import "./VehicleColor.css";

export default function VehicleColor() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/VehicleColor'); // Change '/page2' to the route you want to navigate to
  };
  const handleBackClick = () => {
    navigate('/profile'); // Change '/page2' to the route you want to navigate to
  };
  return (
    <div className="vehiclecolor">
      <h2 style={{marginTop:'10px', marginBottom:'10px',height:'150px'}}><b>What color is your vehicle ?</b></h2>
      <form action="#">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="enter color"
          required
        />
        <br></br>
        <br></br>
        <br></br>
        <div>
        <button  onClick={handleClick}>Continue</button>
        <button  onClick={handleBackClick}>Back</button>
      </div>
      </form>
    </div>
  );
}
