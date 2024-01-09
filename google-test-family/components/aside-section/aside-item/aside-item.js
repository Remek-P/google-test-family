import Title from "@/components/other/titles/title";
import GreyText from "@/components/other/grey-text/grey-text";
import BadgeGrey from "@/components/other/badge-grey/badge-grey";
import Thumbnail from "@/components/other/thumbnail/thumbnail";

import classes from "./aside-item.module.scss";

import Link from "next/link";

function AsideItem({ suggestion }) {

const path = `/video${suggestion.id}`

  return (
      <Link href={path} className={classes.asideItemMain}>

        <Thumbnail badgeBlackText={suggestion.length}
                   src={suggestion.picture}
                   alt={suggestion.title} />

        <div className={classes.asideItemWrapper}>
          <Title title={suggestion.title}/>

          <div>
            <GreyText key="1" greyText={suggestion.userName}/>

            <div className={classes.asideItemContainer}>
              <GreyText key="2" greyText={suggestion.noOfPlays}/>
              <span className={classes.asideItemDot}>•</span>
              <GreyText key="3" greyText={suggestion.publishedAgo}/>
            </div>

            <BadgeGrey isVisible={suggestion.isVisible}/>
          </div>

        </div>

      </Link>
  );
}

export default AsideItem;