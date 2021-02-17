import React from "react";

const instruction = (props) => {
    return (
        <div>
            {props.stepNo}. {props.instruction}
        </div>
    );
};

export default instruction;
