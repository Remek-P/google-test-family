import classes from "./navigation.module.scss";
import Hamburger from "@/components/navigation/hamburger/hamburger";
import Logo from "@/components/navigation/logo/logo";

function Navigation() {
  return (
      <div className={classes.navigationContainer}>
        <Hamburger />
        <Logo />
      </div>
  );
}

export default Navigation;