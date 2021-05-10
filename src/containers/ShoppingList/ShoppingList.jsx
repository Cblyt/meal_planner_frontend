import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingListItem from '../../components/ShoppingList/ShoppingListItem/ShoppingListItem';
import classes from './ShoppingList.module.css';

const ShoppingList = ({ newList, deleteShoppingItem }) => (
	<div>
		{newList.map((item, index) => (
			<div style={{ display: 'flex' }}>
				<ShoppingListItem
					key={`shopping_list_${item.id}`}
					name={item.name}
					amount={item.amount}
					units={item.units}
				/>
				<button
					type="button"
					className={classes.Delete}
					onClick={() => deleteShoppingItem(index)}
				>
					Delete
				</button>
			</div>
		))}
		<Link to="/checkout">Checkout</Link>
	</div>
);

ShoppingList.propTypes = {
	newList: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		amount: PropTypes.number,
		units: PropTypes.units,
	})).isRequired,
	deleteShoppingItem: PropTypes.func.isRequired,
};

export default ShoppingList;
