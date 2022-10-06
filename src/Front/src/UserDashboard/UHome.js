import React from "react";
import dashImg from '../assets/AdminDash.jpg'
import "../Style/HomePage.css";
import { Link } from "react-router-dom";
//import { ToastContainer, toast } from 'react-toastify'; // React toast libraries This tool allows you to add  set notifications and alerts to your application with ease
//import 'react-toastify/dist/ReactToastify.css';   //Toastify notifications are pop-up messages that display some information to the user.
import NavBar from "./Navbar";
import Footer from '../Components/Footer'


function UserHome() {

  

  return (
    <div>
    <NavBar/>
    <div className="Home"
    style={{ backgroundImage: `url(${dashImg})`, width: '1550px', height:'400'}}>
      
      <h1> Welcome to User Dashboard </h1> 
      <br/>
      <Link to="/RItem">
          <button> Proceed </button>
        </Link>
    </div>

    <Footer/>
    </div>
      
   
  );
}
export default UserHome;


