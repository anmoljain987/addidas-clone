import React from "react";
import { Card } from "react-bootstrap";
import "./CardShop.css";
function CardShop() {
  return (
    <div className="card-shop-container">
      <div className="card-title-who">
        <h5>
          <em> WHO ARE YOU SHOPPING FOR?</em>
        </h5>
      </div>
      <div className="card-group">
        <div className="card-shop">
          <img
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/evergreen-homepage-gender-navigation-men-dt_tcm209-761437.jpg"
            alt="a"
          />
          <div>MEN</div>
        </div>
        <div className="card-shop">
          <img
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/womens_1_tcm209-792193.png"
            alt="b"
          />
          <div>WOMEN</div>
        </div>
        <div className="card-shop">
          <img
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/kids_1_tcm209-792188.png"
            alt="c"
          />
          <div>KIDS</div>
        </div>
      </div>
    </div>
  );
}

export default CardShop;
