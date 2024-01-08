import classes from "./badge-grey.module.scss";

function BadgeGrey({
                      badgeGreyText = "New",
                      isVisible = true,
}) {

  const style = isVisible ? null : {visibility: "hidden"}

  return (
      <div>
        <h5 className={classes.badgeGreyText} style={style}>{badgeGreyText}</h5>
      </div>
  );
}

export default BadgeGrey;