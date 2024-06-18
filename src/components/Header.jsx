
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './components'; // Assuming you have a NavBar component

const Header = () => {
  return (
    <header>
      <NavBar />
      <div className="header-content">
        <h1 style={{marginTop:"1000px", marginLeft:"10px"}}>Explore our delicious dishes and find your favorites.</h1>
        {/* Add any other header content here */}
      </div>
    </header>
  );
};

export default Header;