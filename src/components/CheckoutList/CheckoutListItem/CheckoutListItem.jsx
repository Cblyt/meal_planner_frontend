import React from 'react';
import PropTypes from 'prop-types';
import classes from './CheckoutListItem.module.css';

const CheckoutListItem = ({ productName, price }) => (
	<div className={classes.CheckoutListItem}>
		{productName}
		{' '}
		{price}
	</div>
);

CheckoutListItem.propTypes = {
	productName: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
};

export default CheckoutListItem;
