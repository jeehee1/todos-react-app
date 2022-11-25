import TodosList from "../components/TodosList";
import classes from "./Todos.module.css";
import { Fragment, useEffect, useState } from "react";
import NewTodo from "../components/NewTodo";
import { addTodo, deleteTodo, getAllTodos } from "../lib/api";

const Todos = (props) => {
  const [allTodos, setAllTodos] = useState([]);

  const getTodos = async () => {
    const foundTodos = await getAllTodos();
    setAllTodos(foundTodos);
    console.log("getAllTodos");
    return null;
  };

  useEffect(async () => {
    getTodos();
  }, []);

  const addTodoHandler = async (todoText, todoDate) => {
    await addTodo(todoText, todoDate);
    getTodos();
  };

  const deleteTodoHandler = async (todoId) => {
    await deleteTodo(todoId);
    getTodos();
  };

  return (
    <Fragment>
      <h1 className={classes.title}>Todo List!</h1>
      <NewTodo addTodo={addTodoHandler} />
      <TodosList allTodos={allTodos} onDeleteTodo={deleteTodoHandler} />
    </Fragment>
  );
};

export default Todos;
