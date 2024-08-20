// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
// import './PublishRide.css'; // Import the CSS for InputPage

// const libraries = ["places"];

// const PublishRide = () => {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "AIzaSyDzd9ZLvRkNAf5K4svJ7qQeZMkidAwt5Ec",
//     libraries,
//   });

//   const [origin, setOrigin] = useState("");
//   const [destination, setDestination] = useState("");
//   const navigate = useNavigate();

//   const handlePlaceSelect = (setLocation) => {
//     return (autocomplete) => {
//       const place = autocomplete.getPlace();
//       setLocation(place.formatted_address);
//     };
//   };

//   const handleSubmit = () => {
//     if (origin && destination) {
//       navigate("/publishride/duration", { state: { origin, destination } });
//     } else {
//       alert("Please enter both origin and destination.");
//     }
//   };

//   return (
//     <div className="publish-ride-container">
//     <div className="row">
//           <h1><b>Become a BharatCab driver and save on travel costs by sharing your ride with passengers.</b></h1>
//         </div>
//     <div className="container">
//     <div className="input-page-container">

//       <div>
        
//         {isLoaded && (
//           <Autocomplete
//             onLoad={(autocomplete) => {
//               autocomplete.setComponentRestrictions({ country: "in" });
//               autocomplete.addListener("place_changed", () =>
//                 handlePlaceSelect(setOrigin)(autocomplete)
//               );
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Leaving from..."
//               value={origin}
//               onChange={(e) => setOrigin(e.target.value)}
//             />
//           </Autocomplete>
//         )}
//       </div>

//       <div>
        
//         {isLoaded && (
//           <Autocomplete
//             onLoad={(autocomplete) => {
//               autocomplete.setComponentRestrictions({ country: "in" });
//               autocomplete.addListener("place_changed", () =>
//                 handlePlaceSelect(setDestination)(autocomplete)
//               );
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Going to..."
//               value={destination}
//               onChange={(e) => setDestination(e.target.value)}
//             />
//           </Autocomplete>
//         )}
//       </div>

//       <button onClick={handleSubmit}>Publish a Ride</button>
//     </div>
//     <div className="car-image">
//           <img src={require('./car-driving.jpg')} class="car-image" alt="Car GIF" />
//       </div>
//       </div>
//     </div>
//   );
// };

// export default PublishRide;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import './PublishRide.css';

const libraries = ["places"];

const PublishRide = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDzd9ZLvRkNAf5K4svJ7qQeZMkidAwt5Ec",
    libraries,
  });

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handlePlaceSelect = (setLocation) => {
    return (autocomplete) => {
      const place = autocomplete.getPlace();
      console.log("Selected place:", place); // Debug logging
      if (place && place.formatted_address) {
        setLocation(place.formatted_address);
      } else {
        console.error("No formatted address found in place.");
      }
    };
  };

  const handleSubmit = () => {
    if (origin && destination) {
      console.log(origin,destination);
      navigate("/publishride/duration", { state: { origin, destination } });
    } else {
      alert("Please enter both origin and destination.");
    }
  };

  return (
    <div className="publish-ride-container">
      <div className="row">
        <h1><b>Become a BharatCab driver and save on travel costs by sharing your ride with passengers.</b></h1>
      </div>
      <div className="container">
        <div className="input-page-container">
          <div>
            {isLoaded && (
              <Autocomplete
                onLoad={(autocomplete) => {
                  autocomplete.setComponentRestrictions({ country: "in" });
                  autocomplete.addListener("place_changed", () =>
                    handlePlaceSelect(setOrigin)(autocomplete)
                  );
                }}
              >
                <input
                  type="text"
                  placeholder="Leaving from..."
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
              </Autocomplete>
            )}
          </div>

          <div>
            {isLoaded && (
              <Autocomplete
                onLoad={(autocomplete) => {
                  autocomplete.setComponentRestrictions({ country: "in" });
                  autocomplete.addListener("place_changed", () =>
                    handlePlaceSelect(setDestination)(autocomplete)
                  );
                }}
              >
                <input
                  type="text"
                  placeholder="Going to..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </Autocomplete>
            )}
          </div>

          <button onClick={handleSubmit}>Publish a Ride</button>
        </div>
      </div>
    </div>
  );
};

export default PublishRide;
