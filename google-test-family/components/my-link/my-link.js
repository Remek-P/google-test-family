import Link from "next/link";
import classes from "./my-link.module.scss";

function MyLink({ where = "/", children, linkClass = "regular" }) {
  return (
      <Link href={where} className={classes[linkClass]} rel="no-referrer">{ children }</Link>
  );
}

export default MyLink;