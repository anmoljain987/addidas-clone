import React from "react";
// import React, { useRef, useState } from "react";
import Slider from "../Home/Sliders/Slider";
import Whatshot from "../Home/Sliders/Whatshot";

import "./Kidsstyles.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Kids() {
  // let settings = {
  //   dot: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   cssEase: "linear"
  // }
  return (
    <div>
      <div>
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/adidas-lego-originals-ss22-flex-launch-clp-masthead-d_tcm209-823156.jpg"
          className="bground"
        ></img>
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/H23161_BOS_LOGO_lockup_white_tcm209-816446.png"
          className="logo"
        ></img>
        <h1 className="text">IMAGINE YOUR WORLD</h1>
        <p className="text1">
          Turn on your imagination and play with the new exclusive adidas LEGO®
          Originals collection. Now available.
        </p>
        <button className="button">Shop Now &#8594;</button>
      </div>
      <Slider />
      <Whatshot />
      {/* <Slider {...settings}>  */}
      {/* <div className='flex-outside'>
        <div className='flex-inside'>
          <div className='border'>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a1b2a26c2b0449d928eacae0129b4aa_9366/adidas_x_LEGO(r)_DOTStm_Short_Tights_Black_GP1144_01_laydown.jpg' alt="shoes"></img>
            <p>adidas x LEGO® DOTS™ Short Tights <br></br><span>Girls Lifestyle</span></p>
            <p className='dis-percentage'>-60%</p>
            <p className='discount-tag'><span className='org-price'>₹2499.00</span><span className='dis-price'>₹1000.00</span></p>
          </div >
          <div className='border'>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/19d89a1733954702aecbacc901752adc_9366/adidas_ZX_8000_x_LEGO(r)_Shoes_Multicolor_GZ8215_01_standard.jpg' alt='shoes'></img>
            <p>adidas ZX 8000 x LEGO® Shoes <br></br><span>Kids Lifestyle</span></p>
            <p className='dis-percentage'>-60%</p>
            <p className='discount-tag'><span className='org-price'>₹2499.00</span><span className='dis-price'>₹1000.00</span></p>
          </div>
          <div className='border'>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b0887d84968406a8d94ad8e00f482d5_9366/adidas_Forta_Run_x_LEGO(r)_Baumhaus_Shoes_White_GZ0204_01_standard.jpg' alt='shoes'></img>
            <p>adidas Forta Run x LEGO® <br></br>Baumhaus Shoes <br></br><span>Kids Running</span></p> 
            <p className='dis-percentage'>-60%</p>
            <p className='discount-tag'><span className='org-price'>₹2499.00</span><span className='dis-price'>₹1000.00</span></p>
          </div>
          <div className='border'>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8b19f5114d24d878e72ad2600f615cd_9366/adidas_Forta_Run_x_LEGO(r)_VIDIYOtm_Shoes_Black_G57947_01_standard.jpg' alt='shoes'></img>
            <p>adidas Forta Run x LEGO® VIDIYO™ <br></br>Shoes <br></br><span>Kids Running</span></p>
            <p className='dis-percentage'>-60%</p>
            <p className='discount-tag'><span className='org-price'>₹2499.00</span><span className='dis-price'>₹1000.00</span></p>
          </div>
          <div className='border'>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/62bd7dd25f334bfd992bad2600aa7d19_9366/adidas_Forta_Run_x_LEGO(r)_VIDIYOtm_Shoes_Black_G57946_01_standard.jpg' alt='shoes'></img>
            <p>aadidas Forta Run x LEGO® VIDIYO™ <br></br>Shoes <br></br><span>Kids Running</span></p>
            <p className='dis-percentage'>-60%</p>
            <p className='discount-tag'><span className='org-price'>₹2499.00</span><span className='dis-price'>₹1000.00</span></p>
          </div>
          <div className='border'>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/692dca8d91cc48098783acc9016fbcb3_9366/adidas_ZX_8000_x_LEGO(r)_Shoes_Black_GZ8216_01_standard.jpg' alt='shoes'></img>
            <p>adidas ZX 8000 x LEGO® Shoes <br></br><span>Kids Lifestyle</span></p>
            <p className='dis-percentage'>-60%</p>
            <p className='discount-tag'><span className='org-price'>₹2499.00</span><span className='dis-price'>₹1000.00</span></p>
          </div>
          <div className='border'>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7770d6427de4d1386b7ac38013a7491_9366/adidas_x_Classic_LEGO(r)_Bricks_Long_Sleeve_Fitted_Tee_Black_GN6778_01_laydown.jpg' alt='shoes'></img>
            <p>adidas x Classic LEGO® Bricks Long <br></br>Sleeve Fitted Tee <br></br><span>Kids Lifestyle</span></p>
            <p className='dis-percentage'>-60%</p>
            <p className='discount-tag'><span className='org-price'>₹2499.00</span><span className='dis-price'>₹1000.00</span></p>
          </div>
          <div className='border'>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/3260d91059974194af13adbb00ebc5a3_9366/adidas_x_LEGO(r)_Sport_Shoes_Red_H01503_01_standard.jpg' alt='shoes'></img>
            <p>adidas x LEGO® Sport Shoes<br></br><span>Kids running</span></p>
            <p className='dis-percentage'>-60%</p>
            <p className='discount-tag'><span className='org-price'>₹2499.00</span><span className='dis-price'>₹1000.00</span></p>
          </div>
          <div className='border'>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ed6a470260aa476aa488acc90186d093_9366/adidas_ZX_8000_x_LEGO(r)_Shoes_Yellow_H04832_01_standard.jpg' alt='shoes'></img>
            <p>adidas ZX 8000 x LEGO® Shoes<br></br><span>Kids Lifestyle</span></p>
            <p className='dis-percentage'>-60%</p>
            <p className='discount-tag'><span className='org-price'>₹2499.00</span><span className='dis-price'>₹1000.00</span></p>
          </div>
          <div className='border'>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e16603bc7c64e109acbad4900c10e7a_9366/adidas_x_Classic_LEGO(r)_Tee_Green_H26660_01_laydown.jpg' alt='shoes'></img>
            <p>adidas x Classic LEGO® Tee<br></br><span>Kids Training</span></p>
            <p className='dis-percentage'>-60%</p>
            <p className='discount-tag'><span className='org-price'>₹2499.00</span><span className='dis-price'>₹1000.00</span></p>
          </div>
          <div className='border'>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/0be395b38e4a43519bd1ad26008aecea_9366/adidas_x_LEGO(r)_Sport_Shoes_Black_FZ5438_01_standard.jpg' alt='shoes'></img>
            <p>adidas x LEGO® Sport Shoes<br></br><span>Kids Running</span></p>
            <p className='dis-percentage'>-60%</p>
            <p className='discount-tag'><span className='org-price'>₹2499.00</span><span className='dis-price'>₹1000.00</span></p>
          </div>
          <div className='border'>
            <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/bf173c5ee1ac436094a7ad0c0047d94f_9366/adidas_x_LEGO(r)_Graphic_Tee_Black_GU8901_01_laydown.jpg' alt='shoes'></img>
            <p>adidas x LEGO® Graphic Tee<br></br><span>Kids Lifestyle</span></p>
            <p className='dis-percentage'>-60%</p>
            <p className='discount-tag'><span className='org-price'>₹2499.00</span><span className='dis-price'>₹1000.00</span></p>
          </div>
        </div>
      </div> */}
      {/* </Slider> */}
      <div className="flex-outside1">
        <div className="flex-inside1">
          <div className="border1">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/training-fw19-ya-tc-1-dt_tcm209-380707.jpg"
              alt="shoes"
            ></img>
            <h2 className="age">1-4 YEARS</h2>
            <button className="shop-button">SHOP INFANTS</button>
          </div>
          <div className="border1">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/training-fw19-ya-tc-2-mt_tcm209-380710.jpg"
              alt="shoes"
            ></img>
            <h2 className="age">4-8 YEARS</h2>
            <button className="shop-button">SHOP CHILDREN</button>
          </div>
          <div className="border1">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/training-fw19-ya-tc-3-dt_tcm209-380711.jpg"
              alt="shoes"
            ></img>
            <h2 className="age">8-16 YEARS</h2>
            <button className="shop-button">SHOP YOUTH</button>
          </div>
        </div>
      </div>
      <div className="text2">
        <h1>TOP PICKS FOR YOU</h1>
      </div>
      {/* <Slider {...settings}>  */}
      <div className="flex-outside">
        <div className="flex-inside">
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/62bd7dd25f334bfd992bad2600aa7d19_9366/G57946_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              adidas Forta Run x LEGO® VIDIYO™ Shoes <br></br>
              <span>Performance</span>
            </p>
            <p className="discount-tag">₹4 9999.00</p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b0887d84968406a8d94ad8e00f482d5_9366/GZ0204_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              adidas Forta Run x LEGO® Baumhaus Shoes <br></br>
              <span>Performance</span>
            </p>
            <p className="discount-tag">₹4 999.00</p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/d249ab99fecb4a8c9362ad6600baa4e5_9366/GW0344_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              Adilette Sandals <br></br>
              <span>Sportswear</span>
            </p>
            <p className="discount-tag">₹2 799.00</p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/701d2f0baf2e4a829786ad0c011b77f3_9366/GU3741_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              adidas x LEGO® Baumhaus Convertible Bag <br></br>
              <span>Performance</span>
            </p>
            <p className="discount-tag">₹2 999.00</p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/db7b958671b04cd2880dad4e00cabaa7_9366/FZ5441_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              adidas x LEGO® Sport Shoes <br></br>
              <span>Performance</span>
            </p>
            <p className="discount-tag">₹6 599.00</p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/f74e2bccabf044838a86ad2e00fb53bb_9366/FZ5440_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              adidas ZX 8000 x LEGO® Shoes <br></br>
              <span>Kids Lifestyle</span>
            </p>
            <p className="discount-tag">₹6 599.00</p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/19d89a1733954702aecbacc901752adc_9366/GZ8215_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              adidas x Classic LEGO® Bricks Long <br></br>Sleeve Fitted Tee{" "}
              <br></br>
              <span>Kids Lifestyle</span>
            </p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/3260d91059974194af13adbb00ebc5a3_9366/H01503_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              adidas x LEGO® Sport Shoes<br></br>
              <span>Kids running</span>
            </p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/0be395b38e4a43519bd1ad26008aecea_9366/FZ5438_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              adidas ZX 8000 x LEGO® Shoes<br></br>
              <span>Kids Lifestyle</span>
            </p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e90b681dc2e4d599f9fad9100e49909_9366/H01504_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              adidas x Classic LEGO® Tee<br></br>
              <span>Kids Training</span>
            </p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8b19f5114d24d878e72ad2600f615cd_9366/G57947_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              adidas x LEGO® Sport Shoes<br></br>
              <span>Kids Running</span>
            </p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/c7d6c1269dcf46da88aeac4d0129df6c_9366/FX2877_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              adidas x LEGO® Graphic Tee<br></br>
              <span>Kids Lifestyle</span>
            </p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
        </div>
      </div>
      {/* </Slider> */}
    </div>
  );
}
