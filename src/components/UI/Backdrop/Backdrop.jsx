import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.module.css';

const Backdrop = ({ show, clicked }) => {
	const handleKeyPress = (e) => {
		if (e.key === 'Escape') {
			clicked();
		}
	};

	return (show ? (

		<div
			role="presentation"
			className={classes.Backdrop}
			onClick={clicked}
			onKeyPress={handleKeyPress}
		/>
	) : null
	);
};

Backdrop.propTypes = {
	show: PropTypes.bool.isRequired,
	clicked: PropTypes.func.isRequired,
};

export default Backdrop;
