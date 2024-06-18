// import React from 'react';
// import Navbar from '../components/Navbar';
// export default function Contact(){
//   return(
//     <>
//     <Navbar />
//     <h1 style={{marginTop:"100px"}}>THIS IS CONTACT</h1>
//     </>
//   );
// }
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Margin, WidthFull } from '@mui/icons-material';

function ContactPage() {
  return (    
    
    <div style={{marginTop:"120px"}}>
      <Navbar />
      
      <h1>Contact Us</h1>
      <p>Feel free to get in touch with us using the form below:</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
      <Footer/>
    </div>
  );
}

export default ContactPage;
