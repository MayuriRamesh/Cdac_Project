import React from 'react';
import Logo from "../assets/Truck_Logo.png";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";


export default function NavBar() {
   

    const onLogOutClick = () => {
      window.localStorage.clear();
  }

   
    
  return (
    
      
    <div className="navbar">
    
   <div className="rightSide">

     <img src={Logo} alt="logo "/>
    <Link to="/RItem"> Register Item  </Link>
    <Link to="/ManageItem"> Manage Items </Link>
    <Link to="/settings"> Settings </Link>
    <Link to="/feedback">  Feedback </Link>
    <Link to  ="/selection"> <button onClick={onLogOutClick} > Logout</button>  </Link>
     
  </div>
  
  </div>
  



 )
 } 
