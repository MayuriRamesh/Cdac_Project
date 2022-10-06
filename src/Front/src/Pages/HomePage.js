import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/moving-truck-concept-background-vector.jpg";
import "../Style/HomePage.css";
//import Footer from "../components/Footer";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
//const BannerImage = new URL("../Icons/transporter_login.png",import.meta.url)
function HomePage(){
    return (
    <div>
      <Navbar/>
        <div className="Home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
        <h1>Picked, Packed and Shipped</h1>
        <br/>
        <h3>We make moving big stuff easy and cheap </h3>
        <Link to="/selection">
          <button> BOOK NOW </button>
        </Link>
    </div>
    </div>
    <Footer/>
    </div>
    )
}
export default HomePage;