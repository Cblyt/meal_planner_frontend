import React from 'react';
import PropTypes from 'prop-types';
import CheckoutListItem from './CheckoutListItem/CheckoutListItem';

const CheckoutList = ({
	list, store, missingProducts, totalCost,
}) => (
	<div style={{ width: '500px' }}>
		<h1>
			Checkout
		</h1>
		{list.map((item) => {
			if (item.price !== '') {
				return (
					<CheckoutListItem
						key={item.product_id}
						productName={item.product_name}
						price={item.price}
					/>
				);
			}
			return null;
		})}
		<h3>
			Total cost:
			{' '}
			$
			{Number(totalCost).toFixed(2)}
			{' '}
		</h3>
		<div>
			Missing Products:
			{' '}
			{missingProducts}
		</div>
		<div>
			Store:
			{' '}
			{store}
		</div>
	</div>
);

CheckoutList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		price: PropTypes.string,
	})).isRequired,
	totalCost: PropTypes.number.isRequired,
	missingProducts: PropTypes.number.isRequired,
	store: PropTypes.string.isRequired,
};

export default CheckoutList;
