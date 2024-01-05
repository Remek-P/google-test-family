import classes from "./badge-grey.module.scss";

function BadgeGrey({ badgeGreyText="New" }) {
  return (
      <div>
        <h5 className={classes.badgeGreyText}>{badgeGreyText}</h5>
      </div>
  );
}

export default BadgeGrey;