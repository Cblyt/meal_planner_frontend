import React from 'react';
import PropTypes from 'prop-types';
import classes from './ShoppingListItem.module.css';

const ShoppingListItem = ({ name, amount, units }) => (
	<div className={classes.ShoppingListItem}>
		{name}
		{' - '}
		{amount}
		{units}
	</div>
);

ShoppingListItem.propTypes = {
	name: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
	units: PropTypes.string,
};

ShoppingListItem.defaultProps = {
	units: '',
};

export default ShoppingListItem;
