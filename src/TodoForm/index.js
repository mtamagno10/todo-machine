import React from "react";
import { TodoContext } from "../TodoContext"
import "./TodoForm.css";

function TodoForm() {
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = (event) => {
        event.preventDefault()
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    
    return (
        <div className="TodoForm-overlay">
            <form className="TodoForm-form" onSubmit={event => onSubmit(event)}>
                <label>Escribe tu nuevo TODO</label>
                <textarea
                    placeholder="Cortar cebolla para el almuerzo"
                    value={newTodoValue}
                    onChange={onChange}
                />
                <div className="TodoForm-buttonsContainer">
                    <button
                        onClick={onCancel}
                        type=""
                        className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
                    <button 
                        type="submit"
                        className="TodoForm-button TodoForm-button--add">Añadir</button>
                </div>
            </form>
        </div>
    )
}

export { TodoForm }