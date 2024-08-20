import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css'; 
export default function Page4() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Page5'); // Navigate to Page5
  };

  return (
    <div>
      <h1><strong>Define your password</strong></h1><br></br><br></br>
      <p align="center">It must have at least 8 characters, 1 letter, 1 number, and 1 special character.</p>
      <input type="password" id="pass" name="pass"  required/><br></br><br></br>
      <button onClick={handleClick}>Continue</button> {/* Add button to navigate */}
    </div>
  );
}
