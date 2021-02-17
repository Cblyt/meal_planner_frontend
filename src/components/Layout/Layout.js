import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "./Toolbar/Toolbar";

const layout = (props) => {
    return (
        <>
            <Toolbar className={classes.Content}>Toolbar</Toolbar>
            <main>{props.children}</main>
        </>
    );
};

export default layout;
