import classes from "./IngredientForm.module.css";
import React from "react";
import IngredientControls from "../../../components/Layout/CreateRecipe/RecipeHeaderForm/IngredientControls/IngredientControls";

const IngredientForm = (props) => {
    const [ingFields, setIngFields] = React.useState([{ id: 1, value: "" }]);
    const [ingredients, setIngredients] = React.useState([
        {
            id: 1,
            name: "Barbeque Sauce",
            amount: 3,
            units: "tbsp",
        },
        {
            id: 2,
            name: "Chicken",
            amount: 1,
            units: "kg",
        },
        {
            id: 3,
            name: "Rice",
            amount: 2,
            units: "cups",
        },
    ]);

    const [newIngredient, setNewIngredient] = React.useState({
        name: "",
        amount: "",
        units: "",
    });

    const handleChange = (e) => {
        setNewIngredient({ ...newIngredient, [e.target.name]: e.target.value });
    };

    const incrementIngredientHandler = (index) => {
        let tempIngredients = [...ingredients];
        let newIngredientCount = tempIngredients[index].amount + 1;
        tempIngredients[index].amount = newIngredientCount;
        setIngredients(tempIngredients);
    };

    const decrementIngredientHandler = (index) => {
        let tempIngredients = [...ingredients];
        let newIngredientCount = tempIngredients[index].amount - 1;
        tempIngredients[index].amount = newIngredientCount;
        setIngredients(tempIngredients);
    };

    const onSubmit = () => {
        let temp = { id: ingredients.length + 1, ...newIngredient };
        let newIngredients = [...ingredients, temp];
        setIngredients(newIngredients);
        setNewIngredient({ name: "", amount: "", units: "" });
    };

    return (
        <div className={classes.IngredientForm}>
            <IngredientControls
                ingredients={ingredients}
                ingredientIncremented={incrementIngredientHandler}
                ingredientDecremented={decrementIngredientHandler}
            />
            <label>
                Name
                <input
                    onChange={handleChange}
                    name="name"
                    value={newIngredient.name}
                />
            </label>
            <label>
                Amount
                <input
                    onChange={handleChange}
                    name="amount"
                    value={newIngredient.amount}
                />
            </label>
            <label>
                Units
                <input
                    onChange={handleChange}
                    name="units"
                    value={newIngredient.units}
                />
            </label>

            <button onClick={onSubmit}>Submit</button>
        </div>
    );
};

export default IngredientForm;
