//import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Style/HomePage.css'
import HomePage from './Pages/HomePage'; 
import Selecting from './Pages/gofor'
import Register from './Pages/Register';
import CustomerRegistration from './Pages/CustomerRegistration';
import AdminLogin from './Pages/AdminLogin';
import './Style/Admin.css'
import CustomerLogin from './Pages/CostumerLogin';
import TransporterRegister from './Pages/TransporterRegistration';
import TransporterLogin from './Pages/TransporterLogin';
import RegisterItem from './UserDashboard/RegisterYourItem';
import About from './Pages/About';
import Menu from './Pages/Menu';

import UserHome from './UserDashboard/UHome';
import Feedback from './UserDashboard/Feedback'
import Settings from './UserDashboard/Settings'
import Items from './UserDashboard/Item';
import DirectBooking from './UserDashboard/DirectBooking';
import AdminHome from './AdminDashboard/AdminHome';
import ListCustomers from './AdminDashboard/ListCustomers';
import CheckFeedback from './AdminDashboard/CheckFeedback';
import KilometerRangeForm from './UserDashboard/KilometerRangeForm';
import ManageTransporters from './AdminDashboard/ManageTransporter';
import THome from './TransporterDashboard/THome';
import CPayment from './UserDashboard/CPayment';
import EstimatedPriceList from './UserDashboard/EstimatedPriceList';
import Listitems from './UserDashboard/Item';
import DriverRegister from './Pages/DriverRegistration';
import DriverLogin from './Pages/DriverLogin';
import Payments from './AdminDashboard/ViewPayments';
import EstimatedPrice from './TransporterDashboard/EstimatedPrice';
import PickupDeliveryForm from './TransporterDashboard/PickupDeliveryForm';
import CheckCustFeedback from './TransporterDashboard/transFeedback';
import CheckPayments from './TransporterDashboard/CheckPayments';
import History from './TransporterDashboard/History';
import Location from './DriverDashboard/RegisterYourLocation';
import PickupDeliveryMgmt from './TransporterDashboard/PickupDeliveryManagement';




function App() {          //we are loading this app as parent function
  return (
   <BrowserRouter>
   
   <Routes>
     <Route path='/' element={<HomePage/>} /> 
     <Route path='/selection' element={<Selecting/>} /> 
     <Route path='/register' element={<Register/>} />
     <Route path='/cRegister' element={<CustomerRegistration/>} />
     <Route path='/cLogin' element={<CustomerLogin/>} />
     <Route path='/ALogin' element={<AdminLogin/>} />
     <Route path='/tRegister' element={<TransporterRegister/>} />
     <Route path='/tLogin' element={<TransporterLogin/>} />
     <Route path='/dRegister' element={<DriverRegister/>} />
     <Route path='/dLogin' element={<DriverLogin/>} />
     <Route path='/About' element={<About/>} />
     <Route path='/menu' element={<Menu/>} />

      {/* User Dashboard Route */}
      <Route path='/userHome' element={<UserHome/>} />
      <Route path='/RItem' element={<RegisterItem/>} />      {/*registerYourItem */}
      <Route path='/feedback' element={<Feedback/>} />
      <Route path='/settings' element={<Settings/>} />
      <Route path='/ManageItem' element={< Items/>} />
      <Route path='/EstimatedChargesRange' element={< EstimatedPriceList/>} />
      <Route path='/kmRange' element={< KilometerRangeForm/>} />
      <Route path='/DBookingTransporter' element={< DirectBooking/>} />
      <Route path='/cPayment' element={< CPayment/>} />
      <Route path='/viewItemDetails' element={< Listitems/>} />     { /*Item.js */}
      


    {/* Admin Dashboard Route */}
      <Route path='/Ahome' element={<AdminHome/>} />
      <Route path='/manageCustomers' element={<ListCustomers/>} />
      <Route path='/manageTransporter' element={<ManageTransporters/>} />
      <Route path='/checkFeedback' element={<CheckFeedback/>} />
      <Route path='/checkPayments' element={<Payments/>} />
      
     
      

    {/* Transporter Dashboard Route */}

    <Route path='/THome' element={<THome/>} />
    <Route path='/estimatedPrice' element={<EstimatedPrice/>} />
    <Route path='/pickupDelivery' element={<PickupDeliveryForm/>} />
    <Route path='/pickupDeliveryManage' element={<PickupDeliveryMgmt/>} />
    <Route path='/transFeedback' element={<CheckCustFeedback/>} />
    <Route path='/checkPayment' element={<CheckPayments/>} />
    <Route path='/transHistory' element={<History/>} />


    {/* Driver Dashboard Route */}
    <Route path='/dLocation' element={<Location/>} />

     </Routes>
   </BrowserRouter>
  );
}

export default App;
