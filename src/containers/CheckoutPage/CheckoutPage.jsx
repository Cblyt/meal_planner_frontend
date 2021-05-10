import React from 'react';
import PropTypes from 'prop-types';
import CheckoutList from '../../components/CheckoutList/CheckoutList';
import OtherOptions from '../../components/OtherOptions/OtherOptions';
import classes from './CheckoutPage.module.css';
import APIRequest from '../../components/Helpers/APIHandler/APIHandler';

const CheckoutPage = ({ shoppingList }) => {
	const [mainProductList, setMainProductList] = React.useState([]);
	const [mainTotalCost, setMainTotalCost] = React.useState([]);
	const [mainStore, setMainStore] = React.useState([]);
	const [mainMissingProducts, setMainMissingProducts] = React.useState([]);
	const [urlParams, setUrlParams] = React.useState('');
	const [main, setMain] = React.useState(0);
	const [storeProductLists, setStoreProductLists] = React.useState([]);

	const getParams = (ingredients) => {
		const params = [];
		ingredients.map((ingredient) => (
			params.push(`ingr[]=${ingredient.id}`)
		));
		return params;
	};

	const setMainHandler = (index) => {
		setMain(index);
	};

	React.useEffect(() => {
		setUrlParams(getParams(shoppingList).join('&'));
	}, [shoppingList]);

	React.useEffect(async () => {
		const response = await APIRequest('get', `/api/getMatchingProducts?${urlParams}`);
		setStoreProductLists(response.data);
	}, [urlParams]);

	React.useEffect(() => {
		if (storeProductLists.length !== 0) {
			setMainProductList(storeProductLists[main].data);
			setMainTotalCost(storeProductLists[main].total_cost);
			setMainStore(storeProductLists[main].store);
			setMainMissingProducts(storeProductLists[main].missing_products);
		}
	}, [storeProductLists, main]);

	return (
		<div className={classes.Checkout}>
			<div style={{ display: 'flex' }}>
				<CheckoutList
					list={mainProductList}
					store={mainStore}
					missingProducts={mainMissingProducts}
					totalCost={mainTotalCost}
				/>
				<OtherOptions setFocus={setMainHandler} storeProductLists={storeProductLists} />
			</div>
		</div>
	);
};

CheckoutPage.propTypes = {
	shoppingList: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		amount: PropTypes.number,
		units: PropTypes.units,
	})).isRequired,
};

export default CheckoutPage;
