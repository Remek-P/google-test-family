import AsideSection from "@/components/aside-section/aside-section";
import classes from "./index.module.scss";
import MainSection from "@/components/main-section/main-section";

export default function Home() {
  return (
    <>
      <div className={classes.index}>
        <MainSection />
        <AsideSection />
      </div>
    </>
  )
}
