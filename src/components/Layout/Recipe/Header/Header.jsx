import React from 'react';
import classes from './Header.module.css';

const recipeHeader = (props) => (
	<div style={{ display: 'flex' }}>
		<img alt="Recipe" src={props.image} />
		<div className={classes.RecipeInfo}>
			<h1>{props.title}</h1>
			<div style={{ paddingBottom: '15px' }}>{props.description}</div>
			<hr />
			<ul>
				<li>Serves 6</li>
				<li>Cooks in 25 minutes</li>
				<li>Difficulty: Easy</li>
			</ul>
			<hr />
		</div>
	</div>
);

export default recipeHeader;
