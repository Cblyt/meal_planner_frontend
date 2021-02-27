/* eslint-disable indent */
import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
	let inputElement = null;

	switch (props.inputType) {
		case ('textarea'):
			inputElement = <textarea />;
			break;
		default:
			inputElement = <input name={props.name} value={props.value} onChange={props.onChange} />;
	}

	return (
		<div className={classes.Input}>
			<label htmlFor={props.name}>
				{props.name}
				{inputElement}
			</label>
		</div>
	);
};

export default input;
