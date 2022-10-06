import React from "react";
import dashImg from '../assets/AdminDash.jpg'
import "../Style/gofor.css";
import 'react-toastify/dist/ReactToastify.css';   
import NavBar from "./NavBar";
import Footer from '../Components/Footer'
import '../Style/AdminHome.css'


function Home() {
    const d = new Date()
    const weekday = ['Sun','Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    
    const day = weekday[(d.getDay())]
    const month = months[(d.getMonth())]
    const date = d.getDate()
    const year = d.getFullYear()
  

  return (
    <div>
    <NavBar/>
    <div className="Home"
    style={{ backgroundImage: `url(${dashImg})`, width: '1550px', height:'450px'}}>
      
    <div style={{paddingLeft:'200px'}}>
    <h1 > Hello, Admin </h1>
    </div>
       
    </div>
    
    <div className="main">
        <div className="date">
            <h1> {day} </h1>
            <h2> {date} </h2>
            <h2> {month} </h2>
            <h2> {year} </h2>
        </div>

        
    </div>
    <Footer/>
    </div>
      
   
  );
}

export default Home;