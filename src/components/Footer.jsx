import React from 'react';
// import jake from '../assets/img/about.png';
import '../assets/css/footer.css'; 
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div  className="footer-section" >
          <h4>Delivery Hours</h4>
          <p>Mon-Fri- 9:00 am- 9:00pm</p>
          <p>Saturday- 10:00 am- 8:00pm</p>
          <p>Mon-Fri- 9:00 am- 9:00pm</p>
        </div>
        <div className="footer-section">
          <h4>Questions?</h4>         
          <p>Have a question with our service? We would love to help you!</p>
          <a href="#"><MdAlternateEmail/> taste@go.com</a>
          <a href="#"><FaPhone /> +639090204889</a>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <a href="#"><FaFacebook style={{ color: 'blue', fontSize: '24px' }}/></a>
          <a href="#"><FaTwitter style={{ color: 'skyblue', fontSize: '24px' }}/></a>
          <a href="#"><FaInstagram style={{ color: 'red', fontSize: '24px' }}/></a>      
        </div>
      </div>
      <div className="footer-bottom">      
        <p><FaCopyright />  2024 My Website. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;