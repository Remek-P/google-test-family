import Hamburger from "@/components/navigation/hamburger/hamburger";
import Logo from "@/components/navigation/logo/logo";
import Search from "@/components/navigation/search/search";
import Settings from "@/components/navigation/settings/settings";
import SignIn from "@/components/navigation/sign-in/sign-in";

import classes from "./navigation.module.scss";

function Navigation() {
  return (
      <div className={classes.navigationContainer}>
        <div className={classes.wrapper}>
          <Hamburger />
          <Logo />
        </div>
          <Search />
        <div className={classes.wrapper}>
          <Settings />
          <SignIn />
        </div>
      </div>
  );
}

export default Navigation;