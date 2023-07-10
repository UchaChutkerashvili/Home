import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./LinkLayouts.module.css";

const LinkLayouts = () => {
  return (
    <div>
      <div  className={classes.headerNavigation}>
        <NavLink to={"/"} className={classes.navLink}>Home</NavLink>
        <NavLink to={"/about"} className={classes.navLink}>About</NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default LinkLayouts;
