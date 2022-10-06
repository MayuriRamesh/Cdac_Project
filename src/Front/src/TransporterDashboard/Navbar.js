import React from 'react';
import Logo from "../assets/Truck_Logo.png";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";


export default function NavBar() {
        
  return (
    
    <div className="navbar">
       
    <div className="rightSide">
    <img src={Logo} alt="logo "/>
    <Link to="/estimatedPrice"> Estimated Price </Link>
    <Link to="/pickupDelivery"> PickuP & Delivery form</Link>
    <Link to="/pickupDeliveryManage"> PickuP & Delivery management</Link>
    <Link to="/transFeedback"> Feedback & Complaint </Link>
    <Link to="/checkPayment">  Check Payments </Link>
    <Link to="/transHistory">  History </Link>
    <Link to="/selection">   Logout </Link>
    
  </div>
  </div>
  
  )
}