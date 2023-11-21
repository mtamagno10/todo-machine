import React from "react";
import { TodoIcon } from "./index.js"

function DeleteIcon({onDelete}){
    return (
        <TodoIcon
            type="delete"
            color="grey"
            onClick={onDelete}
        />
    )
}

export { DeleteIcon };