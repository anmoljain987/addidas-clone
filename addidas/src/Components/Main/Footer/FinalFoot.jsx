// import React, { Fragment, useState, useEffect } from "react";
import FootBottom from "./FootBottom";
import Footer from "./Footer";
import FootSmall from "./FootSmall";
// function FinalFoot() {
//   const { innerWidth } = window;
//   const [width, setWidth] = useState(innerWidth);
//   useEffect(() => {
//     function sizeChange() {
//       setWidth(innerWidth);
//       console.log(width);
//     }
//     window.addEventListener("resize", sizeChange);

//     return () => window.removeEventListener("resize", sizeChange);
//   }, [width]);

//   return (
//     <Fragment>
//       {width > 960 ? <Footer /> : <FootSmall />}

//       <FootBottom />
//     </Fragment>
//   );
// }

// export default FinalFoot;
import React, { useState, useEffect, Fragment } from "react";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function FinalFoot() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWidth(window.innerWidth);
    }, 500);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <Fragment>
      {width > 960 ? <Footer /> : <FootSmall />}
      <FootBottom />
    </Fragment>
  );
}

export default FinalFoot;
