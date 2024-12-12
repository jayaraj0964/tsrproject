import './Navbar.css';
import img1 from './assets/tsr.png';   
import { Outlet } from 'react-router-dom';

const Navbar = () => {
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
        <div style={{marginTop:"50px"}}><Outlet/></div>
    </div>
  );
}

export default Navbar;
