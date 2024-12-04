import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar' // Import your Navbar component
import Home from './Home';  // Import your Home page
import Location from './Location';  // Import Location page
import Gallery from './Gallery';  // Import Gallery page
import Testimonials from './Testimonials';  // Import Testimonials page

function App() {
  return (
    <BrowserRouter>
      <Routes>
              {/* <Navbar /> */}

        
        <Route path="/" element={<Navbar/>} >  <Route path="/home" element={<Home/>} />
        <Route path="/location" element={<Location/>} />
        <Route path="/site layout" element={<Location/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        </Route>
      
        
      </Routes> 
      {/* Define routes for each page */}
     
   

    </BrowserRouter>    
  );
}

export default App;
