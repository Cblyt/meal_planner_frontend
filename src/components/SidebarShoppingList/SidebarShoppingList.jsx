import React from 'react';
import PropTypes from 'prop-types';
import ShoppingList from '../../containers/ShoppingList/ShoppingList';
import classes from './SidebarShoppingList.module.css';

const SidebarShoppingList = ({ shoppingList, deleteShoppingItem }) => (
	<div className={classes.ShoppingList}>
		<h1>Shopping List</h1>
		<ShoppingList newList={shoppingList} deleteShoppingItem={deleteShoppingItem} />
	</div>
);

SidebarShoppingList.propTypes = {
	shoppingList: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		amount: PropTypes.number,
		units: PropTypes.string,
	})).isRequired,
	deleteShoppingItem: PropTypes.func.isRequired,
};

export default SidebarShoppingList;
