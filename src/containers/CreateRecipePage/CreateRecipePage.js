import React from "react";
import RecipeHeaderForm from "../../components/Layout/CreateRecipe/RecipeHeaderForm/RecipeHeaderForm";
import IngredientForm from "./IngredientForm/IngredientForm";

export default function CreateRecipePage() {
    return (
        <>
            <RecipeHeaderForm />
            <IngredientForm />
        </>
    );
}
