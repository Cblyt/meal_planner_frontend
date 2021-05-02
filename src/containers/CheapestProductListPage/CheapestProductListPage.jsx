import React from 'react';
import { useParams } from 'react-router-dom';
import APIRequest from '../../components/Helpers/APIHandler/APIHandler';
import ProductList from '../ProductList/ProductList';
import classes from './CheapestProductListPage.module.css';

const CheapestProductListPage = () => {
	const [productList, setProductList] = React.useState([]);
	const [store, setStore] = React.useState('');
	const [totalCost, setTotalCost] = React.useState('');

	const { id } = useParams();

	React.useEffect(async () => {
		const response = await APIRequest('get', `/api/recipes/${id}/getCheapestMatchingProducts`);
		setProductList(response.data.data);
		setStore(response.data.store);
		setTotalCost(response.data.total_cost);
	}, []);

	return (
		<div className={classes.BrowseRecipes}>
			<h1>
				Product List at
				{' '}
				{store}
			</h1>
			<ProductList list={productList} />
			<h3>
				Total cost:
				{' '}
				{' '}
				$
				{totalCost}
			</h3>
		</div>
	);
};

export default CheapestProductListPage;
