// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './datePicker.css'; // Optional: For custom styling

// const DatePicker = () => {
//     const navigate = useNavigate();
//     const [selectedDate, setSelectedDate] = useState(new Date());

//     const handleDateClick = (day) => {
//         const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
//         setSelectedDate(newDate);
//     };

//     const renderCalendar = () => {
//         const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
//         const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

//         const days = [];
//         for (let i = 0; i < firstDayOfMonth; i++) {
//             days.push(<div className="empty-day" key={`empty-${i}`} />);
//         }

//         for (let day = 1; day <= daysInMonth; day++) {
//             days.push(
//                 <div
//                     className={`day ${day === selectedDate.getDate() ? 'selected' : ''}`}
//                     key={day}
//                     onClick={() => handleDateClick(day)}
//                 >
//                     {day}
//                 </div>
//             );
//         }

//         return days;
//     };

//     const handleMonthChange = (offset) => {
//         const newDate = new Date(selectedDate.setMonth(selectedDate.getMonth() + offset));
//         setSelectedDate(new Date(newDate));
//     };

//     const handleContinue = () => {
//         navigate('/publishride/datepicker/timepicker');
//       };

//     return (
//         <div className="date-picker">
//             <div className='header'>
//                 <b><h1>When are you going?</h1></b>
//             </div>
//             <div className='calender'>
//                 <div className="calendar-header">
//                     <button onClick={() => handleMonthChange(-1)}>&lt;</button>
//                     <div className="month-year">
//                         {selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}
//                     </div>
//                     <button onClick={() => handleMonthChange(1)}>&gt;</button>
//                 </div>
//                 <div className="calendar">
//                     <div className="weekdays">
//                         {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
//                             <div key={index} className="weekday">
//                                 {day}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="days">{renderCalendar()}</div>
//                 </div>
//                 <div className='continue-button'>
//                 <button onClick={handleContinue}>Continue</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DatePicker;
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './datePicker.css'; 

const DatePicker = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateClick = (day) => {
    const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    setSelectedDate(newDate);
  };

  const handleContinue = () => {
    const safeState = state || {}; // Handle possible null or undefined state
    console.log('State:', safeState);
    console.log('Selected Date:', selectedDate);
    // console.log(...safeState)
    navigate('/publishride/datepicker/timepicker', { state: { ...safeState, date: selectedDate.toISOString().split('T')[0] } });
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div className="empty-day" key={`empty-${i}`} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          className={`day ${day === selectedDate.getDate() ? 'selected' : ''}`}
          key={day}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="date-picker">
      <h1><b>When are you going?</b></h1>
      <div className='calendar'>
        <div className="calendar-header">
          <button onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}>&lt;</button>
          <div>{selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}</div>
          <button onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}>&gt;</button>
        </div>
        <div className="weekdays">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className="weekday">{day}</div>
        ))}</div>
        <div className="days">{renderCalendar()}</div>
      </div>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default DatePicker;
