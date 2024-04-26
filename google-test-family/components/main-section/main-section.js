import Video from "@/components/main-section/video/video";
import classes from "./main-section.module.scss";
import Title from "@/components/other/titles/title";

function MainSection() {

  const title = "Co warto wiedzieć o AI w 2024 roku"

  return (
      <section className={classes.mainSection}>
        <Video />
        <Title title={title} headerType={"h1"} />
      </section>
  );
}

export default MainSection;