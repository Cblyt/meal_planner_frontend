import React from 'react';
import APIRequest from '../../components/Helpers/APIHandler/APIHandler';
import RecipeBox from '../../components/BrowseRecipe/RecipeBox/RecipeBox';
import classes from './BrowseRecipesPage.module.css';

const BrowseRecipesPage = () => {
	const [recipes, setRecipes] = React.useState([]);

	React.useEffect(async () => {
		const response = await APIRequest('get', '/api/recipes');
		setRecipes(response.data);
	}, []);

	const recipeClickHandler = () => {

	};

	return (
		<div className={classes.BrowseRecipes}>
			{
				recipes.map((recipe) => (
					<RecipeBox
						name={recipe.name}
						key={recipe.id}
						id={recipe.id}
						description={recipe.description}
						serves={recipe.serves}
						cookingDuration={recipe.cooking_duration}
						difficulty={recipe.difficulty}
						clicked={() => recipeClickHandler(recipe.id)}
					/>
				))
			}
		</div>
	);
};

export default BrowseRecipesPage;
