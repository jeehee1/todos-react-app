import React, { useContext } from "react";
import Todos from "./components/Todos";
import TodosList from "./components/TodosList";
import TodosContextProvider from "./context/todos-context";

function App() {

  return (
    <TodosContextProvider>
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
