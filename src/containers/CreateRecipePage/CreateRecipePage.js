import React from "react";
import RecipeHeaderForm from "../../components/Layout/CreateRecipe/RecipeHeaderForm/RecipeHeaderForm";
import IngredientForm from "./IngredientForm/IngredientForm";

const CreateRecipePage = () => {
    return (
        <>
            <RecipeHeaderForm />
            <IngredientForm />
        </>
    );
};

export default CreateRecipePage;
