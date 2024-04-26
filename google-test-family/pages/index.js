import AsideSection from "@/components/aside-section/aside-section";
import MainSection from "@/components/main-section/main-section";

import classes from "./index.module.scss";
import Navigation from "@/components/navigation/navigation";

export default function Home() {


// setTimeout(() => {
//     setIsOpen(true)
//   }, 1000);

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
