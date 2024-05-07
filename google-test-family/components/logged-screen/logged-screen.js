import classes from "./logged-screen.module.scss";

function LoggedScreen() {
  return (
        <h1 className={classes.logged}>
          Nie dość, że to był szemrany link, który mógł robić dziwne rzeczy, to jeszcze haker dostałby dane logowania!
        </h1>
  );
}

export default LoggedScreen;