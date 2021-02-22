import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Toolbar.module.css';
import logo from '../../../loqbox_logo_mobile.png';

const Toolbar = () => (
	<ul className={classes.Ul}>
		<li className={classes.Logo}>
			<img src={logo} alt="Give yourself some credit" />
		</li>
		<li>
			<Link to="/">Home</Link>
		</li>
		<li>
			<Link to="/recipes">Recipes</Link>
		</li>
		<li>
			<Link to="/planner">Planner</Link>
		</li>
		<li>
			<Link to="/shopping-list">Shopping List</Link>
		</li>
		<li>
			<Link to="/recipe">RecipePage</Link>
		</li>
		<li>
			<Link to="/create-recipe">Create Recipe</Link>
		</li>
		<li>
			<a href="about.asp">Search bar</a>
		</li>
		<li>
			<a href="about.asp">User component</a>
		</li>
	</ul>
);

export default Toolbar;