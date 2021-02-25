import React from 'react';
import axios from 'axios';
import IngredientList from '../../components/Layout/Recipe/IngredientList/IngredientList';
import Method from '../../components/Layout/Recipe/Method/Method';
import Header from '../../components/Layout/Recipe/Header/Header';
import RecipeImage from '../../bbq_chicken.jpg';

const RecipePage = () => {
	const [recipe, setRecipe] = React.useState({
		description: '',
		ingredients: [],
		instructions: [],
	});

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			axios.get('http://localhost:8000/api/recipes/1').then((response) => {
				setRecipe(response.data);
			});
		}, 1000);
		return () => clearTimeout(timeout);
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
