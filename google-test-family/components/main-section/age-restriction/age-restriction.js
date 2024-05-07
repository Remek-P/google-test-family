import MyLink from "@/components/my-link/my-link";

import classes from "./age-restriction.module.scss";

function AgeRestriction() {
  return (
      <div className={classes.restriction}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false">
          <path
              d="M13 13h-2V7h2v6zm0 4h-2v-2h2v2zm9-5c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-1 0c0-4.96-4.04-9-9-9s-9 4.04-9 9 4.04 9 9 9 9-4.04 9-9z"></path>
        </svg>
        <div className={classes.restrictionContainer}>
          <h2 className={classes.restrictionHeader}>Potwierdź swój wiek</h2>
          <p className={classes.restrictionText}>Przejdź krótką weryfikację, aby potwierdzić, że jesteś w odpowiednim
            wieku, by obejrzeć ten film.&ensp;
            <MyLink key={1} where="https://support.google.com/youtube/answer/10070779?hl=pl#zippy="
                    linkClass="regular">
              Więcej informacji
            </MyLink>
          </p>
          <MyLink key={1}
                  where="/login"
                  linkClass="bw"
          >
            Zaloguj się
          </MyLink>
        </div>
      </div>
  );
}

export default AgeRestriction;