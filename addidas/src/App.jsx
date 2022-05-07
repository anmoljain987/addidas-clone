import React from "react";
import "./App.css";

import Kids from "./Components/Kids/Kids.jsx";
import Men from "./Components/Men/Men.jsx";
import FinalFoot from "./Components/Main/Footer/FinalFoot";
// import Button from "./Components/Reusable/Buttons/Button";
import FinalNav from "./Components/Main/Navbar/FinalNav";
import Home from "./Components/Home/Home";

import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Purchase from "./Components/Purchase/Purchase";
import Login from "./Components/Login/Login";
import Project from "./Components/Checkout/Component2/Project";
function App() {
  return (
    <Fragment>
      <FinalNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="men" element={<Men />} />
        <Route path="kids" element={<Kids />} />
        <Route path="/product" element={<Project />} />
        <Route path="login" element={<Login />} />
      </Routes>

      {/* <Purchase /> */}

      <FinalFoot />
    </Fragment>
  );
}

export default App;
