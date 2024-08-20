// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Passengers.css';

// const Passengers = () => {
//   const [passengerCount, setPassengerCount] = useState(2);
//   const [maxTwoInBack, setMaxTwoInBack] = useState(true);
//   const [womenOnly, setWomenOnly] = useState(true);
//   const navigate = useNavigate();

//   const handlePassengers = () => {
//     navigate('/publishride/pricerange');
//   };

//   const handleIncrease = () => {
//     if (passengerCount < 7) setPassengerCount(passengerCount + 1);
//   };
//   const handleDecrease = () => {
//     if (passengerCount > 1) setPassengerCount(passengerCount - 1);
//   };

//   return (
//     <div className="passenger-selector">
//       <h2><b>So how many BharatCab passengers can you take?</b></h2>
//       <div className="counter">
//         <button onClick={handleDecrease} className="counter-button">-</button>
//         <span className="count">{passengerCount}</span>
//         <button onClick={handleIncrease} className="counter-button">+</button>
//       </div>
//       <div className="options">
//         <b>Passengers Options</b>
//         <div className="option">
//           <input
//             type="checkbox"
//             id="maxTwoInBack"
//             checked={maxTwoInBack}
//             onChange={() => setMaxTwoInBack(!maxTwoInBack)}
//           />
//           <label htmlFor="maxTwoInBack">
//             Max. 2 in the back<br />
//             <span>Think comfort, keep the middle seat empty</span>
//           </label>
//         </div>
//       </div>
//       <button className="continue-button" onClick={handlePassengers}>Continue</button>
//     </div>
//   );
// };

// export default Passengers;

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Passengers.css';

const Passengers = () => {
  const [passengerCount, setPassengerCount] = useState(2);
  const [maxTwoInBack, setMaxTwoInBack] = useState(true);
  const [womenOnly, setWomenOnly] = useState(true);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { date, time } = state || {};

  const handlePassengers = () => {
    // console.log(...state,date, time, passengerCount, maxTwoInBack, womenOnly)
    navigate('/publishride/pricerange', { state: { ...state,date, time, passengerCount, maxTwoInBack, womenOnly } });
  };

  const handleIncrease = () => {
    if (passengerCount < 7) setPassengerCount(passengerCount + 1);
  };
  const handleDecrease = () => {
    if (passengerCount > 1) setPassengerCount(passengerCount - 1);
  };

  return (
    <div className="passenger-selector">
      <h2><b>So how many BharatCab passengers can you take?</b></h2>
      <div className="counter">
        <button onClick={handleDecrease} className="counter-button">-</button>
        <span className="count">{passengerCount}</span>
        <button onClick={handleIncrease} className="counter-button">+</button>
      </div>
      <div className="options">
        <b>Passengers Options</b>
        <div className="option">
          <input
            type="checkbox"
            id="maxTwoInBack"
            checked={maxTwoInBack}
            onChange={() => setMaxTwoInBack(!maxTwoInBack)}
          />
          <label htmlFor="maxTwoInBack">
            Max. 2 in the back<br />
            <span>Think comfort, keep the middle seat empty</span>
          </label>
        </div>
      </div>
      <button className="continue-button" onClick={handlePassengers}>Continue</button>
    </div>
  );
};

export default Passengers;
