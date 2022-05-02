import React, { Fragment } from "react";
import ReactPlayer from "react-player";
// import Alkira from "./Alkira";
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
          {/* <picture width="100%">
            <source
              media="(min-width: 960px)"
              srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/ss22-collabs-archive-mh-d_tcm209-875559.jpg"
            />
            <source
              media="(min-width: 600px)"
              srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/enIN/Images/ss22-collabs-archive-mh-t_tcm209-875561.jpg"
            />
            <source srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_600,w_600/enIN/Images/ss22-collabs-archive-mh-m_tcm209-875560.jpg" />
            <img
              id="tcm:209-875562"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/ss22-collabs-archive-mh-d_tcm209-875559.jpg"
              class="performance-item"
              data-inject_ssr_performance_instrument=""
            />
          </picture> */}
        </div>
        <div className="absolute-home-wrapper">
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
      {/* <Alkira /> */}
      <Popular />
      <CardShop />
    </Fragment>
  );
}

export default Home;
