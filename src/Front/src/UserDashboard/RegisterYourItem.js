import React, { useState } from 'react'
import axios from 'axios';
import NavBar from './Navbar'
 import "../Style/Admin.css";
import { FormGroup, Input,Label,Form, Button } from 'reactstrap';
//import { toast } from 'react-toastify';
import CregImg from '../assets/newRegist.jpg'
import Footer from '../Components/Footer'
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterItem() {

  const navigate = useNavigate();

  const[i_name,setItemName]=useState('')
  const[i_weight,setItemWeight]=useState('')
  const[pickup_date,setPickupDate]=useState('')
  const[pickup_time,setPickupTime]=useState('')
  const[pickup_location,setPickupLocation]=useState('')
  const[pickup_state,setPickupState]=useState('')
  const[pickup_city,setPickupCity]=useState('')
  const[delivery_date,setDeliveryDate]=useState('')
  const[delivery_city,setDeliveryCity]=useState('')
  const[delivery_state,setDeliveryState]=useState('')
  const[delivery_location,setDeliveryLocation]=useState('')
  const[description,setDescription]=useState('')
  //const[driverAssign,setDriverAssign]=useState('')
  //const[vehicleassign,setVehicleassign]=useState('')
  //const[customerID,setCustomerID]=useState('')
  const[ranges,setRanges]=useState('')
  
  
  const handleClick=(e)=>{

    e.preventDefault();
   
    const itemdetail = {i_name,i_weight,description,pickup_location,pickup_state,pickup_city,delivery_location,delivery_state,delivery_city,delivery_date,pickup_date, pickup_time, ranges}
   // const c_id = JSON.parse(localStorage.getItem('c_id'));
    // console.log(itemdetail,c_id);
    console.log(itemdetail);

     axios.post("http://localhost:8080/customerhomepage/createshipment",itemdetail).then((response)=>{
      console.log("new", itemdetail);
      console.log("aaaaaa", response);
      // window.location.href = `/kmRange?i_id=${response.data.i_id}`; 

      navigate("/kmRange", {state: {i_id: response.data.i_id}});
      
       console.log("new customer added");
       }).catch((err)=>{
      console.log(err);
     })
     
    
  } 
  return (
    <div>
    <NavBar/>
    <div className="contact">
    <div
      className="leftSide"
       style={{ backgroundImage: `url(${CregImg})` }}
    >

      
      <Form  onSubmit={handleClick} style={{paddingTop:"120px"}}>
          <h1>Register Item</h1><br/>
  
  
  <FormGroup>
  <Label for="i_name">
      Item Name
    </Label>
    <Input 
    required
      id="i_name"
      name="i_name"
      placeholder="Item Name"
      type="text"
      value={i_name}
      onChange={(e)=>setItemName(e.target.value)}
    />
  </FormGroup>
 
  <FormGroup>
  <Label for="i_weight">
      Item Weight (in kgs)
    </Label>
    <Input
    required
      id="i_weight"
      name="i_weight"
      placeholder="Item Weight"
      type="text"
      value={i_weight}
      onChange={(e)=>setItemWeight(e.target.value)}
    />
  </FormGroup>

  <FormGroup>
    <Label for="pickup_date" >
      Pickup Date
    </Label>
    <Input
    required
      id="pickup_date"
      name="pickup_date"
      placeholder="Pickup Date"
      type="date"
      value={pickup_date}
      onChange={(e)=>setPickupDate(e.target.value)}
    />
  </FormGroup>

   <FormGroup>
    <Label for="exampleTime">
      Pickup Time
    </Label>
    <Input
    required
      id="exampleTime"
      name="Pickup time"
      placeholder="Pickup time "
      type="time"
      value={pickup_time}
      onChange={(e)=>setPickupTime(e.target.value)}
    />
  </FormGroup> 

  <FormGroup>
    <Label for="pickup_location">
      Pickup Location (with  PinCode)
    </Label>
    <Input
    required
      id="pickup_location"
      name="pickup_location"
      placeholder="Pickup Location "
      type="text"
      value={pickup_location}
      onChange={(e)=>setPickupLocation(e.target.value)}
    />
  </FormGroup>

  <FormGroup>
    <Label for="pickup_state">
      Pickup State
    </Label>
    <Input
    required
      id="pickup_state"
      name="pickup_state"
      placeholder="Pickup State "
      type="select"
      value={pickup_state}
      onChange={(e)=>setPickupState(e.target.value)}
    >
       <option value="none">
         Select an Option
         </option>
      <option active="true">
        Maharashtra
      </option>
      <option>
        Karnataka
      </option>
      
      </Input>
  </FormGroup>
  <FormGroup>
    <Label for="pickup_city">
      Pickup City
    </Label>
    <Input
    required
      id="pickup_city"
      name="pickup_city"
      type="select"
      value={pickup_city}
      onChange={(e)=>setPickupCity(e.target.value)}
    >
   <option value="none" >
         Select an Option
         </option>
      <option active="true">
        Pune
      </option>
      <option>
       Mumbai
      </option>
      <option>
       Delhi
      </option>
      <option>
       Kolhapur
      </option>
      <option>
       Nashik
      </option>
      <option>
       Baramati
      </option>
      <option>
       Nagpur
      </option>
    </Input>
  </FormGroup>
  
  
  
  
  <FormGroup >
    <Label for="delivery_date" > 
      Delivery Date
    </Label>
    <Input
    required
      id="delivery_date"
      name="delivery_date"
      placeholder="Delivery Date"
      type="date"
      value={delivery_date}
      onChange={(e)=>setDeliveryDate(e.target.value)}
    />
  </FormGroup>
  
    <FormGroup>
    <Label for="delivery_city">
      Delivery City
    </Label>
    <Input
    required
      id="delivery_city"
      name="delivery_city"
      type="select"
      value={delivery_city}
      onChange={(e)=>setDeliveryCity(e.target.value)}
    >
      <option value="none">
         Select an Option
         </option>
      <option active="true">
        Pune
      </option>
      <option>
       Mumbai
      </option>
      <option>
       Delhi
      </option>
      <option>
       Kolhapur
      </option>
      <option>
       Nashik
      </option>
      <option>
       Baramati
      </option>
      <option>
       Nagpur
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="delivery_state">
      Delivery State
    </Label>
    <Input
    required
      id="delivery_state"
      name="delivery_state"
      placeholder="Delivery State "
      type="select"
      value={delivery_state}
      onChange={(e)=>setDeliveryState(e.target.value)}
    >
    <option value="none">
         Select an Option
         </option>
      <option active="true">
        Karnataka
      </option>
      <option>
        Maharashtra
      </option>
      </Input>
  </FormGroup>

  <FormGroup>
    <Label for="delivery_location">
      Delivery Location(with  PinCode)
    </Label>
    <Input
    required
      id="delivery_location"
      name="delivery_location"
      placeholder="Delivery Location "
      type="text"
      value={delivery_location}
      onChange={(e)=>setDeliveryLocation(e.target.value)}
    />
  </FormGroup>
  <FormGroup>
    <Label for="description">
      Item Description
    </Label>
    <Input
    required
      id="description"
      name="description"
      type="textarea"
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
    />
  </FormGroup>
     
  <FormGroup check>
    <Input 
    required
    type="checkbox" />
    <Label check>
      Check me out
    </Label>
  </FormGroup>
  
 
  <Button type='submit'>
    Submit
  </Button>
  
</Form>
     
    </div>
    </div>
    <Footer/>
    </div>
  )
}