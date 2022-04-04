import React from "react";
// import "flag-icon-css/css/flag-icon.min.css";
import { Container, Col, Row } from "react-bootstrap";
import "./FootBottom.css";
function FootBottom() {
  return (
    <Container fluid>
      <Row>
        <Col>India</Col>
        <Col>Privacy Policy | Terms and Conditions | Cookies</Col>
      </Row>
      <Row>
        <Col>©2021 adidas India Marketing Pvt. Ltd</Col>
        <Col>abc</Col>
      </Row>
    </Container>
  );
}

export default FootBottom;
