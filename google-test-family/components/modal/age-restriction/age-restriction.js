import MyLink from "@/components/my-link/my-link";

import classes from "./age-restriction.module.scss";

function AgeRestriction() {

  return (
      <div className={classes.restriction}>
        <h2 className={classes.restrictionHeader}>Potwierdź swój wiek</h2>
        <p className={classes.restrictionText}>Przejdź krótką weryfikację, aby potwierdzić, że jesteś w odpowiednim wieku, by obejrzeć ten film.
          <MyLink where="https://support.google.com/youtube/answer/10070779?hl=pl#zippy="
                  linkClass={classes.restrictionLinkInfo}>
            Więcej informacji
          </MyLink>
        </p>
        <MyLink where="/login" children="Zaloguj się" linkClass={classes.restrictionLinkLogin} />
      </div>
  );
}

export default AgeRestriction;