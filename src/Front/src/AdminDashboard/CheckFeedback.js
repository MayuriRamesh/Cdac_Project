import React, { useEffect, useState } from 'react'
import DirectBookingService from '../UserServices/DirectBookingService'
import NavBar from '../AdminDashboard/NavBar';



const CheckFeedback = () => {

    const [ feedback, setFeedback] = useState([])
    
    useEffect (() =>                
    { DirectBookingService.getfeedback().then((res)=> {
        setFeedback(res.data);
        console.log(res.data);
        }).catch((error)=>{console.log(error);})
    }
    )
   
      return (
        <div>
          <NavBar/>
          <div style={{marginTop:'20px'}}>
          <h2 className='text-centre'> Feedbacks Received </h2>
            <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Customer  Name  </th>
                    <th>Transporter Name</th>
                    <th>Description </th>
                    
                    
                  
                  </tr>
                </thead>
                <tbody>
                                  {
                                    feedback.map(
                                          user => 
                                          <tr key = {user.c_id}>
                                            <td> {user.c_id}</td>
                                              
                                               <td> { user.c_name} </td> 
                                               <td>{user.t_name}</td>  
                                               <td> {user.description} </td>
                                               
                                          </tr>
                                      )
                                  }
                              </tbody>
                </table>
  
        </div>
  
        </div>
        )
       }
      

  export default CheckFeedback;