import React, { Fragment } from "react";
import ReactPlayer from "react-player";
// import Alkira from "./Alkira";
import { CgArrowLongRight } from "react-icons/cg";
import Popular from "./Popular";
import CardShop from "./CardShop";
import "./Home.css";
import Slider from "./Sliders/Slider";
import Whatshot from "./Sliders/Whatshot";
import { Link } from "react-router-dom";
import Story from "./Story";

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
            url="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/yoga-ss22-make_space-launch-hp-mh-d_gm0btj.mp4"
          />
          {/* <picture width="100%">
          https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/yoga-ss22-make_space-launch-hp-mh-d_gm0btj.mp4
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
            <div>Make Space</div>
            <div className="text-wrapper-home-small">
              A high performance yoga collection inspired by the elements and
              made in part with Parley Ocean Plastic.
            </div>
          </div>
          <div className="div-brutal-wrapper-vid">
            <div className="div-brutal-vid">
              <button className="button-brutal-vid">
                <Link to="/login">
                  SHOP NOW <CgArrowLongRight style={{ fontSize: "25px" }} />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Alkira /> */}
      <Popular />
      <CardShop />
      <Slider />
      <Whatshot />
      <Story />
    </Fragment>
  );
}

export default Home;
