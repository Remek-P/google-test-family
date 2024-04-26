import classes from "./button.module.scss";

function Button({ onClick, children, btnClass = "light" }) {
  return (
      <button className={classes[btnClass]} onClick={onClick}>
        { children }
      </button>
  );
}

export default Button;