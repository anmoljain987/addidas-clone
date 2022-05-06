import React, { useState } from "react";
import styles from "./Login.module.css";
import Reward from "./Rewards/Reward";
function Login() {
  const intialState = {
    email: "",
    password: "",
    loggedIn: false,
  };
  const [user, setUser] = useState(intialState);
  function changeHandler(e) {
    const { name, value, checked } = e.target;

    setUser({
      ...user,
      [name]: name === "loggedIn" ? checked : value,
    });
  }
  const { email, password, loggedIn } = user;
  function login(e) {
    e.preventDefault();
    if (loggedIn) {
      localStorage.setItem("token", email);
    } else {
      localStorage.removeItem("token");
    }
    console.log(user);
    setUser(intialState);
  }

  return (
    <div className={styles.flex__login}>
      <div className={styles.login}>
        <div className={styles.heading}>LOG IN</div>
        <div>
          <a className={styles.forget} href="#">
            Forgotten Your Password
          </a>
        </div>
        <form onSubmit={login} className={styles.form}>
          <div>
            <input
              className={styles.input_name}
              type="email"
              placeholder="Email *"
              name="email"
              value={email}
              onChange={changeHandler}
              required
            />
          </div>
          <div>
            {" "}
            <input
              className={styles.input_name}
              type="password"
              placeholder="Password *"
              name="password"
              value={password}
              onChange={changeHandler}
              required
            />
          </div>
          <div>
            {" "}
            <label htmlFor="leggedIn">
              <input
                type="checkbox"
                checked={loggedIn}
                name="loggedIn"
                id="loggedIn"
                onChange={changeHandler}
              />
              Keep me Logged In. <a href="#">Read more.</a>{" "}
            </label>
            <div></div>
          </div>
          <div className={styles.button_container}>
            <div className={styles.button}>
              <button type="submit">LOG IN</button>
            </div>
          </div>
        </form>{" "}
      </div>{" "}
      <Reward />
    </div>
  );
}

export default Login;
