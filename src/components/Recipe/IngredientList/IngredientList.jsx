import React from 'react';
import RecipeIngredient from './Ingredient/Ingredient';
import classes from './IngredientList.module.css';

const ingredientList = (props) => (
	<div className={classes.IngredientList}>
		<h4>Ingredients</h4>
		{props.ingredients.map((ingredient) => (
			<RecipeIngredient
				key={ingredient.name}
				name={ingredient.name}
				qty={ingredient.qty}
				units={ingredient.units}
			/>
		))}
	</div>
);

export default ingredientList;
