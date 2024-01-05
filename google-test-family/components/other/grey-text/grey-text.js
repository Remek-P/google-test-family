import classes from "./grey-text.module.scss";

function GreyText({ greyText="test" }) {



  return (
      <div>
        <h5 className={classes.greyText}>{greyText}</h5>
      </div>
  );
}

export default GreyText;