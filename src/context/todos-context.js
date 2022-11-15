import React, { useContext, useState } from "react";

export const TodosContext = React.createContext({
  todos: [],
  addTodo: () => {},
  removeTodo: (id) => {},
});

const TodosContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { id: "t1", date: "2022-11-30", text: "First todo" },
    { id: "t2", date: "2022-11-30", text: "Second todo" },
    { id: "t3", date: "2022-11-29", text: "Third todo" },
  ]);

  const addTodoHandler = (todoDate, todoText) => {
    const newTodo = { id: Math.random(), date: todoDate, text: todoText };

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
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
