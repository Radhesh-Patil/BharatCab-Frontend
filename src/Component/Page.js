import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css'// Make sure the path is correct

export default function Page() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Page1'); 
  };

  return (
    <div>
      <h1><strong>What's your email?</strong></h1><br></br><br></br>
      <div>
        <input type="email" name="email" id="email" placeholder="email" required /><br /><br />
      </div>
      <span className="checkbox-container">
        <input type="checkbox" id="box" name="box" required />
        <label htmlFor="box" align="center">I don't want to get news, good deals, and gifts from BharatCab</label>
      </span><br></br>
      <p>When I'm subscribed, I can opt out anytime by contacting BharatCab or via link in the newsletter.</p>
      <button onClick={handleClick}>Continue</button>
    </div>
  );
}
