import React from "react";
import classes from "./Toolbar.module.css";
import logo from "../../../loqbox_logo_mobile.png";

const toolbar = () => {
    return (
        <ul>
            <li className={classes.logo}>
                <img src={logo} alt="Give yourself some credit" />
            </li>
            <li>
                <a href="default.asp">Home</a>
            </li>
            <li>
                <a href="news.asp">News</a>
            </li>
            <li>
                <a href="contact.asp">Contact</a>
            </li>
            <li>
                <a href="about.asp">About</a>
            </li>
        </ul>
    );
};

export default toolbar;
