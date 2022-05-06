import React from "react";
import styles from "./Cart.module.css";
function Cart() {
  return (
    <>
      <div className={styles.empty}>YOUR BAG IS EMPTY</div>
      <p>
        Once you add something to your bag - it will appear here. Ready to get
        started?
      </p>
    </>
  );
}

export default Cart;
