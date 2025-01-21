import React from 'react';
import Nav from '../../compoents/Navbar/Nav';
import Hero from '../../compoents/Hero/Hero';
import Slider from '../../compoents/slider/slider'; 
import Mainboday from '../../compoents/mainbody/Mainboday';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div className='bg-secondary bg-gradient'>
    <div id='Nav'> <Nav /></div>
      <div id='boday'> <Hero />  </div>
<br></br>

<div> <Slider /> </div>
<div> <Mainboday/> </div>

 <footer className="bg-dark text-white text-center py-3">
              <p>&copy; {new Date().getFullYear()} Lahiru Bandara. All rights reserved.</p>
            </footer>
    
    </div>
  );
}
