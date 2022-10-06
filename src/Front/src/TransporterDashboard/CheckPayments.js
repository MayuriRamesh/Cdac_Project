import React, { useState, useEffect } from 'react'
import DirectBookingService from '../UserServices/DirectBookingService'
import { Button,  Table } from 'reactstrap'
import NavBar from './Navbar'

const CheckPayments = () => {

   
      


    
      const[payments, setPayments] = useState([])

    
    

     
    

      // useEffect (() =>                
      // {
      // DirectBookingService.getPayments().then ((res) => {
      //   setPayments(res.data);
      // console.log(res.data);                               //we need to set response data to customer array hence {setCustomer(res.data)}
      // })     
      // .catch(error => { console.log(error);})
      // }
      // ) {
  return (
    <div>
      <NavBar/>
      <div style={{marginTop:'25px'}}>
        <h2 className='text-centre'> Check Payments </h2>
      
    <Table bordered striped>
            <thead>
              <tr>
                <th>Id</th>
                <th> Item Name  </th>
                <th>Item Weight </th>
               
                <th>Customer First Name</th>
                <th>Customer Last Name</th>
                <th>Payment </th>
                
                </tr>
            </thead>
            <tbody>
                {
                     payments.map(
                      payment => 
                      <tr key={payment.transaction_id}>
                          <td>{payment.transaction_id}</td>
                         <td>  {payment.item_detail.i_name} </td> 
                         <td>  {payment.item_detail.i_weight} </td> 
                         <td>{payment.c_FirstName}</td>
                         <td>{payment.c_LastName}</td>
                         <td>  {payment.t_payment} </td>  
                       
                      </tr>
                     )
                }
            </tbody>
      </Table>
    

      </div>
    </div>
  )
}
export default CheckPayments;