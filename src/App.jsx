import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout/Layout';
import RecipePage from './containers/RecipePage/RecipePage';
import BrowseRecipesPage from './containers/BrowseRecipesPage/BrowseRecipesPage';
import CreateRecipePage from './containers/CreateRecipePage/CreateRecipePage';
import CheapestProductListPage from './containers/CheapestProductListPage/CheapestProductListPage';
import SidebarShoppingList from './components/SidebarShoppingList/SidebarShoppingList';
import APIRequest from './components/Helpers/APIHandler/APIHandler';
import CheckoutPage from './containers/CheckoutPage/CheckoutPage';

const App = () => {
	const [shoppingList, setShoppingList] = React.useState([]);

	const sortShoppingList = (toSort) => {
		const o = {};

		toSort.forEach((item) => {
			const tempId = item.id;
			if (!o[tempId]) {
				o[tempId] = item;
			} else {
				o[tempId].amount += item.amount;
			}
		});
		const a2 = [];
		Object.keys(o).forEach((key) => {
			a2.push(o[key]);
		});
		setShoppingList(a2);
	};

	const addRecipeToShoppingList = async (id) => {
		const response = await APIRequest('get', `/api/recipes/${id}`);
		if (response.data.ingredients) {
			const oldShoppingList = [...shoppingList];
			sortShoppingList([...oldShoppingList, ...response.data.ingredients]);
		}
	};

	const deleteShoppingItemHandler = (ingredientId) => {
		const oldShoppingList = [...shoppingList];
		oldShoppingList.splice(ingredientId, 1);
		setShoppingList(oldShoppingList);
	};

	return (
		<div>
			<Router>
				<Layout>
					<Switch>
						<Route path="/recipe/:id">
							<RecipePage addRecipeToShoppingList={addRecipeToShoppingList} />
							<SidebarShoppingList
								shoppingList={shoppingList}
								deleteShoppingItem={deleteShoppingItemHandler}
							/>
						</Route>
						<Route path="/create-recipe">
							<CreateRecipePage />
						</Route>
						<Route path="/cheapest-product-list/:id">
							<CheapestProductListPage />
							<SidebarShoppingList
								shoppingList={shoppingList}
								deleteShoppingItem={deleteShoppingItemHandler}
							/>
						</Route>
						<Route path="/recipes">
							<BrowseRecipesPage />
							<SidebarShoppingList
								shoppingList={shoppingList}
								deleteShoppingItem={deleteShoppingItemHandler}
							/>
						</Route>
						<Route path="/checkout">
							<CheckoutPage shoppingList={shoppingList} />
							<SidebarShoppingList
								shoppingList={shoppingList}
								deleteShoppingItem={deleteShoppingItemHandler}
							/>
						</Route>
						<Route path="/">
							<BrowseRecipesPage />
							<SidebarShoppingList
								shoppingList={shoppingList}
								deleteShoppingItem={deleteShoppingItemHandler}
							/>
						</Route>
					</Switch>
				</Layout>
			</Router>
		</div>
	);
};

export default App;
