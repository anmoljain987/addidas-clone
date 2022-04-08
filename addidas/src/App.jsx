import "./App.css";
import FinalFoot from "./Components/Main/Footer/FinalFoot";
// import Button from "./Components/Reusable/Buttons/Button";
import FinalNav from "./Components/Main/Navbar/FinalNav";
import Home from "./Components/Home/Home";

import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <FinalNav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="kids" element={<Kids />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
      <FinalFoot />
    </Fragment>
  );
}

export default App;
