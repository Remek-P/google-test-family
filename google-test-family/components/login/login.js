import {useState} from "react";

import classes from "./login.module.scss";

import LoginHeader from "@/components/login/header/login-header";

function Login() {

  const [showHeader, setShowHeader] = useState(true)

  return (
      <section className={classes.modalLogin}>
        { showHeader && <LoginHeader setShowHeader={setShowHeader}/> }
        a
      </section>
  );
}

export default Login;