import React from 'react';
import PropTypes from 'prop-types';
import classes from './Ingredient.module.css';

const Ingredient = ({ name, qty, units }) => (
	<div className={classes.Ingredient}>
		{name}
		{' '}
		{qty}
		{' '}
		{units}
	</div>
);

Ingredient.defaultProps = {
	qty: '1',
	units: 'item',
};

Ingredient.propTypes = {
	name: PropTypes.string.isRequired,
	qty: PropTypes.string,
	units: PropTypes.string,
};

export default Ingredient;
