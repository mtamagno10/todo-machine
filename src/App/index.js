import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

/*
const defaultTodos = [
  { text: "Cortar cebolla", c{ompleted: false },
  { text: "Hacer otra cosa", completed: true },
  { text: "Ir al super", completed: false },
  { text: "Comprar hamburguesas", completed: true }
]

localStorage.setItem("TODOS_V1", defaultTodos)
*/
// localStorage.removeItem("TODOS_V1")

function App() {

  return(
    <TodoProvider>
      <AppUI />
    </TodoProvider>

  )
}

export default App;
