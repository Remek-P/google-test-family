import Button from "@/components/button/button";
import MyLink from "@/components/my-link/my-link";

import {useRouter} from "next/navigation";

import classes from "./login-form.module.scss";

function LoginForm() {

  const router = useRouter();

  const emailLabel = "Adres e-mail lub telefon";
  const passwordLabel = "Wpisz hasło";

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/logged");
  }

  return (
      <form className={classes.loginForm} name="login" id="form" onSubmit={handleClick}>

        <div className={classes.loginFormContainerCompany}>

          <svg xmlns="http://www.w3.org/2000/svg"
               width="48"
               height="48"
               viewBox="0 0 48 48"
               aria-hidden="true">
            <path fill="#4285F4"
                  d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path>
            <path fill="#34A853"
                  d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path>
            <path fill="#FBBC05"
                  d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"></path>
            <path fill="#EA4335"
                  d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path>
            <path fill="none" d="M2 2h44v44H2z"></path>
          </svg>

          <h2 className={classes.loginFormHeader}>Zaloguj&nbsp;się</h2>
          <p className={classes.loginFormParagraph}>Przejdź do YouTube</p>

        </div>


        <div className={classes.loginFormContainerAction}>


          <div className={classes.inputContainerEmail}
               data-label={emailLabel}>
            <label className="visually-hidden"
                   htmlFor="email">
              {emailLabel}
            </label>
            <input id="email"
                   name="email"
                   type="email"
                   placeholder={emailLabel}
                   required
            />
          </div>

          <div className={classes.inputContainerPassword}
               data-label={passwordLabel}>
            <label className="visually-hidden"
                   htmlFor="password">
              {passwordLabel}
            </label>
            <input id="password"
                   name="password"
                   type="password"
                   placeholder={passwordLabel}
                   required
            />
          </div>

          {/*Todo: dodać linki*/}
          <MyLink where="/logged" linkClass="regular">Nie pamiętasz danych?</MyLink>

          <div className={classes.inputContainerOther}>
            <p>To nie Twój komputer? Aby się zalogować, użyj okna prywatnego.</p>
            <MyLink where="https://support.google.com/accounts/answer/2917834?visit_id=638499894514079638-819687517&p=signin_privatebrowsing&hl=en-GB&rd=1" linkClass="regular">Dowiedz się więcej o używaniu trybu gościa</MyLink>
          </div>

          <div className={classes.inputContainerButtons}>
            <MyLink where="/logged" linkClass="full">Utwórz&nbsp;konto</MyLink>
            <Button type="submit"
                    btnClass="full"
                    children="Zaloguj"
                    form="form"
            />
          </div>

        </div>

      </form>
  );
}

export default LoginForm;