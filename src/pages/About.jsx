import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import jake from '../assets/img/about3.png';


export default function About(){
  return (
    <div className="about-us"style={{marginTop:"120px"}}>
       {<img src={jake} style={{width:"1300px", height:"100"}} />}
      <Navbar />
    
      <Footer/>
    </div>
  );
}