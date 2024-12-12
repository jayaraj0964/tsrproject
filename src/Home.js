// src/pages/Home.js
import React from 'react';
import homepageimg from './assets/desk00001.jpg'
import  './Homepage1.css'


const Home = () => {
  // const textvisible =[text, settext]
  const homeimages = [
    // { src: require("../assets/gifs/gif1.gif"), name: "Funny Cat" },
    { src: require("./assets/airport icon.png") ,Text:"15 Min Drive from International Airport"},
    { src: require("./assets/beach icon.png"),Text:"10 Min Drive From Chintapalli Beach" },
    { src: require("./assets/city icon2.png"), Text:"30 Drive To Vizianagaram City"},
    { src: require("./assets/schools icon.png"),Text:"20 Min Drive To Educational Institutions" },
    { src: require("./assets/highway icon.png"),Text:"2Km From National Highway" },
    { src: require("./assets/greenery icon.png"),Text:"Greenery city " },
  ];
  return (
    <div className="home1" style={{display:'flex'}}>
            <img src={homepageimg} alt="Logo" style={{width:"70%",marginTop:"10"}} />
       <div>
       <div className="gif-grid" style={{marginTop:70}}>
             {homeimages.map((homeimages, index) => (
       <div key={index} className="gif-container">
          <div className='imageSection'>
          <img src={homeimages.src} alt={homeimages.name} className="grid-item" />
          <div className='imagetext'>{homeimages.Text}</div>
         
         </div>
        </div>
      ))}
    </div>
        </div>
    </div>
  );
};

export default Home;
