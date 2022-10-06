
import React ,{ useState }from "react";
 import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import custLoginImg from "../assets/custLogin.jpg";
import ProfilePic from "../assets/blank-profile-pic.png";
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";

function CustomerLogin() {

    const[c_Email,setEmail]=useState('')
    const[c_Password,setPassword]=useState('')
    
  
    
       const handleClick=()=>{
       const login = {c_Email,c_Password }
       console.log(login)

      axios.post(`http://localhost:8080/login/customer`,login).then(
        (response)=>{
            toast.success('login successfull');
            console.log("success");
            console.log(response);
             window.location.href = "/userHome";
            localStorage.setItem('c_id',response.data.c_id)
          },
        (error)=>{
            
            alert("Invalid Login Details",error);
            toast.error('invalid login');
            console.log(error);
            console.log("Error");
        }
    );
       }

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
            <h1> Login as Customer</h1>

            <div className="imgs" >
              <img src={ProfilePic} alt="ProfilePic" style={{height:100, width:110, marginLeft: 30}}/><br/>
              <p style={{ marginLeft: 30 }}> Profile Photo </p>
          </div>
    
            <Form  inline>
      <FormGroup className="mailId">
        <Label
          className="email"
          for="c_email"
        >
          Email
        </Label>
        <Input required
          id="c_email_id"
          name="c_email_id"
          placeholder="Enter email Id"
          type="email"
          value={c_Email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup className="password">
        <Label
          className="pswd"
          for="c_password"
        >
          Password
        </Label>
        <Input required
          id="c_password"
          name="c_password"
          placeholder="Enter password"
          type="password"
          value={c_Password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </FormGroup>

      
      <Button
         onClick={handleClick}  >
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
    
    export default CustomerLogin ;
    