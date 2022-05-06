import React from "react";
import styles from "./Help.module.css";
function Help() {
  return (
    <div className={styles.help}>
      <div className={styles.help_heading}>Need Help ?</div>
      <a href="#" className={styles.links}>
        Delivery
      </a>
      <a href="#" className={styles.links}>
        Returns &nbsp; Refunds
      </a>
      <a href="#" className={styles.links}>
        Ordering &nbsp; Payments
      </a>
      <a href="#" className={styles.links}>
        Promotions &nbsp; Vouchers
      </a>
    </div>
  );
}

export default Help;
