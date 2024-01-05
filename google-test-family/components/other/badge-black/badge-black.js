import classes from "./badge-grey.module.scss";

function BadgeBlack({ badgeBlackText="50:05" }) {
  return (
      <div>
        <h5 className={classes.badgeText}>{badgeBlackText}</h5>
      </div>
  );
}

export default BadgeGrey;