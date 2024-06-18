
import React from 'react';
import { 
  Card,
  Button,

 } from 'react-bootstrap';



export default function App(){
  return(
    <>
    <div className="mx-auto mt-5">
    <Card style={{width: '18rem', textAlign:'center'}}>
      <h1>Hello World</h1>
      <br />
      <Button>Log In</Button>
    </Card>
    </div>

   
    
    
    </>);
}