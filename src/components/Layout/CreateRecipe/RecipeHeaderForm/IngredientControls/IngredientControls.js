import Reac from "react";
import IngredientControl from "./IngredientControl/IngredientControl";
import classes from "./IngredientControls.module.css";

const controls = [
    {
        label: "Ingredient 1",
    },
    {
        label: "Ingredient 2",
    },
    {
        label: "Ingredient 3",
    },
];

const ingredientControls = (props) => {
    return (
        <div className={classes.IngredientControls}>
            {controls.map((ctrl) => {
                return (
                    <IngredientControl key={ctrl.label} label={ctrl.label} />
                );
            })}
        </div>
    );
};

export default ingredientControls;
