import Reac from "react";
import IngredientControl from "./IngredientControl/IngredientControl";
import classes from "./IngredientControls.module.css";

const ingredientControls = (props) => {
    return (
        <div className={classes.IngredientControls}>
            {props.ingredients.map((ctrl, index) => {
                return (
                    <IngredientControl
                        key={ctrl.id}
                        label={ctrl.name}
                        amount={ctrl.amount}
                        units={ctrl.units}
                        incremented={() => props.ingredientIncremented(index)}
                        decremented={() => props.ingredientDecremented(index)}
                    />
                );
            })}
        </div>
    );
};

export default ingredientControls;
