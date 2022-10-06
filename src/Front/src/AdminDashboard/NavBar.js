import React from 'react';
import Logo from "../assets/Truck_Logo.png";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";


export default function NavBar() {
        
  return (
    
    <div className="navbar">
       
    <div className="rightSide">
  <img src={Logo} alt="logo "/>
    <Link to="/manageCustomers"> Manage Customers </Link>
    <Link to="/manageTransporter"> Manage Transporters </Link>
    <Link to="/checkPayments"> Payment Records </Link>
    <Link to="/checkFeedback">  Check Feedback & Complaint </Link>
    <Link to="/selection"> Logout </Link>
    
  </div>
  </div>
  
  )
}