import React, { Component, useState,useEffect } from 'react'
//import { Table } from 'reactstrap'
import '../Style/display.css'
import DirectBookingService from '../UserServices/DirectBookingService'

import NavBar from './NavBar'


    const ManageTransporters = () => {
      const[transporter, setTransporter] = useState([])

    
    


    

      useEffect (() =>                
      {
      DirectBookingService.getTransporters1().then ((res) => {
        setTransporter(res.data);
      console.log(res.data);                               //we need to set response data to customer array hence {setCustomer(res.data)}
      })     
      .catch(error => { console.log(error);})
      }
      )
   
   
    return (
      <div>
        <NavBar/>
        
        <div style={{marginTop:'25px'}}>
        <h2 className='text-centre'> Manage Transporter </h2>
    <table >
              <thead>
                <tr>
                  <th>Id</th>
                  <th> First Name  </th>
                  <th>Last Name </th>
                  <th>Email Id</th>
                  <th> Address </th>
                  <th>Phone Number</th>
                  <th>Adhaar Number</th>
                  <th> Verification</th>
                  <th>BlackList</th>
                  <th>Verify</th>
                  <th>Block/Clear</th>
                
                </tr>
              </thead>
              <tbody>
              {
                
                                    transporter.map(
                                        transporter => 
                                        <tr key = {transporter.t_id}>
                                            <td>{transporter.t_id}</td>
                                             <td> { transporter.t_FirstName} </td>   
                                             <td> {transporter.t_LastName}</td>
                                             <td> {transporter.t_Email}</td>
                                             <td> {transporter.t_Address}</td>
                                             <td> {transporter.t_Phone}</td>
                                             <td> {transporter.t_Aadhar_no}</td>
                                            
                                             <td>
                                            <button style={{marginLeft: "10px"}} 
                                            onClick={ () => this.onSubmit(transporter.t_id)} 
                                            className="btn btn-warning"
                                            
                                            >Verify </button>
                                               </td>
                                               <td>
                                               <button style={{marginLeft: "10px"}} 
                                            onClick={ () => this.onSubmit1(transporter.t_id)} 
                                            className="btn btn-info"
                                            
                                            >Block/Clear </button>
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
export default ManageTransporters;
