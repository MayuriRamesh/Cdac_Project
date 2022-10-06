import React from "react";
import { Link } from "react-router-dom";
import { Button, Card,  CardTitle, Col, Row } from "reactstrap";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/Admin.css";

function Register() {
  return (
    <div>
<Navbar/>
<div style={{marginBottom: "230px"}}>
<Row>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h3">
        Customer Register
      </CardTitle>
     
       <Link to="/cRegister">
        <Button type="submit"> Register </Button> </Link>
    </Card>
  </Col>

  <Col sm="6">
    <Card body>
      <CardTitle tag="h3">
       Transporter Register
      </CardTitle>
      
      <Link to="/tRegister">
      <Button type="submit"> Register </Button></Link>
    </Card>
  </Col>
</Row>
</div>
<Footer/>
</div>
  );
}

export default Register;