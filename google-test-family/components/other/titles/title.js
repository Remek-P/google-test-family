import classes from "./title.module.scss";

function Title({ headerType="h2" }) {

  const title = "V Rising: Original Soundtrack - Full Album - OST";

  const header1 = <h1 className={classes.header1}>{title}</h1>;
  const header2 = <h2 className={classes.header2}>{title}</h2>;

  const displayTitle = headerType === "h2" ? header2 : header1;

  return (
      displayTitle
  );
}

export default Title;