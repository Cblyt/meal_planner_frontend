import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout/Layout';
import RecipePage from './containers/RecipePage/RecipePage';
import BrowseRecipesPage from './containers/BrowseRecipesPage/BrowseRecipesPage';
import CreateRecipePage from './containers/CreateRecipePage/CreateRecipePage';
import CheapestProductListPage from './containers/CheapestProductListPage/CheapestProductListPage';
import Home from './containers/HomePage/HomePage';
import SidebarShoppingList from './components/SidebarShoppingList/SidebarShoppingList';
import APIRequest from './components/Helpers/APIHandler/APIHandler';

const App = () => {
	const [shoppingList, setShoppingList] = React.useState([]);
	const [id, setId] = React.useState('');

	const addRecipeToShoppingList = (newId) => {
		setId(newId);
	};

	React.useEffect(async () => {
		const response = await APIRequest('get', `/api/recipes/${id}`);
		if (response.data.ingredients) {
			const oldShoppingList = [...shoppingList];
			setShoppingList([...oldShoppingList, ...response.data.ingredients]);
		}
	}, [id]);

	return (
		<div>
			<Router>
				<Layout>

					<div>
						<Switch>
							<Route path="/recipe/:id">
								<RecipePage addRecipeToShoppingList={addRecipeToShoppingList} />
							</Route>
							<Route path="/create-recipe">
								<CreateRecipePage />
							</Route>
							<Route path="/cheapest-product-list/:id">
								<CheapestProductListPage />
							</Route>
							<Route path="/recipes">
								<BrowseRecipesPage />
							</Route>
							<Route path="/">
								<Home />
							</Route>
						</Switch>
					</div>
					<SidebarShoppingList shoppingList={shoppingList} />
				</Layout>
			</Router>
		</div>
	);
};

export default App;
