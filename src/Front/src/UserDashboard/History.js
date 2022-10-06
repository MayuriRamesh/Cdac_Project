import React, { Component } from 'react'
import { Card, CardText, CardTitle, Col, Row, Table } from 'reactstrap'
import DirectBookingService from '../UserServices/DirectBookingService'
import NavBar from './Navbar'

export default class History extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            directhistory: [],
        }
      
    }
    

    componentDidMount(){
       

        DirectBookingService.getDirectHistory().then((res) => {
            this.setState({ directhistory: res.data});
            console.log(this.state.directhistory);
        });
      
        
      }



  render() {
    return (
      <div>
        <NavBar/>
        <div style={{paddingTop:"120px", paddingLeft:"20px" , paddingRight:"20px" }}>

        <Row>
  <Col sm="12">
    <Card body>
      <CardTitle tag="h5">
        <b>Direct Booking History</b>
      </CardTitle>
      <CardText>
      <Table bordered striped>
              <thead>
                <tr>
                  <th>No</th>
                  <th> Item Name  </th>
                  <th>Item Weight </th>
                  <th>Item Pickup Date</th>
                  <th>Item Delivery Date</th>
                  <th>Transporter Name</th>
                  <th>Transporter Contact No</th>
                  <th>status</th>
                  </tr>
              </thead>
              <tbody>
                  {
                       this.state.directhistory.map(
                        dhistory => 
                        <tr key={dhistory.item_detail[0].i_id}>
                            <td>{dhistory.item_detail[0].i_id}</td>
                           <td>  {dhistory.item_detail[0].i_name} </td> 
                           <td>  {dhistory.item_detail[0].i_weight} </td>  
                           <td> {dhistory.item_detail[0].pickup_date}</td>
                           <td> {dhistory.item_detail[0].delivery_date}</td>
                           <td>  {dhistory.transporter.t_first_name} {dhistory.transporter.t_last_name}</td> 
                           <td> {dhistory.transporter.t_ph_no}</td>
                           <td> {dhistory.item_detail[0].operation_status}</td>

                        </tr>
                       )
                  }
              </tbody>
        </Table>
      </CardText>
      
    </Card>

  </Col>

  </Row>

        </div>
      </div>
    )
  }
}