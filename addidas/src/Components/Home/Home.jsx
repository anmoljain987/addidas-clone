import React from "react";
import ReactPlayer from "react-player";
function Home() {
  return (
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
        <div className="div-brutal">
          <button className="button-brutal">
            <a href="#">value</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
