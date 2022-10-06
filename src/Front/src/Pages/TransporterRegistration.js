import React ,{ useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import ProfilePic from "../assets/blank-profile-pic.png";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import CregImg from '../assets/newRegist.jpg';
import axios from 'axios';
import "../Style/Admin.css"


export default function TransporterRegister() {
    
    const[t_FirstName,setFirstName]=useState('')
    const[t_MiddleName,setMiddleName]=useState('')
    const[t_LastName,setLastName]=useState('')
    const[t_Email,setEmail]=useState('')
    const[t_Password,setPassword]=useState('')
    const[t_Aadhar_no,setAadhar]=useState('')
    const[t_Phone,setPhoneNumber]=useState('')
    const[t_Address,setAddress]=useState('')
    const[Range_A,setRangeA]=useState('')
    const[Range_B,setRangeB]=useState('')
    const[Range_C,setRangeC]=useState('')
    
    const handleClick=(e)=>{
      e.preventDefault()
      const transporter = {t_FirstName,t_MiddleName,t_LastName,t_Email,t_Password,t_Aadhar_no,t_Phone,t_Address,Range_A,Range_B, Range_C}
      console.log(transporter);
      
    axios.post("http://localhost:8080/registration/trucklendor",transporter).then((response)=>{
      console.log("new", transporter)
         window.location.href = "/tLogin";
       console.log("new transporter added")
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
            <h1>Transporter Register</h1>
            <div className="imgs" >
              <img src={ProfilePic} alt="ProfilePic" style={{height:110, width:110, marginLeft: 30}}/><br/>
              <p style={{ marginLeft: 30}}> Profile Photo </p>
             
              
            </div><br/>
            <FormGroup>
     
      <Input required
        id="t_first_name"
        name="t_first_name"
        placeholder="First Name"
        value={t_FirstName}
        onChange={(e)=>setFirstName(e.target.value)}
      />
    </FormGroup>
    <FormGroup>
      
      <Input
        id="t_middle_name"
        name="t_middle_name"
        placeholder=" Middle Name"
        value={t_MiddleName}
        onChange={(e)=>setMiddleName(e.target.value)}
      />
    </FormGroup>
    <FormGroup>
     
      <Input required
        id="t_last_name"
        name="t_last_name"
        placeholder="Last Name"
        value={t_LastName}
        onChange={(e)=>setLastName(e.target.value)}
      />
    </FormGroup>
    <FormGroup>
      
      <Input required
        id="t_email_id"
        name="t_email_id"
        placeholder="Email Id"
        type="email"
        value={t_Email}
        onChange={(e)=>setEmail(e.target.value)}
      />
  
    </FormGroup>
    <FormGroup>
     
      <Input required
        id="t_password"
        name="t_password"
        placeholder="Password"
        type="password"
        value={t_Password}
        onChange={(e)=>setPassword(e.target.value)}
      />
    </FormGroup>
  
    <FormGroup>
      
      <Input required
        id="exampleCPassword"
        name="t_Password"
        placeholder="Confirm password"
        type="password"
      />
    </FormGroup>
    <FormGroup>
     
     <Input required
       id="t_ph_no"
       name="t_ph_no"
       placeholder="Phone Number"
       value={t_Phone}
       onChange={(e)=>setPhoneNumber(e.target.value)}
     />
   </FormGroup>
   <FormGroup>
     
     <Input required
       id="t_aadhar_no"
       name="t_aadhar_no"
       placeholder="Aadhar Number"
       value={t_Aadhar_no}
       onChange={(e)=>setAadhar(e.target.value)}
     />
   </FormGroup>
    <FormGroup>
     
      <Input
        id="t_address"
        name="t_address"
        type="textarea"
        placeholder="Address"
        value={t_Address}
        onChange={(e)=>setAddress(e.target.value)}
      />
    </FormGroup>
    
    
      
     
   
    <FormGroup className='cb'>
      
        <Input required
        className='ib' type="checkbox"/>
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
  <br/>
  <br/>
  <br/>
  <Footer/>
   </div>
    )
  }