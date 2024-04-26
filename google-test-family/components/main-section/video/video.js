import Image from "next/image";
import PlayButton from "@/components/main-section/play-button/play-button";

import classes from "./video.module.scss";
import {useRouter} from "next/navigation";

function Video() {

  const router = useRouter();

  return (
      <div className={classes.video} onClick={() => router.push("/login")}>
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