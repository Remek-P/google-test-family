import classes from "./hamburger.module.scss";

function Hamburger() {
  return (
      <div className={classes.hamburgerContainer}>
        <svg className={classes.hamburgerSVG} xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             width="24"
             height="24"
             focusable="false">
          <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
        </svg>
      </div>
  );
}

export default Hamburger;