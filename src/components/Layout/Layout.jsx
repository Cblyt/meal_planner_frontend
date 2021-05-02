import React from 'react';
import classes from './Layout.module.css';
import Toolbar from './Toolbar/Toolbar';

const layout = (props) => (
	<>
		<Toolbar className={classes.Content}>Toolbar</Toolbar>
		<main className={classes.Layout}>{props.children}</main>
	</>
);

export default layout;
