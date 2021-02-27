import React from 'react';
import { useParams } from 'react-router-dom';
import APIRequest from '../../components/Helpers/APIHandler/APIHandler';
import IngredientList from '../../components/Recipe/IngredientList/IngredientList';
import Method from '../../components/Recipe/Method/Method';
import Header from '../../components/Recipe/Header/Header';
import RecipeImage from '../../bbq_chicken.jpg';

const RecipePage = () => {
	const [recipe, setRecipe] = React.useState({
		name: '',
		description: '',
		cooking_duration: 0,
		ingredients: [],
		instructions: [],
	});
	const [matchingProducts, setMatchingProducts] = React.useState([]);

	const { id } = useParams();

	React.useEffect(async () => {
		const response = await APIRequest('get', `/api/recipes/${id}`);
		setRecipe(response.data);
	}, []);

	React.useEffect(async () => {
		const response = await APIRequest('get', `/api/recipes/${id}/getMatchingProducts`);
		setMatchingProducts(response.data);
		console.log(matchingProducts);
	}, []);

	return (
		<>
			<Header
				title={recipe.name}
				description={recipe.description}
				image={RecipeImage}
				cookingDuration={recipe.cooking_duration}
				difficulty={recipe.difficulty}
			/>
			<div style={{ display: 'flex' }}>
				<IngredientList ingredients={recipe.ingredients} />
				<Method instructions={recipe.instructions} />
			</div>
			<div>Recipe Footer component</div>
		</>
	);
};

export default RecipePage;
