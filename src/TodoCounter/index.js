import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter(){

    const { 
        completedTodos,
        totalTodos
     } = React.useContext(TodoContext)

    if(completedTodos === totalTodos){
        return (
            <h1 className="TodoCounter">
                ¡Felicitaciones! Has completado todos tus TODOs 🥳
            </h1>
        )
    }else{
        return (
            <h1 className="TodoCounter">
                Has completado <span>{completedTodos}</span> de  <span>{totalTodos}</span> TODOs
            </h1>
        )
    }
  }

export { TodoCounter }