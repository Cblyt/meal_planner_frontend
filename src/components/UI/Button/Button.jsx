import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = ({ children, btnType }) => (
	<button className={[classes.Button, classes[btnType]]} type="button">
		{' '}
		{children}
	</button>
);

Button.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	btnType: PropTypes.string.isRequired,
};

export default Button;
