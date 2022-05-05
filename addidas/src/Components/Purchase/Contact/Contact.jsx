import React from "react";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <section className={styles.contact__section}>
      <h2 className={styles.heading}>CONTACT INFORMATION</h2>
      <p>We'll use these details to keep you informed on your delivery.</p>
      <form action="">
        <input type="text" placeholder="Email *" />
        <input type="number" name="number" placeholder="Mobile Number *" />
        <label htmlFor="number">
          We will only call you if there are questions regarding your order.
        </label>
        <input type="checkbox" name="billing" id="billing" />
        <label htmlFor="billing">
          My billing and delivery information are the same.
        </label>
        <input type="checkbox" name="update" id="update" />
        <label htmlFor="billing">
          I would like to stay upto date. <a href="#">Read more.</a>
        </label>
        <input type="checkbox" name="old" id="old" />
        <label htmlFor="billing">
          Yes, I am over 18 years old &nbsp; accept the
          <a href="#">Terms &nbsp; Conditions</a> and
          <a href="#">Privacy Policy</a>.
        </label>
      </form>
    </section>
  );
}

export default Contact;
