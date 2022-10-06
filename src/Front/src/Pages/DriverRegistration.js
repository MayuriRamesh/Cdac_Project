import React ,{ useState } from 'react'
import axios from 'axios';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import ProfilePic from "../assets/blank-profile-pic.png";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import CregImg from '../assets/newRegist.jpg';
import "../Style/Admin.css"
import { Link } from 'react-router-dom';


export default function DriverRegister() {
    
    const[d_FirstName,setFirstName]=useState('')
    const[d_MiddleName,setMiddleName]=useState('')
    const[d_LastName,setLastName]=useState('')
    const[d_Password,setPassword]=useState('')
    const[d_Aadhar_no,setAadhar]=useState('')
    const[d_DrivingLiscence_no,setDrivingLiscence]=useState('')
    const[d_Phone,setPhoneNumber]=useState('')
    const[d_Address,setAddress]=useState('')
    
    const handleClick=(e)=>{
      e.preventDefault()
      const driver = {d_FirstName,d_MiddleName,d_LastName,d_Password,d_Aadhar_no,d_DrivingLiscence_no,d_Phone,d_Address}
      console.log(driver);
      axios.post("http://localhost:8080/registration/driver",driver).then((response)=>{
        console.log("new", driver)
           window.location.href = "/dLogin";
         console.log("new driver added" )
         }).catch((err)=>{
        console.log(err);
       })
    } 
    
    return (
      <div>
        <Navbar/>

        <div className="contact">
          <div
            className="leftSide"
            style={{ backgroundImage: `url(${CregImg})` }}
          >
            <Form onSubmit={handleClick}>
            <h1>Driver Register</h1>
            <div className="imgs" >
              <img src={ProfilePic} alt="ProfilePic" style={{height:110, width:110, marginLeft: 30}}/><br/>
              <p style={{ marginLeft: 30}}> Profile Photo </p>
             
              
            </div><br/>
            <FormGroup>
     
      <Input required
        id="d_first_name"
        name="d_first_name"
        placeholder="First Name"
        value={d_FirstName}
        onChange={(e)=>setFirstName(e.target.value)}
      />
    </FormGroup>
    <FormGroup>
      
      <Input
        id="d_middle_name"
        name="d_middle_name"
        placeholder=" Middle Name"
        value={d_MiddleName}
        onChange={(e)=>setMiddleName(e.target.value)}
      />
    </FormGroup>
    <FormGroup>
     
      <Input required
        id="d_last_name"
        name="d_last_name"
        placeholder="Last Name"
        value={d_LastName}
        onChange={(e)=>setLastName(e.target.value)}
      />
    </FormGroup>
    
    <FormGroup>
     
      <Input required
        id="d_password"
        name="d_password"
        placeholder="Password"
        type="password"
        value={d_Password}
        onChange={(e)=>setPassword(e.target.value)}
      />
    </FormGroup>
  
    
    <FormGroup>
      <Input required
       id="d_ph_no"
       name="d_ph_no"
       placeholder="Phone Number"
       value={d_Phone}
       onChange={(e)=>setPhoneNumber(e.target.value)}
     />
   </FormGroup>
   <FormGroup>
     
     <Input required
       id="d_aadhar_no"
       name="d_aadhar_no"
       placeholder="Aadhar Number"
       value={d_Aadhar_no}
       onChange={(e)=>setAadhar(e.target.value)}
     />
   </FormGroup>
    <FormGroup>
     
      <Input required
        id="d_address"
        name="d_address"
        type="textarea"
        placeholder="Address"
        value={d_Address}
        onChange={(e)=>setAddress(e.target.value)}
      />
    </FormGroup>
    <FormGroup>
      
      <Input required
        id="d_DrivingLiscence"
        name="d_DrivingLiscence"
        placeholder="Driving Liscence number"
        type="text"
        value={d_DrivingLiscence_no}
        onChange={(e)=>setDrivingLiscence(e.target.value)}
      />
  
    </FormGroup>
    
    <FormGroup className='cb'>
      
        <Input required className='ib' type="checkbox"/>
        {' '}
        <Label check>
        Accept the terms
        </Label>
    </FormGroup>

        <Button type='submit'>
        Submit
        </Button>
        
        
  </Form>
  </div>
  </div>
  <br/>
  <Footer/>
   </div>
    )
  }