import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import DirectBookingService from '../UserServices/DirectBookingService'
import NavBar from './Navbar'



  const History = () => {

    const[history, setHistory] = useState([])

    useEffect (() =>                
    {
    DirectBookingService.getHistory().then ((res) => {
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
        <h2 className='text-centre'> Transporter History </h2>

        
      <Table bordered striped>
              <thead>
                <tr>
                  <th>No</th>
                  <th> Item Name  </th>
                  <th>Item Weight </th>
                  <th>Item Pickup City</th>
                  <th>Item Delivery City</th>
                  <th>Bidding Price</th>
                  <th>Customer Name</th>
                  <th>Customer Contact No</th>
                 
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
                           
                            
                           <td>{dhistory.customer[0].c_FirstName}</td>
                           <td>{dhistory.customer[0].c_LastName}</td>
                           <td>{dhistory.customer[0].c_Phone}</td>
                          

                        </tr>
                       )
                  }
              </tbody>
        </Table>
      

        </div>
      </div>
    )
  }
export default History;