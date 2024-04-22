import { useState } from "react";

import classes from "./login.module.scss";

import LoginHeader from "@/components/login/header/login-header";
import LoginForm from "@/components/login/login-form/login-form";

function Login() {

  const [showHeader, setShowHeader] = useState(true)

  return (
      <section className={classes.modalLogin}>
        { showHeader && <LoginHeader setShowHeader={setShowHeader}/> }
        <LoginForm />
      </section>
  );
}

export default Login;