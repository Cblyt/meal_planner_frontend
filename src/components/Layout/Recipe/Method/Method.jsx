import React from 'react';
import Step from './Instruction/Instruction';
import classes from './Method.module.css';

const recipeMethod = (props) => (
	<div className={classes.RecipeMethod}>
		<h4>Method</h4>
		{props.instructions.map((instruction, index) => (
			<Step
				stepNo={index + 1}
				instruction={instruction}
				key={instruction}
			/>
		))}
	</div>
);

export default recipeMethod;
