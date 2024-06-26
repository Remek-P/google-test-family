import Button from "@/components/button/button";
import MyLink from "@/components/my-link/my-link";

import classes from "./login-header.module.scss";

function LoginHeader({ setShowHeader }) {
  return (
      <header className={classes.header}>

        <div className={classes.headerContainerInfo}>

          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 36 36">
            <path
                d="M34.32 18.39c0-1.17-.11-2.3-.29-3.39H18v6.48h9.4c-.38 2.19-1.59 4.05-3.42 5.31v4.1h5.28c3.2-2.97 5.06-7.33 5.06-12.5z"
                fill="#4285F4"/>
            <path
                d="M18 35c4.59 0 8.44-1.52 11.25-4.12l-5.28-4.1c-1.57 1.08-3.59 1.71-5.97 1.71-4.51 0-8.33-3.02-9.73-7.11H2.82v4.23C5.62 31.18 11.36 35 18 35z"
                fill="#34A853"/>
            <path
                d="M8.27 21.39c-.36-1.07-.57-2.21-.57-3.39s.21-2.32.58-3.39v-4.23H2.82C1.67 12.67 1 15.25 1 18s.67 5.33 1.82 7.63l5.45-4.24z"
                fill="#FBBC05"/>
            <path
                d="M18 7.5c2.56 0 4.86.88 6.67 2.61l.01.02 4.7-4.7C26.43 2.68 22.59 1 18 1 11.36 1 5.62 4.82 2.82 10.37l5.45 4.23c1.4-4.08 5.22-7.1 9.73-7.1z"
                fill="#EA4335"/>
            <path d="M1 1h34v34H1z" fill="none"/>
          </svg>

          <div className={classes.headerInformation}>
            <p>Strona logowania przez Google ma nowy wygląd</p>
            <p>Ulepszyliśmy stronę logowania, aby miała bardziej nowoczesny wygląd</p>
          </div>

        </div>

        <div className={classes.headerContainerAction}>

          <MyLink where="https://support.google.com/accounts?p=new-si-ui" linkClass="full" >
            Więcej&nbsp;informacji
          </MyLink>

          <Button onClick={() => {setShowHeader(false)}}>
            Zamknij
          </Button>

        </div>

      </header>
  );
}

export default LoginHeader;