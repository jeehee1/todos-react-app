import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./context/todos-context";
import TodosList from "./components/TodosList";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
