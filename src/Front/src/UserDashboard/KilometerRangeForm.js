import React, { Component, useState } from 'react'
//import { Link } from 'react-router-dom';
import NavBar from './Navbar'
import "../Style/Admin.css";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import axios from 'axios';
import { useLocation } from 'react-router-dom';



// export default class KilometerRangeForm extends Component{

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       kmrange: "",
  //       t_id: JSON.parse(localStorage.getItem('t_id')),
  //       i_id: JSON.parse(localStorage.getItem('i_id')),
  //       c_id: JSON.parse(localStorage.getItem('c_id')),
      
  //   }
  // }

  export default function KilometerRangeForm(props) {

    const location = useLocation();

    const [ranges,setRanges] = useState('');

  const handleChange1 = (a) => {
    // this.setState({ kmrange: a.target.value });

    setRanges(a.target.value);
    console.log(ranges);

}

const submitForm = (e) => {

  e.preventDefault();

  // const search = props.location.search;
  // const params = new URLSearchParams(search);
  // const i_id = params.get('i_id');

  let i_id = location.state.i_id;
  console.log("aaaaaaaaaaa",i_id);

  
  // console.log(this.state.t_id,this.state.i_id,this.state.c_id,this.state.kmrange);
    const url = "http://localhost:8080/customerhomepage/updateitem/";
    axios.put(url + i_id + "/" + ranges
    ).then(response => response.json())
            .then(data => 
                {
                   localStorage.setItem('b_price',data.b_price);
                        // console.log(url);
                        console.log(data);       
            });
            alert("your product is added for booking");
            window.location.href="/DBookingTransporter";

}

   

    // render() {
    return (
      <div>
        
      <NavBar/>
      <Form onSubmit={submitForm} style={{paddingTop:"120px"}}>
      <h3>Enter Your Kilometer Range</h3><br/>

  <Row form>
    <Col md={6}>
      <FormGroup>
          <Input
          id="kmrange"
          name="kmrange"
          placeholder="Enter your total kilomete for item delivery"
          type="text"
          value={ranges}
          onChange={handleChange1}
          required
        />
      </FormGroup><br/>
     
     <FormGroup>
      
      <Input className='ib' type="checkbox"/>
      {' '}
      <Label check >

      Terms & Conditions : Your Kilometer Range should be accurate if not then it will add penalty to your payment
    
      </Label>
     
  </FormGroup>
    </Col>
    </Row>
    
    <Button
   type='submit'
    > 
    Submit
  </Button>
</Form>
     </div>
    
    )
  // }
}