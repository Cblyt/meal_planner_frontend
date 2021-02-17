import React from "react";

import classes from "./IngredientControl.module.css";

const ingredientControl = (props) => {
    return (
        <div className={classes.IngredientControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
        </div>
    );
};

export default ingredientControl;
