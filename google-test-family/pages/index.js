import { useState } from "react";

import AsideSection from "@/components/aside-section/aside-section";
import MainSection from "@/components/main-section/main-section";
import Modal from "@/components/modal/modal";
import Login from "@/components/login/login";

import classes from "./index.module.scss";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

// setTimeout(() => {
//     setIsOpen(true)
//   }, 1000);

  return (
    <>
      <div className={classes.index}>
        <MainSection setIsOpen={setIsOpen} />
        <AsideSection />
        <Modal children={<Login />} open={isOpen} />
      </div>
    </>
  )
}
