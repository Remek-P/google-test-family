import Link from "next/link";
import classes from "./my-link.module.scss";

function MyLink({ where = "/", children, linkClass = "regular", style = null }) {
  return (
      <Link href={where} className={classes[linkClass]} style={{style}}>{ children }</Link>
  );
}

export default MyLink;