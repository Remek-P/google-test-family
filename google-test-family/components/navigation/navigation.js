import classes from "./navigation.module.scss";
import Hamburger from "@/components/navigation/hamburger/hamburger";
import Logo from "@/components/navigation/logo/logo";
import Search from "@/components/navigation/search/search";

function Navigation() {
  return (
      <div className={classes.navigationContainer}>
        <div className={classes.wrapperLeft}>
          <Hamburger />
          <Logo />
        </div>
          <Search />
        <div>
          Tutaj miejsce na login
        </div>
      </div>
  );
}

export default Navigation;