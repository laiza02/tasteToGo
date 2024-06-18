import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import jake from '../assets/img/logo.png';
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";

const NavBar = () => {
  return (
    
    <AppBar position="absolute" style={{backgroundColor:"gray", textDecorationColor:"black", margin: "10px",}} >
      <Toolbar>
      <img src={jake} style={{width:"150px", height:"100px"}} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        Taste-To-Go
        </Typography>
        
        <Button color="inherit" component={Link} to="/home">Home</Button>
        <Button color="inherit" component={Link} to="/gallery">MENU</Button>
        {/* <Button color="inherit" component={Link} to="/contact">Contact Us</Button> */}
        <Button color="inherit" component={Link} to="/about">About</Button>
        {/* <Button color="inherit" component={Link} to="/search">Search<CiSearch style={{ color: 'blue', fontSize: '24px' }}/></Button> */}
        <Button color="inherit" component={Link} to="/cart">Add to Cart<SlBasket style={{ color: 'yellow', fontSize: '24px' }}/></Button>
      </Toolbar>
       
      <Outlet />
    </AppBar>
  );
};

export default NavBar;