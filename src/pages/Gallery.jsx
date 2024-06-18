// import React from 'react';
// import Navbar from '../components/Navbar';
import jake from '../assets/img/Images2.jpg';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Menu() {
  return (
    <>
    
    <div className ="menu" style={{marginTop:"120px"}}>
    <Navbar />   
  {<img src={jake} style={{width:"1300px", height:"100"}} />}

      {/* <h2>Menu</h2>
      <ul>
        <li>
          <h3>Appetizers</h3>
          <ul>
            <li>Bruschetta</li>
            <li>Caprese Salad</li>
            <li>Garlic Bread</li>
          </ul>
        </li>
        <li>
          <h3>Main Courses</h3>
          <ul>
            <li>Spaghetti Carbonara</li>
            <li>Grilled Salmon</li>
            <li>Chicken Parmesan</li>
          </ul>
        </li>
        <li>
          <h3>Desserts</h3>
          <ul>
            <li>Tiramisu</li>
            <li>Cheesecake</li>
            <li>Gelato</li>
          </ul>
        </li>
        <li>
          <h3>Drinks</h3>
          <ul>
            <li>Wine</li>
            <li>Beer</li>
            <li>Soft Drinks</li>
          </ul>
        </li>
      </ul> */}
      <Footer/>
    </div>
    </>
  );
}

export default Menu;