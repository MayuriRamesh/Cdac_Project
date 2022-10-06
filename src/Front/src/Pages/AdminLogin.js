import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import{Button, Form, FormGroup, Input, Label } from 'reactstrap';
import custLoginImg from "../assets/custLogin.jpg"
import ProfilePic from "../assets/blank-profile-pic.png"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import '../Style/Admin.css'

function AdminLogin() {

    const[a_Email,setEmail]=useState('')
    const[a_Password,setPassword]=useState('')
  
    const handleClick=(e)=>{

      const login = {a_Email,a_Password }
    console.log(login)
    axios.post(`http://localhost:8080/login/admin`,login).then(
        (response)=>{
           toast.success('login successfull');
            console.log("success");
            console.log(response);
             window.location.href = "/Ahome";
            // localStorage.setItem('c_id',response.data.c_id)
            
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
            <Navbar/>
             <div className="contact">
          <div
            className="leftSide"
            style={{ backgroundImage: `url(${custLoginImg})` }}
          >
            {/* //leftside */}
            
            <div className="rightSide">
            <h1> Login as Admin</h1>
            <br/>
            <div className="imgs" >
              <img src={ProfilePic} alt="ProfilePic" style={{height:100, width:110, marginLeft: 30}}/><br/>
              <p style={{ marginLeft: 30}}> Profile Photo </p>
          </div>
    
            <Form>
      <FormGroup className="mailId">
        <Label
          className="email"
          for="a_email_id"
        >
          Email
        </Label>
        <Input required
          id="a_email_id"
          name="a_email_id"
          placeholder="Enter Email id"
          type="email"
          value={a_Email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup className="password">
        <Label
          className="pswd"
          for="a_password"
        >
          Password
        </Label>
        <Input required
          id="a_password"
          name="a_password"
          placeholder="Enter Your Password"
          type="password"
          value={a_Password}
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

    export default AdminLogin;