import Video from "@/components/main-section/video/video";
import classes from "./main-section.module.scss";
import Title from "@/components/other/titles/title";

function MainSection() {
  return (
      <section className={classes.mainSection}>
        <Video />
        <Title title={"To jest tylko przykład tekstu"} headerType={"h1"} />
      </section>
  );
}

export default MainSection;