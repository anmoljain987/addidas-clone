import React, { Fragment } from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShopping,
} from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import "./Navbar.css";
import Top from "./Top";

function NavbarCont() {
  return (
    <Fragment>
      <Top />
      <nav className="navigation-bar-bottom">
        <div>
          <img src="./Adidas_logo.png" alt="adidas" className="image-adidas" />
        </div>
        <div className="left-nav">
          <ul className="links-nav-upper-wrapper">
            {" "}
            <li className="links-nav-upper">help</li>
            <li className="links-nav-upper">returns</li>
            <li className="links-nav-upper">order tracker</li>
            <li className="links-nav-upper">sign up</li>{" "}
          </ul>
          <ul className="nav-adidas">
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
          <ul className="icon-link-nav">
            <li className="icon-link">
              <a href="#">
                <AiOutlineUser />
              </a>
            </li>
            <li className="icon-link">
              <a href="#">
                <FiHeart />
              </a>
            </li>
            <li className="icon-link">
              <a href="#">
                <AiOutlineShopping />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavbarCont;
