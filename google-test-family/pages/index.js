import AsideSection from "@/components/aside-section/aside-section";
import MainSection from "@/components/main-section/main-section";
import Navigation from "@/components/navigation/navigation";

import classes from "./index.module.scss";

export default function Home() {
  return (
      <>
        <Navigation/>
        <div className={classes.index}>
          <MainSection/>
          <AsideSection/>
        </div>
      </>

  )
}
