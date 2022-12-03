import classes from "./Layout.module.css";
import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

const NavLayout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default NavLayout;
