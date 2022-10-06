import React from "react";
import { useState } from "react";
import { Button, Form, FormGroup } from "reactstrap";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";
import "../Style/Admin.css"
import CregImg from '../assets/newRegist.jpg'


function Location() {

    const[d_location,setLocation]=useState('')
    const[i_id,setShipmentId]=useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const location = {d_location,i_id}
        console.log(location);

            fetch("http://localhost:8080/driverprofile/entertrackingdata",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(location)
        }).then(()=>{
        window.location.href = "/dLogin";
        console.log("new Location added")
        })
    }
    return (
        <div >
        <Navbar/>

        <div className="contact" >
          <div
            className="leftSide"
            style={{ backgroundImage: `url(${CregImg})`}} 
          >
        <Form onSubmit={handleClick}>

        <FormGroup>
                <input
                id="i_id"
                name="i_id"
                placeholder="Enter the Item Id"
                value={i_id}
                onChange={(e)=>setShipmentId(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <input
                id="location"
                name="location"
                placeholder="Enter your current location"
                value={d_location}
                onChange={(e)=>setLocation(e.target.value)}
                />
            </FormGroup>

           


            <Link to ='/dLogin'>
            <Button
            type="submit"
            >
            Submit
            </Button>
            </Link>
            </Form>
            </div>
            </div>
            <Footer/>
            </div>
        )
        }
        export default Location;