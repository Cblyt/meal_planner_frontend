import React from "react";
import { useInput } from "./UseInput/UseInput";

const RecipeHeaderForm = (props) => {
    const { value: name, bind: bindName, reset: resetName } = useInput("");
    const {
        value: description,
        bind: bindDescription,
        reset: resetDescription,
    } = useInput("");
    const {
        value: servings,
        bind: bindServings,
        reset: resetServings,
    } = useInput("");
    const {
        value: duration,
        bind: bindDuration,
        reset: resetDuration,
    } = useInput("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            bindName.value,
            bindDescription.value,
            bindServings.value,
            bindDuration.value
        );
        resetName();
        resetDescription();
        resetServings();
        resetDuration();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" {...bindName} />
                </label>
                <label>
                    Description:
                    <input type="text" {...bindDescription} />
                </label>
                <label>
                    Servings:
                    <input type="text" {...bindServings} />
                </label>
                <label>
                    Duration:
                    <input type="text" {...bindDuration} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default RecipeHeaderForm;
