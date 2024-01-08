import Image from "next/image";
import classes from "./thumbnail.module.scss";
import BadgeBlack from "@/components/other/badge-black/badge-black";

function Thumbnail({
                     alt = "thumbnail",
                     src = "album-cover.png",
                     badgeBlackText = "50:05",
                   }) {
  return (
      <div className={classes.thumbnail}>
        <Image src={`/album-cover/${src}`}
               alt={alt}
               sizes="168px"
               fill
               style={{
                 objectFit: 'contain',
               }}
        />
        <BadgeBlack badgeBlackText={badgeBlackText} />
      </div>
  );
}

export default Thumbnail;