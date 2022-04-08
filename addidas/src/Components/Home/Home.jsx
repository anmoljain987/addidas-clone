import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import Alkira from "./Alkira";
import { CgArrowLongRight } from "react-icons/cg";
import Popular from "./Popular";
import CardShop from "./CardShop";
import "./Home.css";
function Home() {
  return (
    <Fragment>
      <div className="home-wrapper">
        <div className="video-wrapper">
          <ReactPlayer
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
            url="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/Membership/Members%20Week/Launch%20Phase/brand-ss22-membersweek-launch-glp-m-mh-hero-d.mp4"
          />
          <div className="text-wrapper-home">
            <div>
              <span>WEEKEND</span>
            </div>
            <div>
              <span>EXCLUSIVE</span>
            </div>
            <div>
              <span>40-60% OFF</span>
            </div>
          </div>
          <div className="div-brutal-wrapper-vid">
            <div className="div-brutal-vid">
              <button className="button-brutal-vid">
                <a href="#">
                  SHOP NOW <CgArrowLongRight style={{ fontSize: "25px" }} />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Alkira />
      <Popular />
      <CardShop />
    </Fragment>
  );
}

export default Home;
