import React, { Fragment } from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShopping,
} from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import "./Navbar.css";

import HiddenMen from "./HiddenMen";
import HiddenWomen from "./HiddenWomen";
import { Link } from "react-router-dom";
function NavbarCont() {
  return (
    <Fragment>
      <nav className="navigation-bar-bottom">
        <div>
          <Link to="/">
            {" "}
            <img
              src="./Adidas_logo.png"
              alt="adidas"
              className="image-adidas"
            />
          </Link>
        </div>
        <div className="left-nav">
          <ul className="links-nav-upper-wrapper">
            <li className="links-nav-upper">
              <a href="#">help</a>
            </li>
            <li className="links-nav-upper">
              <a href="#">returns</a>
            </li>
            <li className="links-nav-upper">
              <a href="#">order tracker</a>
            </li>
            <li className="links-nav-upper">
              <a href="#">sign up</a>
            </li>{" "}
          </ul>
          <div className="links-nav-bottom-wrapper">
            <ul className="nav-adidas">
              <li className="links-nav men">
                <a href="#">
                  <Link to={"/men"}>
                    <h5>MEN</h5>
                  </Link>
                </a>

                <div className="animation-nav"></div>
                <div className="hidden-nav-drop-men">
                  <HiddenMen />
                </div>
              </li>
              <li className="links-nav women">
                <a href="#">
                  {" "}
                  <h5>WOMEN</h5>
                </a>
                <div className="animation-nav"></div>{" "}
                <div className="hidden-nav-drop-women">
                  <HiddenWomen />
                </div>
              </li>
              <li className="links-nav kids">
                <Link to="/kids">
                  <h5>KIDS</h5>
                </Link>
                <div className="animation-nav"></div>
              </li>
              <li className="links-nav sports">
                <a href="#">
                  <div>SPORTS</div>
                </a>

                <div className="animation-nav"></div>
              </li>
              <li className="links-nav brands">
                <a href="#">
                  <div>BRANDS</div>
                </a>
                <div className="animation-nav"></div>
              </li>
              <li className="links-nav collections">
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
            </ul>
            <ul className="icon-link-nav">
              <li className="search-nav">
                <input
                  style={{ width: "150px" }}
                  type="search"
                  placeholder="Search"
                />
                <AiOutlineSearch
                  style={{
                    backgroundColor: "rgb(233, 236, 239)",
                    paddingRight: "5px",
                    fontSize: "27px",
                    height: "31px",
                  }}
                />
              </li>
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
        </div>
      </nav>
    </Fragment>
  );
}

export default NavbarCont;
