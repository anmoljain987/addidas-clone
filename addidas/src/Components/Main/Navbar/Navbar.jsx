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
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";
import Top from "./Top";
function NavbarCont() {
  return (
    <Fragment>
      <Top />
      <nav className="navigation-bar-bottom">
        <ul className="nav-adidas">
          <li >Addias logo</li>
          <li className="links-nav">
            <a href="#">
              <h5>MEN</h5>
            </a>
            <div className="animation-nav"></div>
          </li>
          <li className="links-nav">
            <a href="#">
              {" "}
              <h5>WOMEN</h5>
            </a>
            <div className="animation-nav"></div>
          </li>
          <li className="links-nav">
            <a href="#">
              <h5>KIDS</h5>
            </a>
            <div className="animation-nav"></div>
          </li>
          <li className="links-nav">
            <a href="#">
              <div>SPORTS</div>
            </a>

            <div className="animation-nav"></div>
          </li>
          <li className="links-nav">
            <a href="#">
              <div>BRANDS</div>
            </a>
            <div className="animation-nav"></div>
          </li>
          <li className="links-nav">
            <a href="#">
              <div>COLLECTIONS</div>
            </a>
            <div className="animation-nav"></div>
          </li>
          <li className="links-nav">
            <a href="#">
              <div>OUTLET</div>
            </a>
            <div className="animation-nav"></div>
          </li>
          <li className="search-nav">
            <input type="search" placeholder="Search" />
            <AiOutlineSearch
              style={{
                height: "32px",
                width: "20px",
                backgroundColor: "rgb(233, 236, 239)",
              }}
            />
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default NavbarCont;
// //  <Navbar>
// <Container>
// <NavbarBrand href="#">Adidas</NavbarBrand>
// <Navbar.Toggle aria-controls="responsive-navbar-nav">
//   xxx
// </Navbar.Toggle>
// <Navbar.Collapse xl>
//   <Nav.Link>
//     <h5>MEN</h5>
//   </Nav.Link>
//   <div className="hidden">
//     <ul></ul>
//   </div>
//   <Nav.Link>
//     <h5>WOMEN</h5>
//   </Nav.Link>
//   <Nav.Link>
//     <h5>KIDS</h5>
//   </Nav.Link>
//   <Nav.Link>
//     <span>SPORTS</span>
//   </Nav.Link>
//   <Nav.Link>
//     <span>BRANDS</span>
//   </Nav.Link>
//   <Nav.Link>
//     <span>COLLECTIONS</span>
//   </Nav.Link>
//   <Nav.Link>
//     <span>OUTLET</span>
//   </Nav.Link>
//   <Form className="d-flex">
//     <FormControl
//       type="search"
//       placeholder="Search"
//       className="me-2"
//       aria-label="Search"
//     />
//     <Button variant="outline-success">Search</Button>
//   </Form>
// </Navbar.Collapse>
// </Container>
// </Navbar>
