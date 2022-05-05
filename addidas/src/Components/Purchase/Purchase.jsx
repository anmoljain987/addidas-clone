import React from "react";
import Shipping from "./NewAddress/ShippingForm";
import NavPur from "./NavPur/NavPur";
import FootPur from "./FootPur/FootPur";
import Contact from "./Contact/Contact";
function Purchase() {
  return (
    <>
      <NavPur />
      <Shipping />
      <Contact /> <FootPur />
    </>
  );
}

export default Purchase;
