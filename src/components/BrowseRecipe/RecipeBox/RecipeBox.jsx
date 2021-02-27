import React from 'react';
import { Link } from 'react-router-dom';
import classes from './RecipeBox.module.css';

const recipeBox = ({
	name, difficulty, serves, cookingDuration, clicked, id,
}) => (
	<Link
		to={`/recipe/${id}`}
		className={classes.RecipeBox}
		onClick={clicked}
	>
		<h3>{name}</h3>
		<div>
			<ul>
				<li>
					Serves:
					{' '}
					{serves}
				</li>
				<li>
					Cooks in
					{' '}
					{cookingDuration}
					{' '}
					minutes
				</li>
				<li>
					Difficulty:
					{' '}
					{difficulty}
				</li>
			</ul>
		</div>
	</Link>
);

export default recipeBox;
