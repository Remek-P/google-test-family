import classes from "./hamburger.module.scss";

function Hamburger() {
  return (
      <button className={classes.hamburgerContainer} tabIndex="-1">
        <svg xmlns="http://www.w3.org/2000/svg"
             className={classes.hamburgerSVG}
             viewBox="0 0 24 24"
             width="24"
             height="24"
             focusable="false"
             tabIndex="0">
          <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
        </svg>
      </button>
  );
}

export default Hamburger;