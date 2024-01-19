import Video from "@/components/main-section/video/video";
import classes from "./main-section.module.scss";

function MainSection() {
  return (
      <section className={classes.mainSection}>
        <Video />
      </section>
  );
}

export default MainSection;