import React, { Component } from 'react'
import NavBar from './Navbar'
import "../Style/HomePage.css";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

export default class PickupDeliveryForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pickup_date: " ",
            Vehicle_no: " ",
            vehicle_company_model: " ",
            i_id: JSON.parse(localStorage.getItem('i_id')),
           
          
        }
      }
      handleChange1 = (a) => {
        this.setState({ pickup_date: a.target.value });   
        console.log(this.state.pickup_date);
    
    }
    handleChange2 = (a) => {
        this.setState({ Vehicle_no: a.target.value });
        console.log(this.state.Vehicle_no);
    
    }

    handleChange3 = (a) => {
      this.setState({ vehicle_company_model: a.target.value });
      console.log(this.state.vehicle_company_model);
  
  }

    
    submitForm = (e) => {
      
      console.log(this.state.i_id,this.state.pickup_date,this.state.delivery_date);
        const url = "http://localhost:8080/adminhomepage/gettrucklendordata?i_id=" + this.state.i_id + "&pickupDate=" + this.state.pickup_date + "&Vehicle_no=" + this.state.Vehicle_no + "&vehicle_company_model=" + this.state.vehicle_company_model;
        fetch(url,{method:"PUT"}
        ).then(response => response.json())
                .then(data => 
                    {
                   
                            console.log(data);       
                });
                alert("Pickup and Delivery date updated successfully");
                window.location.href="/estimatedPrice";
    
    }
    
       
    

  render() {

    return (
        <div>
        
        <NavBar/>
        <Form style={{paddingTop:"120px"}}>
        <h3>Enter the Details</h3><br/>
  
    <Row form>
      <Col md={6}>
        <FormGroup>
        <Label for="pickup_date">
          Pickup Date
            </Label>
            <Input required
            id="pickup_date"
            name="pickup_date"
            placeholder="Enter Pickup Date"
            type="date"
            value={this.state.pickup_date}
            onChange={this.handleChange1}
          />
        </FormGroup>


        
        <FormGroup>
        <Label for="Vehicle_no">
          vehicle number
            </Label>
            <Input required
            id="Vehicle_no"
            name="Vehicle_no"
            placeholder="Enter vehicle number"
            type="text"
            value={this.state.Vehicle_no}
            onChange={this.handleChange2}
          />
        </FormGroup>


        <FormGroup>
        <Label for="vehicle_company_model">
          Vehicle company name and model
            </Label>
            <Input required
            id="vehicle_company_model"
            name="vehicle_company_model"
            placeholder="Enter Vehicle company and model"
            type="text"
            value={this.state.vehicle_company_model}
            onChange={this.handleChange3}
          />
        </FormGroup>
       
      </Col>
      </Row>
      <Button
     onClick={this.submitForm}
      > 
      Submit
    </Button>
  </Form>
       </div>
      
      )
    }
  }