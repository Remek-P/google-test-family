import AsideSection from "@/components/aside-section/aside-section";
import MainSection from "@/components/main-section/main-section";
import Navigation from "@/components/navigation/navigation";

import {useRouter} from "next/navigation";

import classes from "./index.module.scss";

export default function Home() {

  const router = useRouter();

// setTimeout(() => {
//     router.push("/login");
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
