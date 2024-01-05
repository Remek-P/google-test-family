import Title from "@/components/other/titles/title";
import GreyText from "@/components/other/grey-text/grey-text";
import BadgeGrey from "@/components/other/badge-grey/badge-grey";

import classes from "./aside.module.scss";
import Thumbnail from "@/components/other/thumbnail/thumbnail";

function Aside() {
  return (
      <div className={classes.asideMain}>
        <Thumbnail/>

        <div className={classes.asideWrapper}>
          <Title/>

          <div>
            <GreyText key="1"/>

            <div className={classes.asideContainer}>
              <GreyText key="2"/>
              <span className={classes.asideDot}>•</span>
              <GreyText key="3"/>
            </div>

            <BadgeGrey/>
          </div>

        </div>

      </div>
  );
}

export default Aside;