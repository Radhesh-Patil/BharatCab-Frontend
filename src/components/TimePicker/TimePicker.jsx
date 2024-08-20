// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './timePicker.css';

// const TimePicker = () => {
//   const [time, setTime] = useState('08:00');
//   const navigate = useNavigate();

//   const handleTimeChange = (event) => {
//     setTime(event.target.value);
//   };

//   const handleContinue = () => {
//     navigate('/publishride/passengers');
//   };

//   return (
//     <div className="time-picker-container">
//         <div className='header'>
//             <h1><b>At what time will you pick passengers up?</b></h1>
//         </div>
//       <div className="time-picker">
//         <input
//           type="time"
//           value={time}
//           onChange={handleTimeChange}
//         />
//       </div>
//       <button className="continue-button" onClick={handleContinue}>
//         Continue
//       </button>
//     </div>
//   );
// };

// export default TimePicker;


import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './timePicker.css';

const TimePicker = () => {
  const [time, setTime] = useState('08:00');
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleContinue = () => {
    // console.log(...state, time);
    navigate('/publishride/passengers', { state: { ...state, time } });
  };

  return (
    <div className="time-picker-container">
      <h1><b>At what time will you pick passengers up?</b></h1>
      <div className="time-picker">
        <input
          type="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </div>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default TimePicker;
