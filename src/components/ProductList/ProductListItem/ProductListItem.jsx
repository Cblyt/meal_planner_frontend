import React from 'react';
import PropTypes from 'prop-types';
import classes from './ProductListItem.module.css';

const ProductListItem = ({ productName, ingredientName, price }) => (
	<div className={classes.ProductListItem}>
		{ingredientName}
		{' ===> '}
		{productName}
		{' - '}
		{price}

	</div>
);

ProductListItem.propTypes = {
	productName: PropTypes.string.isRequired,
	ingredientName: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
};

export default ProductListItem;
