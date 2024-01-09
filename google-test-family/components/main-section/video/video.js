import classes from "./video.module.scss";
import Image from "next/image";

function Video() {
  return (
      <div className={classes.video}>
        <Image src={"/album-cover/album-cover-main.jpg"}
               alt={"title"}
               sizes="1280px, 50vw, 33vw"
               fill
               style={{
                 objectFit: 'cover',
                 // borderRadius: "8px",
               }}
        />
      </div>
  );
}

export default Video;