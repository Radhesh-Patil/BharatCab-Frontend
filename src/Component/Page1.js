import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css'; 
export default function Page1() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Page2'); // Change '/page2' to the route you want to navigate to
  };

  return (
    <div>
      <h1><strong>What's your name?</strong></h1><br></br>
      <input type="text" id="name" name="name" placeholder="first name" required/><br></br><br></br>
      <input type="text" id="name" name="name" placeholder="last name" required /><br></br><br></br>
      <br></br>
      <button onClick={handleClick}>Continue</button>
    </div>
  );
}
