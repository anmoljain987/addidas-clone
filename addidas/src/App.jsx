import "./App.css";
import FinalFoot from "./Components/Main/Footer/FinalFoot";
import Button from "./Components/Reusable/Buttons/Button";
import NavbarCont from "./Components/Main/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Top from "./Components/Reusable/Top/Top";
import Popular from "./Components/Home/Popular";
function App() {
  return (
    <div className="App">
      <Top />
      <NavbarCont></NavbarCont>
      <Home />
      {/* <FinalFoot /> */}
      {/* <Button /> */}
      <Popular></Popular>
    </div>
  );
}

export default App;
