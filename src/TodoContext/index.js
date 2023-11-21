import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){
    const {
        item: todoList,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage("TODOS_V1", []);
    
      const [searchValue, setSearchValue] = React.useState("");

      const [openModal, setOpenModal] = React.useState(false);
      
      const completedTodos = todoList.filter(todo => !!todo.completed).length 
      const totalTodos = todoList.length
    
      const searchedTodos = todoList.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    
      const completeTodo = (text) => {
        const newTodos = [...todoList]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
      };
    
      const deleteTodo = (text) => {
        const newTodos = [...todoList]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos.splice(todoIndex,1)
        saveTodos(newTodos)
      };

      const addTodo = (newTodoValue) => {
        const newTodo = {text: newTodoValue, completed: false}
        const newTodos = [...todoList]
        newTodos.push(newTodo)
        console.log(newTodos)
        saveTodos(newTodos)
      };

      return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            { children }
        </TodoContext.Provider>
      )
}

function TodoConsumer(){
    return (
        <TodoContext.Consumer></TodoContext.Consumer>
    )
}

export { TodoConsumer, TodoContext, TodoProvider };
