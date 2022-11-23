import React, { useState } from "react";

export const TodosContext = React.createContext({
  todos: [],
  addTodo: () => {},
  removeTodo: (id) => {},
});

const TodosContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { text: "First todo", date: "2022-10-10" },
    { text: "Second todo", date: "2022-12-12" },
  ]);

  const addTodoHandler = async (todoDate, todoText) => {
    const todoData = { date: todoDate, text: todoText };

    setTodos((prevTodos) => {
      return prevTodos.concat();
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
