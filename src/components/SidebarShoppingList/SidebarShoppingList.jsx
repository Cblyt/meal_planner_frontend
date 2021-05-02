import React from 'react';
import PropTypes from 'prop-types';
import ShoppingList from '../../containers/ShoppingList/ShoppingList';
import classes from './SidebarShoppingList.module.css';

const SidebarShoppingList = ({ shoppingList }) => (
	<div className={classes.ShoppingList}>
		<h1>Shopping List</h1>
		<ShoppingList newList={shoppingList} />
	</div>
);

SidebarShoppingList.propTypes = {
	shoppingList: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		amount: PropTypes.number,
		units: PropTypes.string,
	})).isRequired,
};

export default SidebarShoppingList;
