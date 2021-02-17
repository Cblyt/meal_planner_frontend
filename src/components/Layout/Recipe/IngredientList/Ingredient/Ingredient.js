import React from "react";
import classes from "./Ingredient.module.css";

const ingredient = (props) => {
    let ingredient = null;

    ingredient = (
        <div className={classes.Ingredient}>
            {props.name}, {props.qty}, {props.units}
        </div>
    );

    return ingredient;
};

export default ingredient;
