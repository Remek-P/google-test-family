import classes from "./navigation.module.scss";
import Hamburger from "@/components/navigation/hamburger/hamburger";
import Logo from "@/components/navigation/logo/logo";
import Search from "@/components/navigation/search/search";
import Settings from "@/components/main/settings";
import SignIn from "@/components/main/sign-in/sign-in";

function Navigation() {
  return (
      <div className={classes.navigationContainer}>
        <div className={classes.wrapperLeft}>
          <Hamburger />
          <Logo />
        </div>
          <Search />
        <div  className={classes.wrapperRight}>
          <Settings />
          <SignIn />
        </div>
      </div>
  );
}

export default Navigation;