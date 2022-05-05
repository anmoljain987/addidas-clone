import React from "react";
import styles from "./NavPur.module.css";
import adidas from "../../../Assets/adidas.png";
import { CgSmartphone } from "react-icons/cg";
function NavPur() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__top}>
        <div className={styles.div__image}>
          <img className={styles.image} src={adidas} alt="adidas" />
        </div>
        <div className={styles.information}>
          <div className={styles.left}>
            <CgSmartphone /> QUESTIONS? 1800-120-3300
          </div>
          <div className={styles.right}>8AM - 8PM, 7 days a week</div>
        </div>
      </div>
      <div className={styles.nav__bottom}>
        <div className={`${styles.crumbs} `}>
          <div className={`${styles.serial} ${styles.active}`}>1</div>
          <a href="#">BAG</a>
        </div>
        <div className={`${styles.crumbs}  ${styles.active}`}>
          <div className={`${styles.serial}  ${styles.active}`}>2</div>
          <a href="#">DELIVERY</a>
        </div>
        <div className={`${styles.crumbs}`}>
          <div className={`${styles.serial}`}>3</div>
          <a href="#">PAYMENT</a>
        </div>
        <div className={`${styles.crumbs}`}>
          <div className={`${styles.serial}`}>4</div>
          <a href="#">ORDER COMPLETE</a>
        </div>
      </div>
    </nav>
  );
}

export default NavPur;
