import axios from 'axios'


const API = "http://localhost:8080/adminhomepage/getcustomerdata";        //AdminDashboard/ListCustomer

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/adminhomepage/transporter";     //UserDash/DirectBooking 

const API1 = "http://localhost:8080/transporter/estimatedprice";

const API2 = "http://localhost:8080/adminhomepage/gettrucklendordata";            //Admin/ManageTransporter

const API3 = "http://localhost:8080/customer/directhistory";    //UserDash/DirectHistory

const API4 = "http://localhost:8080/admin/feedback";           //Admin/CheckFeedback

const API5 = "http://localhost:8080/admin/payment";           //Admin/ViewPayments.

const API6 = "http://localhost:8080/transporter/selectedBidders";   //Transporter/PickupDeliveryManaagemnt

const API7 = "http://localhost:8080/adminhomepage/getdriverdata";    //Transporter/ManageVehicleDriver

const API8 = "http://localhost:8080/customer";                   //Driver/location

 const API9 = "http://localhost:8080/adminhomepage";                  //transporter/History

 const API10 = "http://localhost:8080/transporter";                    //transporter/BidNow

 const API11 = "http://localhost:8080/customer";                    //customer/CheckBidder



class DirectBookingService {

    //get customerlist for admin --> ListCustomer 
    getCustomers()          
    {
         
        return axios.get(API);
    }


    getItemsById(i_id)          //Manage Items
    {     
        console.log(i_id);
        return axios.get(API8);
       
    }


    //Transporets List
    getTransporters(){
        const emp = axios.get(EMPLOYEE_API_BASE_URL);
        console.log(emp);
        return emp;
    }

    // get estimate price by transported Id
    getTransporterById(t_id){       //DirectBooking 
        console.log(t_id);
        console.log(API1);
        let url = API1 +"/"+t_id;
        console.log(url);
        const esti = axios.get(url);
        console.log(esti);
    
        return esti;
       
    }


    getTransporters1(){                 //Admin/ManageTransporters
        const emp = axios.get(API2);
        console.log(emp);
        return emp;
    }


    getDirectHistory()          //History
   {
    const emp = axios.get(API3);
    console.log(emp);
    return emp;
   }

   //get feedback
   getfeedback()
   {
    //const a_id = JSON.parse(localStorage.getItem('a_id'));
    
    const feedback = axios.get(API4);
    console.log(feedback);
    return feedback;
   }

   Payments(){
    const payment = axios.get(API5);
    console.log(payment);
    return payment;
}

getSelectedBidders()
{
    const t_id = JSON.parse(localStorage.getItem('t_id'));

    let url = API6 +"/"+t_id;
       
    const sbidders = axios.get(url);
    console.log(sbidders);
    return sbidders;
}

getDrivers()          
    {
         
        return axios.get(API7);
    }


    getLocation()
    {
        return axios.get(API8);
    }
    
    getHistory()
    {
        return axios.get(API9);
    }
    
    BidNow()
    {
        return axios.get(API10);
    }
    
    CheckBidder()
    {
        return axios.get(API11);
    }

}

export default new DirectBookingService();  //object of DirectBookingService(), so that we can directly use it in component, we dont have to instantiate this class object 