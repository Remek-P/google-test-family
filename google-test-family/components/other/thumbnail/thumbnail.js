import Image from "next/image";
import classes from "./thumbnail.module.scss";
import BadgeBlack from "@/components/other/badge-black/badge-black";

function Thumbnail({
                     alt = "thumbnail",
                     src = "album-cover.png"
                   }) {
  return (
      <div className={classes.thumbnail}>
        <Image src={`/album-cover/${src}`}
               alt={alt}
               sizes="5vw"
               fill
               style={{
                 objectFit: 'contain',
               }}
        />
        <BadgeBlack />
      </div>
  );
}

export default Thumbnail;