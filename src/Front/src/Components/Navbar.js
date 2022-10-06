import React, { useState } from "react";
import Logo from "../assets/Truck_Logo.png";
import { Link } from "react-router-dom";
//import ReorderIcon from "@mui/icons-material/Reorder";
import "../Style/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);    

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      {/*<div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="logo "/>
        <div className="hiddenLinks">
          <Link to="../UserDashboard/Home.js"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/menu"> Services </Link>
          <Link to="/selection"> Login </Link>
          <Link to="/register"> Register </Link>
          <Link to="/cRegister">custLogin</Link>
        </div>
        <div>
        <button onClick={toggleNavbar}> <ReorderIcon /></button>
  </div>
  </div> */} 
      <div className="rightSide">
      <img src={Logo} alt="logo "/>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/menu"> Services </Link>
        <Link to="/selection"> Login </Link>
        <Link to="/register"> Register </Link>
        <button onClick={toggleNavbar}>
          
          {/*
          <ReorderIcon /> */}
        </button>
      </div>
    </div>
  );
}

export default Navbar;