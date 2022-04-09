import React from "react";
import "./Button.css";
function Button({ value }) {
  return (
    <div className="div-wrapper">
      <div className="div-brutal">
        <button className="button-brutal">
          <a href="#">value</a>
        </button>
      </div>
    </div>
  );
}

export default Button;
