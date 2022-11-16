import React, { useContext } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosList from "./components/TodosList";
import TodosContextProvider from "./context/todos-context";

function App() {

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
