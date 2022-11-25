import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./context/todos-context";
import TodosList from "./components/TodosList";
import { addTodo } from "./lib/api";
import { useState } from "react";

function App(props) {

  return (
    <TodosContextProvider>
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
