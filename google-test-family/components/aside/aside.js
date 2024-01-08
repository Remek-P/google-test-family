import Title from "@/components/other/titles/title";
import GreyText from "@/components/other/grey-text/grey-text";
import BadgeGrey from "@/components/other/badge-grey/badge-grey";

import classes from "./aside.module.scss";
import Thumbnail from "@/components/other/thumbnail/thumbnail";
import { FAKE_SIDE_SUGGESTIONS } from "@/content/fake-side-suggestions/fake-sidesuggestions";
import {useEffect, useState} from "react";

function Aside() {

  const [suggestion, setSuggestion] = useState({})

  useEffect(() => {
    setSuggestion(FAKE_SIDE_SUGGESTIONS);
  }, []);



  console.log(suggestion)

  return (
      <div className={classes.asideMain}>
        <Thumbnail badgeBlackText={suggestion.length} />

        <div className={classes.asideWrapper}>
          <Title title={suggestion.title}/>

          <div>
            <GreyText key="1" greyText={suggestion.userName}/>

            <div className={classes.asideContainer}>
              <GreyText key="2" greyText={suggestion.noOfPlays}/>
              <span className={classes.asideDot}>•</span>
              <GreyText key="3" greyText={suggestion.publishedAgo}/>
            </div>

            <BadgeGrey isVisible={suggestion.isVisible}/>
          </div>

        </div>

      </div>
  );
}

export default Aside;