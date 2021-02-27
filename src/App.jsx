import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout/Layout';
import RecipePage from './containers/RecipePage/RecipePage';
import BrowseRecipesPage from './containers/BrowseRecipesPage/BrowseRecipesPage';
import CreateRecipePage from './containers/CreateRecipePage/CreateRecipePage';
import Home from './containers/HomePage/HomePage';

const App = () => (
	<div>
		<Router>
			<Layout>
				<Switch>
					<Route path="/recipe/:id">
						<RecipePage />
					</Route>
					<Route path="/create-recipe">
						<CreateRecipePage />
					</Route>
					<Route path="/recipes">
						<BrowseRecipesPage />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Layout>
		</Router>
	</div>
);

export default App;
