import { useState } from "react";

import Image from "next/image";

import PlayButton from "@/components/main-section/play-button/play-button";

import classes from "./video.module.scss";
import AgeRestriction from "@/components/main-section/age-restriction/age-restriction";

function Video() {

  const [isAgeRestriction, setIsAgeRestriction] = useState(false);

  const displayAgeRestriction = () => {
    setIsAgeRestriction(true)
  }

  return (
      <div className={classes.video} onClick={displayAgeRestriction}>
        <Image src={"/album-cover/album-cover-main.jpg"}
               alt={"title"}
               sizes="1280px, 50vw, 33vw"
               fill
               priority={true}
               style={{
                 objectFit: 'cover',
                 cursor: "pointer",
               }}
        />
        { isAgeRestriction && <AgeRestriction /> }
        { !isAgeRestriction && <PlayButton/> }
      </div>
  );
}

export default Video;