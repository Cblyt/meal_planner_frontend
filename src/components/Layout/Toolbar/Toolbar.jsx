import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Toolbar.module.css';
import logo from '../../../loqbox_logo_mobile.png';

const Toolbar = () => (
	<ul className={classes.Ul}>
		<li className={classes.Logo}>
			<Link to="/">
				<img src={logo} alt="Give yourself some credit" />
			</Link>
		</li>
		<li>
			<Link to="/recipes">Recipes</Link>
		</li>
		<li>
			<Link to="/create-recipe">Create Recipe</Link>
		</li>
	</ul>
);

export default Toolbar;
