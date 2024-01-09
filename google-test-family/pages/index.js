import AsideSection from "@/components/aside-section/aside-section";
import classes from "./index.module.scss";

export default function Home() {
  return (
    <>
      <div className={classes.index}>

        <AsideSection />
      </div>
    </>
  )
}
