import React ,{ useState }from "react";
 import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input } from "reactstrap";
import custLoginImg from "../assets/custLogin.jpg";
import ProfilePic from "../assets/blank-profile-pic.png";
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";

function DriverLogin() {

    const[d_Phone,setPhoneNumber]=useState('')
    const[d_Password,setPassword]=useState('')
    
  
    
       const handleClick=()=>{
       const login = {d_Phone,d_Password }
       console.log(login)

      axios.post(`http://localhost:8080/login/driver`,login).then(
        (response)=>{
            toast.success('login successfull');
            console.log("success");
            console.log(response);
             window.location.href = "/dLocation";
            localStorage.setDriver('d_id',response.data.c_id)
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
            <h1> Login as Driver </h1>

            <div className="imgs" >
              <img src={ProfilePic} alt="ProfilePic" style={{height:100, width:110, marginLeft: 30}}/><br/>
              <p style={{ marginLeft: 30 }}> Profile Photo </p>
          </div>

          <Form inline>
          <FormGroup className="phone">
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
            id="d_password"
            name="d_password"
            placeholder="Password"
            type="password"
            value={d_Password}
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
    
    export default DriverLogin ;