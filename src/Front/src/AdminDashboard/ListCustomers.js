import React, { useEffect, useState } from 'react'
//import React, { useState } from 'react'
import '../Style/display.css'
import NavBar from './NavBar'
import DirectBookingService from '../UserServices/DirectBookingService'
import axios from 'axios'


const ListCustomers = () => {
   //const[state, setState] = useState(initialState) --> state name, function to change state alue, initial state  
   const[customers, setCustomers] = useState([])

   //useEffect hook is similar to componentDidMount() . we can't use componentDidMount() life cycle method in function component, hence use useEffect() hook.
    useEffect (() =>                
        {
        DirectBookingService.getCustomers().then ((res) => {
          setCustomers(res.data);
        console.log(res.data);                               //we need to set response data to customer array hence {setCustomer(res.data)}
        })     
        .catch(error => { console.log(error);})
        }
        )
    
     
  

    return (
     
      <div>
        <NavBar/>
      
      <div className='container'>
        
        <h2 className='text-centre'> List customers </h2>


      <table>
      

              <thead>
              
                  <th > Id  </th>
                  <th> First Name </th>
                  <th> Last Name </th>
                  <th> Email Id </th>
                  <th> Address </th>
                  <th> Phone Number </th>
                  
                  <th>  Actions </th>
                
                </thead>
              <tbody>
                  
                  {
                   customers.map( customer => (
                          <tr key= {customer.c_id}>
                              <td> {customer.c_id} </td>
                             <td> {customer.c_FirstName}  </td>   
                             <td> {customer.c_LastName} </td>
                             <td> {customer.c_Email} </td>
                             <td> {customer.c_Phone} </td>
                             <td> {customer.c_Address} </td>
                             
                             <td>
                              
                                <button 
                                             onClick={ () => axios.delete("http://localhost:8080/adminhomepage/createcustomer",customer)} 
                                             className="btn btn-info"> Delete </button>
                             </td>
                         </tr>
                    
              )
              )
                   }
              </tbody>
            </table>
        </div>
        </div>
    )
}

  




   

export default ListCustomers;


