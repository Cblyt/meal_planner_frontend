import React from 'react';
import PropTypes from 'prop-types';
import ProductListItem from '../../components/ProductList/ProductListItem/ProductListItem';

const ShoppingList = ({ list }) => (
	<div style={{ width: '500px' }}>
		{list.map((item) => (
			<ProductListItem
				key={item.product_id}
				productName={item.product_name}
				ingredientName={item.ingredient_name}
				price={item.price}
			/>
		))}
	</div>
);

ShoppingList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		price: PropTypes.string,
	})).isRequired,
};

export default ShoppingList;
