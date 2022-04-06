import React from "react";
// import "flag-icon/css/flag-icon.min.css";
import { Container, Col, Row } from "react-bootstrap";
import "./FootBottom.css";
function FootBottom() {
  return (
    <Container className="foot-bottom" fluid  >
      <Row>
        <Col className="pointer left"  md={8} xs={8}>India</Col>
        <Col className="pointer" sm={6} md={4}>Privacy Policy | Terms and Conditions | Cookies</Col>
      </Row>
      <Row>
        <Col className="pointer copyright" sm xs md >©2021 adidas India Marketing Pvt. Ltd</Col>
        
      </Row>
    </Container>
  );
}

export default FootBottom;
