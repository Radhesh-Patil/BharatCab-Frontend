import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css'; 
export default function Page3() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Page4'); // Navigate to Page4
  };

  return (
    <div>
      <h1><strong>What's your date of birth?</strong></h1><br></br>
      <select>
        <option value="Mr.">Mr.</option>
        <option value="Miss.">Miss.</option>
        <option value="Mrs.">Mrs.</option>
      </select>
      <br></br><br></br>
      <button onClick={handleClick}>Continue</button> {/* Add button to navigate */}
    </div>
  );
}
