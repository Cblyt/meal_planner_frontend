import React from 'react';
import PropTypes from 'prop-types';
import ShoppingListItem from '../../components/ShoppingList/ShoppingListItem/ShoppingListItem';

const ShoppingList = ({ newList }) => (
	<div>
		{newList.map((item) => (
			<ShoppingListItem key={item.id} name={item.name} amount={item.amount} units={item.units} />
		))}
		<button type="button">Checkout</button>
	</div>
);

ShoppingList.propTypes = {
	newList: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		amount: PropTypes.number,
		units: PropTypes.units,
	})).isRequired,
};

export default ShoppingList;
