import React, { Component } from 'react'
import DirectBookingService from '../UserServices/DirectBookingService';
import {  Card, CardText, CardTitle, Col, Row, Table } from 'reactstrap'
import NavBar from './NavBar';

export default class Payments extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            payments: [],
          
           
        }
      
    }
    componentDidMount(){
           
    
      DirectBookingService.Payments().then((res) => {
          this.setState({ payments: res.data});
          console.log(this.state.payments);
      });
    
     
    }

  render() {
    return (
      <div>
     <NavBar/>
      <div style={{paddingTop:"20px", paddingLeft:"20px" }}>

      <Row>
<Col sm="12">
  <Card body>
    <CardTitle tag="h5">
      <h1>Payments</h1>
    </CardTitle>
    <CardText>
    <Table bordered striped>
            <thead>
              <tr>
                <th>No</th>
                <th> Account Number  </th>
               
               
                <th>Customer First Name</th>
                <th>Customer Last Name</th>
                <th>Transporter First Name</th>
                <th>Transporter Last Name</th>
                <th>Item Name</th>
                <th>Customer Payment</th>
                <th>Transporter Payment </th>
                <th>Bank Balance </th>
                </tr>
            </thead>
            <tbody>
                {
                     this.state.payments.map(
                      payment => 
                      <tr key={payment.transaction_id}>
                          <td>{payment.transaction_id}</td>
                         <td>  {payment.account_number} </td> 
                          <td>{payment.c_FirstName}</td>
                          <td>{payment.c_LastName}</td>
                          <td>{payment.t_FirstName}</td>
                          <td>{payment.t_LastName}</td>
                          <td>{payment.item_detail.i_name}</td>
                         <td>{payment.c_payment}</td>
                         <td>  {payment.t_payment} </td>  
                         <td>  {payment.bank_balance} </td>
                        

                      </tr>
                     )
                }
            </tbody>
      </Table>
    </CardText>
    
  </Card>

</Col>
<br></br>
  <Row></Row>                 

</Row>

      </div>
    </div>
  )
}
}