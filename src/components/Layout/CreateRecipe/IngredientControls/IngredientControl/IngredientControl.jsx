import React from 'react';

import classes from './IngredientControl.module.css';

const ingredientControl = (props) => (
	<div className={classes.IngredientControl}>
		<div className={classes.Label}>{props.label}</div>
		<button type="button" className={classes.Less} onClick={props.decremented}>
			Less
		</button>
		<button type="button" className={classes.More} onClick={props.incremented}>
			More
		</button>
		<div className={classes.Label}>
			{props.amount}
			{' '}
			{props.units}
		</div>
	</div>
);

export default ingredientControl;
