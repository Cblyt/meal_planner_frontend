import React from "react";
import IngredientList from "../../components/Layout/Recipe/IngredientList/IngredientList";
import Method from "../../components/Layout/Recipe/Method/Method";

const RecipePage = () => {
    const [ingredients, setIngredients] = React.useState([
        {
            name: "Chicken",
            qty: "1",
            units: "kg",
        },
        {
            name: "Barbeque Sauce",
            qty: "3",
            units: "tbsp",
        },
    ]);

    const [instructions, setIntructions] = React.useState([
        "Place a large non-stick frying pan on a high heat with 1 tablespoon of oil, then add the popping corn and cover with a lid. Once popped, add a few generous shakes of Tabasco, toss together and tip into a large salad bowl.",
        "In the same pan, grill the corn until lightly charred all over, turning regularly, then remove.",
    ]);

    return (
        <>
            <div>Recipe Header component: Image, Title, Description</div>
            <div style={{ display: "flex" }}>
                <IngredientList ingredients={ingredients} />
                <Method instructions={instructions} />
            </div>
            <div>Recipe Footer component</div>
        </>
    );
};

export default RecipePage;
