import React from 'react';
import PropTypes from 'prop-types';
import Control from '../../UI/Control/Control';
import classes from './IngredientControls.module.css';

const IngredientControls = ({
	ingredients, ingredientInc, ingredientDec, deleteIngredient,
}) => (
	<>
		{ ingredients ? (
			ingredients.map((ctrl, index) => (
				<Control key={ctrl.id} label={ctrl.name}>
					<button type="button" className={classes.Less} onClick={() => ingredientDec(index)}>
						Less
					</button>
					<button type="button" className={classes.More} onClick={() => ingredientInc(index)}>
						More
					</button>
					<div className={classes.Label}>
						{ctrl.amount}
						{' '}
						{ctrl.units}
					</div>
					<button type="button" className={classes.Edit} onClick={ctrl.edit}>
						Edit
					</button>
					<button type="button" className={classes.Delete} onClick={() => deleteIngredient(index)}>
						Delete
					</button>
				</Control>
			)))
			: null}
	</>
);

IngredientControls.propTypes = {
	ingredients: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		amount: PropTypes.number,
		units: PropTypes.string,
	})).isRequired,
	ingredientInc: PropTypes.func.isRequired,
	ingredientDec: PropTypes.func.isRequired,
	deleteIngredient: PropTypes.func.isRequired,

};

export default IngredientControls;
