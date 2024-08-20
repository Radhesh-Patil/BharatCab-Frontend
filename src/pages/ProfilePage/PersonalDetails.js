import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Ensure this path is correct

export default function PersonalDetails() {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    navigate('/AddMiniBio'); // Change '/Page3' to the route you want to navigate to
  };

  return (
    <div>
      <h1 align="left">Personal Details</h1>
      <form>
        
        <label htmlFor="fns">First Name</label><br></br>
        <input type="text" name="fn" id="fns" />
        <label htmlFor="lns">Last Name</label><br></br>
        <input type="text" name="ln" id="lns" />
        
        <label htmlFor="dobs">Date Of Birth</label><br></br>
        <input type="date" name="dob" id="dobs" />
      
        <label htmlFor="ems">Email</label><br></br>
        <input type="email" name="em" id="ems" />
  
        <label htmlFor="mobs">Mobile Phone</label><br></br>
        <input type="text" name="mob" id="mobs" />
        
        <button className='page' onClick={handleClick}>Add mini bio</button><br></br><br></br>
      </form>
    </div>
  );
}
