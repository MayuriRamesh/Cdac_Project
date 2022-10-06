
import React, { useState } from 'react';
import axios from "axios";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import ProfilePic from "../assets/blank-profile-pic.png"
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CregImg from '../assets/newRegist.jpg';
import "../Style/Admin.css"



function CustomerRegistration(){
  
  const[c_FirstName,setFirstName]=useState('')
  const[c_MiddleName,setMiddleName]=useState('')
  const[c_LastName,setLastName]=useState('')
  const[c_Email,setEmail]=useState('')
  const[c_Password,setPassword]=useState('')
  const[c_Phone,setPhoneNumber]=useState('')
  const[c_Address,setAddress]=useState('')
 

  const handleClick=(e)=>{
    e.preventDefault()
    const customer = {c_FirstName,c_MiddleName,c_LastName,c_Email,c_Password,c_Phone,c_Address}
    console.log(customer);
     axios.post("http://localhost:8080/adminhomepage/createcustomer",customer).then((response)=>{
      console.log("new", customer)
         window.location.href = "/cLogin";
       console.log("new customer added");
       }).catch((err)=>{
      console.log(err);
     })
  }
  
  
  return (
    
    <div>
    <Navbar/>

    <div className="contact" style={{marginBottom:"20px"}}>
          <div
            className="leftSide"
            style={{ backgroundImage: `url(${CregImg})` }}
          >

    <Form onSubmit={handleClick}>
          <h1>Customer Registration</h1>
          <div className="imgs" >
              <img src={ProfilePic} alt="ProfilePic" style={{height:100, width:110, marginLeft: 30}}/><br/>
              <p style={{ marginLeft: 30}}> Profile Photo </p>
          </div> 

    <FormGroup>
        <Input 
        id="c_first_name"
        name="c_first_name"
        placeholder="First Name"
        type="text"
        value={c_FirstName}
        onChange={(e)=>setFirstName(e.target.value)}
        required
        />
    </FormGroup>

    <FormGroup>
        <Input
        id="c_middle_name"
        name="c_middle_name"
        placeholder=" Middle Name"
        type="text"
        value={c_MiddleName}
        onChange={(e)=>setMiddleName(e.target.value)}
        />
     </FormGroup>

    <FormGroup>
        <Input 
        id="c_lastName"
        name="c_lastName"
        placeholder="Last Name"
        type="text"
        value={c_LastName}
        onChange={(e)=>setLastName(e.target.value)}
        required
        />
    </FormGroup>

    <FormGroup>
        <Input 
        id="c_email_id"
        name="c_email_id"
        placeholder="Email Id"
        type="email"
        value={c_Email}
        onChange={(e)=>setEmail(e.target.value)}
        required
        />
    </FormGroup>

    <FormGroup>
        <Input 
        id="c_password"
        name="c_password"
        placeholder="Password"
        type="password"
        value={c_Password}
        onChange={(e)=>setPassword(e.target.value)}
        required
        />
    </FormGroup>

    <FormGroup>
        <Input 
        id="c_password"
        name="c_password"
        placeholder="Confirm password"
        type="password"
        required
        />
  </FormGroup>

    <FormGroup>
       <Input 
        id="c_Phone"
        name="c_Phone"
        placeholder="Phone Number"
        type="text"
        value={c_Phone}
        onChange={(e)=>setPhoneNumber(e.target.value)}
        required
    />
    </FormGroup>
  
    <FormGroup>
        <Input 
        id="c_address"
        name="c_address"
        type="textarea"
        placeholder="Address"
        value={c_Address}
        onChange={(e)=>setAddress(e.target.value)}
        required
        />
    </FormGroup>
  
    <FormGroup className='cb'>
        <Input 
        className='ib' type="checkbox" required/>
        {' '}
        <Label check>
        Accept the terms
        </Label>
        </FormGroup>

      <Button  type="submit"> Submit </Button>
      
    </Form>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default CustomerRegistration;