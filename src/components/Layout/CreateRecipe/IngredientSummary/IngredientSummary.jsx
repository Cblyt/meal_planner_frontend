import React from 'react';
import './IngredientSummary.module.css';

const IngredientSummary = ({ ingredients }) => {
	const displayIngredients = ingredients.map((ingredient) => (
		<li key={ingredient.id}>
			{ingredient.name}
			{ingredient.amount}
			{ingredient.units}
		</li>
	));
	return (
		<>
			<h3> Your ingredients</h3>
			<p>A delicious recipe with the following ingredients</p>
			<ul>{displayIngredients}</ul>
			<p>Continue to checkout?</p>
		</>
	);
};

IngredientSummary.propTypes = {
	ingredients: {}.isRequired,
};

export default IngredientSummary;
