// components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Header/NavBar'; // Adjust path as necessary
import Footer from './Footer/Footer'; // Adjust path as necessary

const Layout = () => {
  return (
    <div>
      {/* Include Navbar */}
      <NavBar />
      
      {/* Main content (changes based on route) */}
      <div style={{ minHeight: '80vh' }}>
        <Outlet />
      </div>
      
      {/* Include Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
