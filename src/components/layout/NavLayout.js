import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

const NavLayout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default NavLayout;
