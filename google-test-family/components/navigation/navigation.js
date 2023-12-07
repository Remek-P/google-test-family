import classes from "./navigation.module.scss";
import Hamburger from "@/components/navigation/hamburger/hamburger";

function Navigation() {
  return (
      <div className={classes.navigationContainer}>
        <Hamburger />
      </div>
  );
}

export default Navigation;