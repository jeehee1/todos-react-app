import React, { useContext, useEffect } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosList from "./components/TodosList";

function App() {

  useEffect(async () => {
    const response = await fetch(
      "https://todos-project-a5fb8-default-rtdb.firebaseio.com/todos.json"
    );
    const data = await response.json();

    if (!response.ok) {
      return;
    }

    const allTodos = {}

    todosCtx.addTodo()
  }, []);

  const transformedTodosList = [];

  for (const todo in data) {
    const todoObj = {
      id: todo,
      ...data[todo],
    };
    transformedTodosList.push(todoObj);
  }
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
