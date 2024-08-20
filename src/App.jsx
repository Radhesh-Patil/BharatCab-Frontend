import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import LoginPage from './pages/Login/login';
import SearchRide from './pages/NavSearch/SearchRide';
import RideDetailsPage from './pages/rideDetails';
import CarOwnerDetails from './pages/CarOwner';
import Page from './Component/Page';
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
import Page3 from './Component/Page3';
import Page4 from './Component/Page4';
import Page5 from './Component/Page5';
import PersonalDetails from './pages/ProfilePage/PersonalDetails';
import VehicleBrand from './pages/ProfilePage/VehicleBrand';
import VehicleColor from './pages/ProfilePage/VehicleColor';
import VehicleModel from './pages/ProfilePage/VehicleModel';
import PaymentDetails from './pages/Payment/PaymentDetails';
import Logout from './pages/Logout/logout';
import SignupForm from './pages/signup';
import ResultPage from './pages/MapResultPage/ResultPage';
import CarCard from './pages/MatchingRides/carCard';
import Layout from './components/Layout'; // Import Layout
import ProfilePage from './pages/ProfilePage/profiilePage ';
import { LoadScript } from '@react-google-maps/api';
import PublishRide from './components/PublishRide/PublishRide'
import DistanceDuration from './components/PublishRide/DistanceDuration';
import DatePicker from './components/DatePicker/DatePicker';
import TimePicker from './components/TimePicker/TimePicker';
import Passengers from "./components/Passengers/Passengers";
import InstantBookings from './components/InstantBooking/InstantBooking';
import PriceRange from "./components/PriceRange/PriceRange";
import Success from "./components/Success/Success";
import BookingDetails from './components/bookingDetails';
const libraries = ['places'];
const googleMapsApiKey = 'AIzaSyDzd9ZLvRkNAf5K4svJ7qQeZMkidAwt5Ec'; // Replace with your actual API key


const App = () => {
  return (
    
    <div className="App">
<LoadScript googleMapsApiKey={"AIzaSyDzd9ZLvRkNAf5K4svJ7qQeZMkidAwt5Ec"} libraries={libraries}>

      <Routes>
        {/* Public route for Login */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Protected routes wrapped with Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path={"/publishride"} element={<PublishRide />} />
        <Route path={"/publishride/duration"} element={<DistanceDuration />} />
        <Route path={"/details"} element={<CarOwnerDetails />} />
        <Route path={"/publishride/datepicker"} element={<DatePicker />} />
        <Route path={"/publishride/datepicker/timepicker"} element={<TimePicker />} />
        <Route path={"/publishride/passengers"} element={<Passengers />} />
        
        <Route path={'/publishride/pricerange'} element={<PriceRange />} />
        <Route path={'/publishride/success'} element={<Success />} />
          {/* <Route path="publishride" element={<PublishNewRide />} /> */}
          <Route path="search" element={<SearchRide />} />
          {/* <Route path="details" element={<RideDetailsPage />} /> */}
          <Route path="carowner" element={<CarOwnerDetails />} />
          <Route path="page" element={<Page />} />
          <Route path="matchingRidesPage" element={<CarCard />} />
          <Route path="/bookingDetails" element={<BookingDetails />} />
          <Route path="Page1" element={<Page1 />} />
          <Route path="Page2" element={<Page2 />} />
          <Route path="Page3" element={<Page3 />} />
          <Route path="Page4" element={<Page4 />} />
          <Route path="Page5" element={<Page5 />} />
          <Route path="PersonalDetails" element={<PersonalDetails />} />
          <Route path="VehicleBrand" element={<VehicleBrand />} />
          <Route path="VehicleModel" element={<VehicleModel />} />
        
          <Route path="/PaymentDetails" element={<PaymentDetails />} />
          <Route path="SignUp" element={<SignupForm />} />
          <Route path="Logout" element={<Logout />} />
          <Route path="resultpage" element={<ResultPage />} />
        </Route>
      </Routes>
      </LoadScript>
    </div>
  );
};

export default App;
