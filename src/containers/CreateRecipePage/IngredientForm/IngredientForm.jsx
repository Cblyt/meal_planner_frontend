import React from 'react';
import classes from './IngredientForm.module.css';
import IngredientControls from '../../../components/CreateRecipe/IngredientControls/IngredientControls';
import Modal from '../../../components/UI/Modal/Modal';
import IngredientSummary from '../../../components/CreateRecipe/IngredientSummary/IngredientSummary';

const IngredientForm = () => {
	const [ingredients, setIngredients] = React.useState([]);
	const [newIngredient, setNewIngredient] = React.useState({
		name: '',
		amount: 1,
		units: '',
	});
	const [finish, setFinish] = React.useState(false);

	const handleChange = (e) => {
		setNewIngredient({
			...newIngredient,
			[e.target.name]:
				e.target.name === 'amount' ? parseInt(e.target.value, 10) : e.target.value,
		});
	};

	const incrementIngredientHandler = (index) => {
		const tempIngredients = [...ingredients];
		const newIngredientCount = tempIngredients[index].amount + 1;
		tempIngredients[index].amount = newIngredientCount;
		setIngredients(tempIngredients);
	};

	const decrementIngredientHandler = (index) => {
		if (ingredients[index].amount > 0) {
			const tempIngredients = [...ingredients];
			const newIngredientCount = tempIngredients[index].amount - 1;
			tempIngredients[index].amount = newIngredientCount;
			setIngredients(tempIngredients);
		}
	};

	const onSubmit = () => {
		const temp = { id: ingredients.length + 1, ...newIngredient };
		const newIngredients = [...ingredients, temp];
		setIngredients(newIngredients);
		setNewIngredient({ name: '', amount: '', units: '' });
	};

	const finishHandler = () => {
		setFinish(!finish);
	};

	return (
		<div className={classes.IngredientForm}>
			<Modal show={finish} modalClosed={finishHandler}>
				<IngredientSummary ingredients={ingredients} cancel={finishHandler} />
			</Modal>

			<IngredientControls
				ingredients={ingredients}
				ingredientIncremented={incrementIngredientHandler}
				ingredientDecremented={decrementIngredientHandler}
			/>
			<label htmlFor="name">
				Name
				<input
					onChange={handleChange}
					name="name"
					value={newIngredient.name}
				/>
			</label>
			<label htmlFor="amount">
				Amount
				<input
					onChange={handleChange}
					name="amount"
					value={newIngredient.amount}
				/>
			</label>
			<label htmlFor="units">
				Units
				<input
					onChange={handleChange}
					name="units"
					value={newIngredient.units}
				/>
			</label>

			<button type="submit" onClick={onSubmit}>Submit</button>
			<button type="button" onClick={finishHandler}>Finish</button>
		</div>
	);
};

export default IngredientForm;
