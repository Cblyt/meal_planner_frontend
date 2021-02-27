import React from 'react';
import classes from './Control.module.css';

const control = (props) => (
	<div className={classes.Control}>
		<div className={classes.Label}>{props.label}</div>
		{props.children}
	</div>
);

export default control;
