import classes from "./logged-screen.module.scss";

function LoggedScreen() {

  return (
      <main className={classes.logged}>
        <h1 className={classes.loggedHeader}>
          Lista przewinień:
        </h1>
        <div  className={classes.loggedList}>
          <p>Kliknięcie w szemrany link z nieznanego adresu email;</p>
          <p>Niesprawdzenie czy to na pewno YouTube - pasek adresu;</p>
          <p>Nierozpoznanie, że strona trochę się różni od prawdziwego YouTube;</p>
          <p>Zalogowanie się;</p>
          <p> I ostatnie najważniejsze - niesłuchanie MNIE!</p>
        </div>
      </main>

  );
}

export default LoggedScreen;