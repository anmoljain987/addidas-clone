import React, { Fragment } from "react";
import {
  Navbar,
  FormControl,
  NavbarBrand,
  Nav,
  Container,
  Button,
  Form,
} from "react-bootstrap";
import "./Navbar.css";
import Top from "./Top";
function NavbarCont() {
  return (
    <Fragment>
      {" "}
      <Top />
      <Navbar>
        <Container>
          <NavbarBrand href="#">Logo</NavbarBrand>
          <Navbar.Collapse>
            <Nav.Link>
              <h5>MEN</h5>
            </Nav.Link>
            <div className="hidden">
              <ul></ul>
            </div>
            <Nav.Link>
              <h5>WOMEN</h5>
            </Nav.Link>
            <Nav.Link>
              <h5>KIDS</h5>
            </Nav.Link>
            <Nav.Link>
              <span>SPORTS</span>
            </Nav.Link>
            <Nav.Link>
              <span>BRANDS</span>
            </Nav.Link>
            <Nav.Link>
              <span>COLLECTIONS</span>
            </Nav.Link>
            <Nav.Link>
              <span>OUTLET</span>
            </Nav.Link>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default NavbarCont;
