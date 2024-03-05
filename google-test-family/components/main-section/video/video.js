import classes from "./video.module.scss";
import Image from "next/image";
import PlayButton from "@/components/main-section/play-button/play-button";

function Video() {
  return (
      <div className={classes.video}>
        <Image src={"/album-cover/album-cover-main.jpg"}
               alt={"title"}
               sizes="1280px, 50vw, 33vw"
               fill
               priority={true}
               style={{
                 objectFit: 'cover',
               }}
        />
        <PlayButton />
      </div>
  );
}

export default Video;