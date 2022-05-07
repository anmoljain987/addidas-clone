import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Discribe from "./Discribe";
import Specifications from "./Specifications";
import Othersliders from "./OtherSliders";
import Recently from "./Recently";
import Alsolike from "./Alsolike";
import Product from "./Details";
import "./Project.css";
import styles from "./Project.module.css";

const Project = () => (
  <div id="main-content" tabindex="-1" className={styles.content_wrapper_3AhOy}>
    <div className={styles.content_1rB_s}>
      <div className={styles.gallery_section_tEM20}>
        <div id="navigation-target-gallery">
          <section className={styles.image_viewer_3hBak}>
            <div
              className={styles.image_viewer_view_list_container_WEl65}
              data-current-index="6"
            >
              <div className={styles.views_1e88l}>
                <div
                  className={`${styles.views_scroll_container_2ZUHK} ${styles.animating_nizNR}`}
                  // style="transform: translate3d(-7929.6px, 0px, 0px);"
                >
                  <Carousel
                    thumbWidth={30}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={true}
                  >
                    <div className={styles.view_CgbJj}>
                      <img
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4eef76ad3664fb19a7dae1e00326612_9366/Superstar_Pride_Shoes_White_GX6395_01_standard.jpg"
                        alt="img"
                        sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      />
                    </div>
                    <div className={styles.view_CgbJj}>
                      <img
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2930e3d0b188479da97cae1e0032e035_9366/Superstar_Pride_Shoes_White_GX6395_02_standard_hover.jpg"
                        alt="img"
                        sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      />
                    </div>
                    <div className={styles.view_CgbJj}>
                      <img
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ef96b7e83244130b4b5ae1e0030e803_9366/Superstar_Pride_Shoes_White_GX6395_03_standard.jpg"
                        alt="img"
                        sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      />
                    </div>
                    <div className={styles.view_CgbJj}>
                      <img
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/308eaa1221f143dd966aae1e0031c320_9366/Superstar_Pride_Shoes_White_GX6395_04_standard.jpg"
                        alt="img"
                        sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      />
                    </div>
                    <div className={styles.view_CgbJj}>
                      <img
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99fd9e5c31884785bac2ae1e0030be46_9366/Superstar_Pride_Shoes_White_GX6395_05_standard.jpg"
                        alt="img"
                        sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      />
                    </div>
                    <div className={styles.view_CgbJj}>
                      <img
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9843099c9d67408e9593ae1e0032b91b_9366/Superstar_Pride_Shoes_White_GX6395_06_standard.jpg"
                        alt="img"
                        sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      />
                    </div>
                    <div className={styles.view_CgbJj}>
                      <img
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d36de3ef5d2345baabe6ae1e00320ba7_9366/Superstar_Pride_Shoes_White_GX6395_09_standard.jpg"
                        alt="img"
                        sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      />
                    </div>
                    <div className={styles.view_CgbJj}>
                      <img
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f97fc399b954136b430ae1e003108dd_9366/Superstar_Pride_Shoes_White_GX6395_41_detail.jpg"
                        alt="img"
                        sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      />
                    </div>
                    <div className={styles.view_CgbJj}>
                      <img
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/91f481f027614c20a6dfae1e00316b5f_9366/Superstar_Pride_Shoes_White_GX6395_42_detail.jpg"
                        alt="img"
                        sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div
        id="fixed-content"
        tabindex="-1"
        className="fixed-width-content_1wHJi"
      >
        <Discribe />
        <Specifications />
        <Alsolike />
        <Othersliders />
        <Recently />
      </div>
    </div>
    <Product />
  </div>
);

export default Project;
