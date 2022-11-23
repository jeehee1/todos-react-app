import { response } from "express";
import React, { useContext, useState } from "react";

export const TodosContext = React.createContext({
  todos: [],
  addTodo: () => {},
  removeTodo: (id) => {},
});

const TodosContextProvider = (props) => {
  const [todos, setTodos] = useState(transformedTodosList);

  const addTodoHandler = async (todoDate, todoText) => {
    const todoData = { date: todoDate, text: todoText };

    setTodos((prevTodos) => {
      return prevTodos.concat(todoData);
    });
  };

  const removeTodoHandler = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.id !== todoId);
    });
  };

  const todosContextValue = {
    todos: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={todosContextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
