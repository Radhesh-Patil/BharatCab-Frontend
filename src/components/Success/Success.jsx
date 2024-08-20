// import React from "react";
// import { useNavigate } from "react-router-dom";
// import './Success.css'; // Import the CSS for SuccessPage

// const Success = () => {
//   const navigate = useNavigate();

//   const handleHomeClick = () => {
//     navigate("/"); // Navigate back to the home or input page
//   };

//   return (
//     <div className="success-page-container">
//       <h1><b>Ride Published Successfully!</b></h1>
//       <p>Your ride has been published. You will be notified when someone books your ride.</p>

//       <button onClick={handleHomeClick} className="home-button">
//         Go to Home
//       </button>
//     </div>
//   );
// };

// export default Success;


import React from "react";
import { useNavigate } from "react-router-dom";
import './Success.css';

const Success = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home"); // Navigate back to the home or input page
  };

  return (
    <div className="success-page-container">
      <h1><b>Ride Published Successfully!</b></h1>
      <p>Your ride has been published. You will be notified when someone books your ride.</p>

      <button onClick={handleHomeClick} className="home-button">
        Go to Home
      </button>
    </div>
  );
};

export default Success;
