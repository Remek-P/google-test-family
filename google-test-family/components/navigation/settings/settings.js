import classes from "./settings.module.scss";

function Settings() {
  return (
        <button className={`${classes.settings} tooltip`}
                data-tooltiptext="Settings">
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               height="24"
               width="24"
               focusable="false"
               className={classes.settingsSVG}>
            <path
                d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z">
            </path>
          </svg>
        </button>
  );
}

export default Settings;