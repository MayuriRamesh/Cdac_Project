import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'
import DirectBookingService from '../UserServices/DirectBookingService'


    
     
      const TrackLocation = () => {
        const[Location,setLocation]=useState('')

   //useEffect hook is similar to componentDidMount() . we can't use componentDidMount() life cycle method in function component, hence use useEffect() hook.
    useEffect (() =>                
        {
        DirectBookingService.getLocation().then ((res) => {
            setLocation(res.data);
        console.log(res.data);                               //we need to set response data to deiver array hence {setDriver(res.data)}
        })     
        .catch(error => { console.log(error);})
        }
        )
    
        
    


    return(
        <div className="container">
<h2 className="text-centre"> View your Shipment's Location</h2>
<Table bordered striped>
              <thead>
                <tr>
                  <th>Shipment Id</th>
                  <th>Location </th>
                </tr>
              </thead>
              <tbody>
                  {/*call customer state variable/customer array, then map() to iterate customer array,create alias for each customer and use arraow func--> we need to provide unique key for each row hence use key attribute  */}
                  {
                  Location.map(
                    location => 
                        <tr key= {location.d_location}>
                             <td>{location.d_shipment_Id}</td>
                             <td>{location.d_location}</td>
                             
                        </tr>
                    
              )
                  }
              </tbody>
            </Table>
        </div>
    )
}

export default TrackLocation;