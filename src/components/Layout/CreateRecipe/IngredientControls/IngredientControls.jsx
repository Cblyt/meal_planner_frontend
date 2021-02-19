import React from 'react';
import IngredientControl from './IngredientControl/IngredientControl';
import classes from './IngredientControls.module.css';

const IngredientControls = ({ ingredients, ingredientIncremented, ingredientDecremented }) => (
	<div className={classes.IngredientControls}>
		{
			ingredients.map((ctrl, index) => (
				<IngredientControl
					key={ctrl.id}
					label={ctrl.name}
					amount={ctrl.amount}
					units={ctrl.units}
					incremented={() => ingredientIncremented(index)}
					decremented={() => ingredientDecremented(index)}
				/>
			))
		}
	</div>
);

IngredientControls.propTypes = {
	ingredients: {}.isRequired,
	ingredientIncremented: Function.isRequired,
	ingredientDecremented: Function.isRequired,

};

export default IngredientControls;
