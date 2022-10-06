import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'
import DirectBookingService from '../UserServices/DirectBookingService'


    
     
      const ManageVehicleDrivers = () => {
      const [drivers, setDrivers] = useState('')

   //useEffect hook is similar to componentDidMount() . we can't use componentDidMount() life cycle method in function component, hence use useEffect() hook.
    useEffect (() =>                
        {
        DirectBookingService.getDrivers().then ((res) => {
        setDrivers(res.data);
        console.log(res.data);                               //we need to set response data to deiver array hence {setDriver(res.data)}
        })     
        .catch(error => { console.log(error);})
        }
        )
    
        
    


    return(
        <div className="container">
<h2 className="text-centre"> List Customer</h2>
<Table bordered striped>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First Name </th>
                  <th>Last Name </th>
                  <th>Address </th>
                  <th>Phone Number </th>
                  
                  <th>BlackList </th>
                  
                  <th>Block/Clear </th>
                
                </tr>
              </thead>
              <tbody>
                  {/*call customer state variable/customer array, then map() to iterate customer array,create alias for each customer and use arraow func--> we need to provide unique key for each row hence use key attribute  */}
                  {
                  drivers.map(
                    driver => 
                        <tr key= {driver.d_id}>
                             <td>{driver.d_id}</td>
                             <td> {driver.d_FirstName} </td>   
                             <td> {driver.d_LastName}</td>
                             <td> {driver.d_Address}</td>
                             <td> {driver.d_DrivingLiscence_no}</td>
                             <td> {driver.d_phone}</td>
                             <td> {driver.d_blacklist}</td>
                        </tr>
                    
              )
                  }
              </tbody>
            </Table>
        </div>
    )
}

export default ManageVehicleDrivers;