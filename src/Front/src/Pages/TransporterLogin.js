
import React, { useState } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import custLoginImg from "../assets/custLogin.jpg";
import ProfilePic from "../assets/blank-profile-pic.png"
import Footer from "../Components/Footer"; 

import "../Style/Admin.css";

function TransporterLogin() {
    
  const[t_Email,setEmail]=useState('')
  const[t_Password,setPassword]=useState('')

  
  const handleClick=()=>{
    const login = {t_Email,t_Password }
    
    
    axios.post(`http://localhost:8080/login/trucklendor`,login).then(
        (response)=>{
           toast.success('login successfull');
            console.log("success");
            console.log(response);
             window.location.href = "/THome";
            localStorage.setItem('t_id',response.data.t_id)
            
        },
        (error)=>{
         
            alert("Invalid Login Details",error);
            toast.error('invalid login');
            console.log(error);
            console.log("Error");
        }
    );
      };

  return (
    <div>
      
    
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${custLoginImg})` }}
      >
        
        
        
      <div className="rightSide">
        <h1> Login as Transporter</h1>

        
        <div className="imgs" >
              <img src={ProfilePic} alt="ProfilePic" style={{height:100, width:110, marginLeft: 30}}/><br/>
              <p style={{ marginLeft: 30}}> Profile Photo </p>
          </div>

        <Form inline>
          
  <FormGroup className="mailId">
    <Label
      className="email"
      for="t_email_id"
    >
      Email
    </Label>
    <Input 
      id="t_email_id"
      name="t_email_id"
      placeholder="Enter Email Id"
      type="email" required
      value={t_Email}
      onChange={(e)=>setEmail(e.target.value)}
    />
  </FormGroup>

  <FormGroup className="password">
    <Label
      className="pswd"
      for="t_password"
    >
      Password
    </Label>
    <Input required
      id="t_password"
      name="t_password"
      placeholder="Enter Password"
      type="password"
      value={t_Password}
      onChange={(e)=>setPassword(e.target.value)}
    />
  </FormGroup>

 <Button onClick={handleClick}>
    Submit
  </Button>
</Form> 
      </div>
      </div>
      </div>
      <Footer/>
      </div>
  );
}

export default TransporterLogin;