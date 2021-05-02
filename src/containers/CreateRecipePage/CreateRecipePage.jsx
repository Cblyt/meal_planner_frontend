import React from 'react';
import classes from './CreateRecipePage.module.css';
import APIRequest from '../../components/Helpers/APIHandler/APIHandler';
import IngredientControls from '../../components/CreateRecipe/IngredientControls/IngredientControls';
import InstructionControls from '../../components/CreateRecipe/InstructionControls/InstructionControls';
import Input from '../../components/UI/Input/Input';

const CreateRecipePage = () => {
	const [newRecipe, setNewRecipe] = React.useState({
		name: '',
		description: '',
		cooking_duration: 0,
		serves: 1,
		difficulty: 'Easy',
		ingredients: [],
		method: [],
	});
	const [newIngredient, setNewIngredient] = React.useState({
		name: '',
		amount: 1,
		units: '',
	});
	const [instruction, setInstruction] = React.useState({ content: '' });

	const handleChange = (e) => {
		setNewRecipe({
			...newRecipe, [e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = newRecipe;
		await APIRequest('post', '/api/recipes', data);

		setNewRecipe({
			name: '',
			description: '',
			cooking_duration: 0,
			serves: 1,
			difficulty: 'Easy',
			ingredients: [],
			method: [],
		});
	};

	const incrementHandler = (index) => {
		const incrementedIngredients = [...newRecipe.ingredients];
		const newIngredientCount = incrementedIngredients[index].amount + 1;
		incrementedIngredients[index].amount = newIngredientCount;
		setNewRecipe({ ...newRecipe, ingredients: incrementedIngredients });
	};

	const decrementHandler = (index) => {
		if (newRecipe.ingredients[index].amount > 0) {
			const decrementedIngredients = [...newRecipe.ingredients];
			const newIngredientCount = decrementedIngredients[index].amount - 1;
			decrementedIngredients[index].amount = newIngredientCount;
			setNewRecipe({ ...newRecipe, ingredients: decrementedIngredients });
		}
	};

	const deleteInstructionHandler = (index) => {
		const method = [...newRecipe.method];
		method.splice(index, 1);
		setNewRecipe({ ...newRecipe, method });
	};

	const deleteIngredientHandler = (index) => {
		const ingredients = [...newRecipe.ingredients];
		ingredients.splice(index, 1);
		setNewRecipe({ ...newRecipe, ingredients });
	};

	const handleIngredientChange = (e) => {
		setNewIngredient({
			...newIngredient,
			[e.target.name]:
				e.target.name === 'amount' ? parseInt(e.target.value, 10) : e.target.value,
		});
	};

	const submitIngredient = () => {
		const ingredientToAdd = { id: newRecipe.ingredients.length + 1, ...newIngredient };
		const updatedIngredients = [...newRecipe.ingredients, ingredientToAdd];
		setNewRecipe({ ...newRecipe, ingredients: updatedIngredients });
		setNewIngredient({
			name: '',
			amount: 1,
			units: '',
		});
	};

	const handleInstructionChange = (e) => {
		setInstruction({ content: e.target.value });
	};

	const editInstructionHandler = () => {
		alert('edited');
	};

	const submitInstruction = () => {
		const instructionToAdd = { id: newRecipe.method.length + 1, ...instruction };
		const method = [...newRecipe.method, instructionToAdd];
		setNewRecipe({ ...newRecipe, method });
		setInstruction({ content: '' });
	};

	return (
		<div className={classes.NewRecipe}>
			<form onSubmit={handleSubmit}>
				<Input name="name" onChange={handleChange} />
				<label htmlFor="description">
					Description
					<input name="description" onChange={handleChange} />
				</label>
				<label htmlFor="cooking_duration">
					Cooking Duration
					<input name="cooking_duration" onChange={handleChange} />
				</label>
				<label htmlFor="serves">
					Serves
					<input name="serves" onChange={handleChange} />
				</label>
				<label htmlFor="difficulty">
					Difficulty
					<select name="difficulty" onChange={handleChange} value={newRecipe.difficulty}>
						<option>Very Easy</option>
						<option>Easy</option>
						<option>Intermediate</option>
						<option>Hard</option>
					</select>
				</label>
				<div className={classes.Label}>
					Ingredients
				</div>
				<IngredientControls
					ingredients={newRecipe.ingredients}
					ingredientInc={incrementHandler}
					ingredientDec={decrementHandler}
					deleteIngredient={deleteIngredientHandler}
				/>
				<div>
					<label htmlFor="name">
						Name
						<input
							onChange={handleIngredientChange}
							name="name"
							value={newIngredient.name}
						/>
					</label>
					<label htmlFor="amount">
						Amount
						<input
							onChange={handleIngredientChange}
							name="amount"
							value={newIngredient.amount}
						/>
					</label>
					<label htmlFor="units">
						Units
						<input
							onChange={handleIngredientChange}
							name="units"
							value={newIngredient.units}
						/>
					</label>
					<button
						type="button"
						onClick={submitIngredient}
					>
						New Ingredient

					</button>
				</div>
				<div className={classes.Label}>
					Instructions
				</div>
				<InstructionControls
					instructions={newRecipe.method}
					deleteInstruction={deleteInstructionHandler}
					edit={editInstructionHandler}
				/>
				<div>
					<label htmlFor="instruction">
						Name
						<input
							onChange={handleInstructionChange}
							name="instruction"
						/>
					</label>
					<button
						type="button"
						onClick={submitInstruction}
					>
						New Instruction
					</button>
				</div>

				<button type="submit">Create Recipe</button>
			</form>
		</div>
	);
};
export default CreateRecipePage;
