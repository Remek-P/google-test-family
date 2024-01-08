import classes from "./badge-black.module.scss";

function BadgeBlack({ badgeBlackText }) {
  return (
      <div>
        <h5 className={classes.badgeBlackText}>{badgeBlackText}</h5>
      </div>
  );
}

export default BadgeBlack;