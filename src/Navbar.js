import React, { useState, useEffect } from 'react';
import './Navbar.css';
import img1 from './assets/logo.png';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Check scroll position
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{display:'flex',flexDirection:'column',width:"100%"}} >
      <div className='navbar'>
        <div style={{display:'flex',flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>
        <div className="navbar-logo">
        <img src={img1} alt="Logo" height={50} width={50}/>
      </div>
      <ul>
      <li><a href="/home">Home</a></li>
        <li><a href="/location">Location</a></li>
        <li><a href="site layout">Site Layout </a> </li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/testimonials">Testimonials</a></li>
      </ul>
      </div>
      </div>
      {/* <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/location">Location</Link></li>
        <li><Link to="site layout">Site Layout </Link> </li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
      </ul> */}
      <div style={{marginTop:"50px"}}><Outlet/></div>
    </div>
  );
}

export default Navbar;
