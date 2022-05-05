import React from "react";
import styles from "./Contact.module.css";
import Arriving from "./Arriving/Arriving";

function Contact() {
  return (
    <>
      <Arriving />
      <section className={styles.contact__section}>
        <h2 className={styles.heading}>CONTACT INFORMATION</h2>
        <p>We'll use these details to keep you informed on your delivery.</p>
        <form className={styles.form}>
          <div>
            {" "}
            <input
              className={styles.input_name}
              type="text"
              placeholder="Email *"
            />
          </div>
          <div>
            {" "}
            <input
              className={styles.input_name}
              type="number"
              name="number"
              placeholder="Mobile Number *"
            />{" "}
            <div className={styles.extra} htmlFor="number">
              We will only call you if there are questions regarding your order.
            </div>
          </div>

          <div>
            {" "}
            <input
              className={styles.checkbox}
              type="checkbox"
              name="billing"
              id="billing"
            />
            <label htmlFor="billing">
              My billing and delivery information are the same.
            </label>
          </div>
          <div>
            {" "}
            <input
              className={styles.checkbox}
              type="checkbox"
              name="update"
              id="update"
            />
            <label htmlFor="billing">
              I would like to stay upto date. <a href="#">Read more.</a>
            </label>
          </div>
          <div>
            {" "}
            <input
              className={styles.checkbox}
              type="checkbox"
              name="old"
              id="old"
            />
            <label htmlFor="billing">
              Yes, I am over 18 years old &nbsp; accept the
              <a href="#">Terms &nbsp; Conditions</a> and
              <a href="#">Privacy Policy</a>.{" "}
            </label>
          </div>
          <div className={styles.button_container}>
            {" "}
            <div className={styles.button}>
              <input className={styles.input} type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
