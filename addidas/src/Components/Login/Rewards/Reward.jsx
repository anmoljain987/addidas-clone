import styles from "./Reward.module.css";
import { CgArrowLongRight } from "react-icons/cg";
function Reward() {
  return (
    <div className={styles.reward}>
      <div className={styles.heading}>
        JOIN THE CLUB. GET <br />
        REWARDED.
      </div>
      <p>JOIN ADICLUB. GET REWARDED TODAY.</p>
      <ul>
        <li>Free delivery</li>
        <li>A 15% off voucher for your next purchase</li>
        <li>Access to Members Only products and sales</li>
        <li>Access to adidas Running and Training apps</li>
        <li>Special offers and promotions</li>
      </ul>
      <p>
        Join now to start earning points, reach new levels and unlock more
        rewards and benefits from adiClub.
      </p>
      <div className={styles.button_container}>
        <div className={styles.button}>
          <button className={styles.arrow}>
            JOIN NOW <CgArrowLongRight className={styles.arrow_style} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Reward;
