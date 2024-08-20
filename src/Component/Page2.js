import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css'; 
export default function Page2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Page3'); // Navigate to Page3
  };

  return (
    <div>
      <h1><strong>What's your date of birth?</strong></h1><br></br>
      <input type="date" id="dob" name="dob" required /><br></br><br></br>
      <button onClick={handleClick}>Continue</button> {/* Add button to navigate */}
    </div>
  );
}
