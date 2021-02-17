import classes from "./IngredientForm.module.css";
import React from "react";

const IngredientForm = (props) => {
    const [ingFields, setIngFields] = React.useState([{ id: 1, value: "" }]);

    const inputOnChange = (e, id) => {
        const newIngFields = ingFields.map((field) => {
            if (field.id === id) {
                return { id, value: e.target.value };
            } else {
                return field;
            }
        });
        setIngFields(newIngFields);
        console.log(ingFields);
    };

    return (
        <div className={classes.IngredientForm}>
            {ingFields.map((field) => (
                <div key={field.id}>
                    <label>
                        Ingredient {field.id}
                        <input onChange={(e) => inputOnChange(e, field.id)} />
                    </label>
                </div>
            ))}
            <button
                onClick={() =>
                    setIngFields([
                        ...ingFields,
                        { id: ingFields.length + 1, value: "" },
                    ])
                }
            >
                +
            </button>
        </div>
    );
};

export default IngredientForm;
