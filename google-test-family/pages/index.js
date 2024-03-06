import AsideSection from "@/components/aside-section/aside-section";
import classes from "./index.module.scss";
import MainSection from "@/components/main-section/main-section";
import Modal from "@/components/modal/modal";
import Login from "@/components/login/login";

export default function Home() {
  return (
    <>
      <div className={classes.index}>
        <Modal children={<Login />} open={true} />
        <MainSection />
        <AsideSection />
      </div>
    </>
  )
}
