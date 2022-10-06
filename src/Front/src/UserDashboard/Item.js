
import React, { useEffect, useState } from 'react'
// import React, { Component } from 'react'
import NavBar from './Navbar'
import DirectBookingService from '../UserServices/DirectBookingService'

    const Listitems = () => {
        const[items, setItems] = useState([])

        useEffect (() =>                
        {
        DirectBookingService.getItemsById().then ((res) => {
            setItems(res.data);
        console.log(res.data);                               //we need to set response data to customer array hence {setCustomer(res.data)}
        })     
        .catch(error => { console.log(error);})
        
    }
        
        )

  return (

    <div >
      <NavBar/>
      <div className='container'>
      <h2 className='text-centre'> List of Items </h2>
      <table bordered striped>
        <thead>
            <tr>
            <th>No</th>
            <th> Item Name </th>
            <th> Item Weight</th>
            <th> Pickup City </th>
            <th> Delivery City</th>
            <th> Actions </th>
            </tr>
        </thead>
        <tbody>
  {
                                     items.map(
                                         itemdetail => 
                                         <tr key = {itemdetail.i_id}>
                                           <td>{itemdetail.i_id}</td>
                           
                                         <td>{itemdetail.i_name}</td>
                                         <td>{itemdetail.i_weight}</td>
                                         <td>{itemdetail.pickup_city}</td>
                                         <td>{itemdetail.delivery_city}</td>
                                         
                                               <td>
                                             
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewItems(itemdetail.i_id)} className="btn btn-info">View </button>
                                                  <button style={{marginLeft: "20px"}}  
                                                  onClick={ () => this.getItemsById(itemdetail.i_id)} 
                                                  href="/cPayment"
                                                 className="btn btn-warning">  Direct Booking </button>

                                                
                                             </td> 
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
    export default Listitems;