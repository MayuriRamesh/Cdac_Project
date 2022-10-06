import React from "react";
import { Button, Card, CardTitle, Col, Row } from "reactstrap";
import goImg from "../assets/blurBack.jpg";
import Navbar from'../Components/Navbar';
import Footer from "../Components/Footer";
import '../Style/gofor.css';
import { Link } from "react-router-dom";


function Selecting() {

    return (
      
        <div   style={{ backgroundImage: `url(${goImg})` }}>
    <Navbar/>
      <div style={{marginBottom: "100px"}}>
      <Row>
      <Col sm="4">
          <Card body>
        
            <CardTitle tag="h2">
            <center>Admin Login</center>
            </CardTitle>

             <Link to="/ALogin">
            <Button type="submit"> Login </Button>
            </Link> 
            </Card>
        </Col>


        <Col sm="4">
          <Card body>
            <CardTitle tag="h2">
            <center> Customer Login</center>
            </CardTitle>

            <Link to="/cLogin">
            <Button type="submit"> Login </Button>
            </Link><br/>

            <Link to="/cRegister">
            new user? :
            <Button  type="submit"> create account </Button>
            </Link>
          </Card>
        </Col>
      
        <Col sm="4">
          <Card body>
            <CardTitle tag="h2">
            <center>Transporter Login</center>
            </CardTitle>
            
            <Link to="/tLogin">
            <Button type="submit"> Login </Button>
            </Link><br/>

            <Link to="/tRegister">
            new user? :
            <Button type="submit"> create account </Button> 
            </Link>
          </Card>
        </Col>

        <Col sm="4">
          <Card body>
            <CardTitle tag="h2">
            <center>Driver Login</center>
            </CardTitle>
            
            <Link to="/dLogin">
            <Button type="submit"> Login </Button>
            </Link><br/>

            <Link to="/dRegister">
            new user? :
            <Button type="submit"> create account </Button> 
            </Link>
          </Card>
        </Col>
      </Row>
      </div>
      <Footer/>
      </div>
        );
      }
  
  export default Selecting;
  