import "./App.css";
import FinalFoot from "./Components/Main/Footer/FinalFoot";
// import Button from "./Components/Reusable/Buttons/Button";
import NavbarCont from "./Components/Main/Navbar/Navbar";
import Home from "./Components/Home/Home";

import Popular from "./Components/Home/Popular";
import CardShop from "./Components/Home/CardShop";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <NavbarCont />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
      <FinalFoot />
    </Fragment>
  );
}

export default App;
