import React from 'react';
import Navbar from '../components/Navbar';
import jake from '../assets/img/header_img.png';
import Footer from '../components/Footer';
import '../App.css';

export default function Home(){
  return(
    <>
   
    <div className="home-page">
      <div className="image-background">    
      <h1 style={{margin: "100px"}}>Welcome to Our Website!</h1>   
        {<img src={jake} style={{width:"100%", height:"100%", marginTop:"10px", marginLeft:"0px"}} />}
        <header className="header-overlay">
        <br />
        <Navbar />
          {/* <h1>Welcome to Our Website!</h1>Add any other header content here */}
        </header>
    </div>
    <Footer/>
    </div>
    </>
  
  );
}
// return (
//   <>
//   <NavBar />
//     <div>
//       <header>       
//         <h1 style={{marginTop:"100px"}}>Welcome to Our Website!</h1>
//         {/* Add any other header content here */}
//       </header>
//       <main>
//       <img src={jake} style={{width:"80%", height:"100%", marginTop:"100px"}} />
//       <h1 style={{marginTop:"100px"}}>Welcome to Taste-To-Go!</h1>
//       <p style={{marginTop:"100px"}}>Explore our delicious dishes and find your favorites.</p>
//         {/* Add main content of the homepage here */}
//       </main>
//       <footer>
//         {/* Add footer content here */}
//       </footer>
//     </div>

