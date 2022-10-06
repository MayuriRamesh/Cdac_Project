import React, { useState, useEffect } from 'react'
import { Button, Table } from 'reactstrap'
import DirectBookingService from '../UserServices/DirectBookingService'
import '../Style/display.css'
import NavBar from './Navbar'

const PickupDeliveryMgmt = () => {

   
      


    
      const[history, setHistory] = useState([])

    
    

     
    

      useEffect (() =>                
      {
      DirectBookingService.getSelectedBidders().then ((res) => {
        setHistory(res.data);
      console.log(res.data);                               //we need to set response data to customer array hence {setCustomer(res.data)}
      })     
      .catch(error => { console.log(error);})
      }
      )

       
      


   
    return (
      <div>
        <NavBar/>
       

        <div style={{marginTop:'25px'}}>
        <h2 className='text-centre'> Manage Pick-up & Delivery </h2>
    
      <Table bordered striped>
              <thead>
                <tr>
                  <th>No</th>
                  <th> Item Name  </th>
                  <th>Item Weight </th>
                  <th>Item Pickup City</th>
                  <th>Item Delivery City</th>
                  <th>Pickup Date</th>
                <th>Vehicle no</th>
                <th>Vehicle company and model</th>
                <th>Update vehicle</th>
                  </tr>
              </thead>
              <tbody>
                  {
                       history.map(
                        dhistory => 
                        <tr key={dhistory.b_id}>
                            <td>{dhistory.b_id}</td>
                           <td>  {dhistory.itemdetail[0].i_name} </td> 
                           <td>  {dhistory.itemdetail[0].i_weight} </td>  
                           <td>  {dhistory.itemdetail[0].pickup_city} </td>  
                           <td>  {dhistory.itemdetail[0].delivery_city} </td> 
                           <td>  {dhistory.b_price} </td>  
                           <td>{dhistory.itemdetail[0].pickup_date}</td>
                           <td>{dhistory.PickupDeliveryForm[0].Vehicle_no}</td>
                           <td>{dhistory.PickupDeliveryForm[0].vehicle_company_model}</td>
                           
                          
                           <td>
                           <Button style={{marginLeft: "10px"}} 
                                            onClick={ () => this.onSubmit( dhistory.PickupDeliveryForm[0].vehicle_company_model, dhistory.PickupDeliveryForm[0].Vehicle_no)} 
                                            className="btn btn-info"
                                            href="/pickupDelivery"
                                            > Update </Button>
                           </td>
                          

                        </tr>
                       )
                  }
              </tbody>
        </Table>
      

        </div>
      </div>
    )
  }


export default PickupDeliveryMgmt;
