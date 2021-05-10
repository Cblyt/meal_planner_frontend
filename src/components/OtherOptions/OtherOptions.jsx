import React from 'react';
import PropTypes from 'prop-types';

const OtherOptions = ({
	storeProductLists, setFocus,
}) => (
	<div style={{ width: '500px' }}>
		<h1>
			Supermarket Options
		</h1>
		{ storeProductLists
			? (storeProductLists.map((productList, index) => (
				<div>
					{productList.store}
					<div>
						Total cost:
						{' '}
						$
						{Number(productList.total_cost).toFixed(2)}
					</div>
					<div>
						Missing Products:
						{' '}
						{productList.missing_products}
					</div>
					<button type="button" onClick={() => setFocus(index)}>
						Show
					</button>
				</div>
			))) : null}
	</div>
);

OtherOptions.propTypes = {
	storeProductLists: PropTypes.arrayOf(PropTypes.shape({
		data: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			price: PropTypes.string,
		})),
		store: PropTypes.string,
		totalCost: PropTypes.number,
		missingProducts: PropTypes.number,
	})).isRequired,
	setFocus: PropTypes.func.isRequired,
};

export default OtherOptions;
