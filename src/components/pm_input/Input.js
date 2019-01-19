import React from "react";

const InputWithLabel = (props) => {
    return (
        <input
            type={props.type ? props.type : "text"}
            id={props.labelId ? props.labelId : "def1"}

        />
    );
}

export { InputWithLabel };