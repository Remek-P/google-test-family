import classes from "./button.module.scss";

function Button({
                  children,
                  onClick = null,
                  form = null,
                  type = "button",
                  btnClass = "light",
}) {
  return (
      <button type={type} className={classes[btnClass]} onClick={onClick} form={form}>
        { children }
      </button>
  );
}

export default Button;