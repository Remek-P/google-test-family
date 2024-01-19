import classes from "./grey-text.module.scss";

function GreyText({ greyText= "test", wrapSpace = "normal" }) {

  const style = {
    whiteSpace: `${wrapSpace}`
  }

  return (
      <div>
        <h5 className={classes.greyText} style={style}>{greyText}</h5>
      </div>
  );
}

export default GreyText;