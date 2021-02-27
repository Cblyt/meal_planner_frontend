import React from 'react';
import './IngredientSummary.module.css';
import PropTypes from 'prop-types';

const IngredientSummary = ({ ingredients, cancel }) => {
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
			<button type="button" onClick={cancel}>CANCEL</button>
			<button type="button">FINISH</button>
		</>
	);
};

IngredientSummary.propTypes = {
	ingredients: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		amount: PropTypes.number,
		units: PropTypes.string,
	})).isRequired,
	cancel: PropTypes.func.isRequired,
};

export default IngredientSummary;
