import TodosList from "../components/todos/TodosList";
import { Fragment, useCallback, useEffect, useState } from "react";
import NewTodo from "../components/todos/NewTodo";
import { addTodo, deleteTodo, getAllTodos } from "../lib/todosApi";
import useHttp from "../hooks/http";
import { useReducer } from "react";
import { getUserInfo } from "../lib/users";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const todoReducer = (currentTodos, action) => {
  switch (action.type) {
    case "SET":
      return action.todos;
    case "ADD":
      return [...currentTodos, action.newTodo];
    case "REMOVE":
      return currentTodos.filter((todo) => todo.id !== action.id);
    default:
      throw new Error("Something went wrong!");
  }
};

const Todos = (props) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const { error, loading, data, sendRequest, extra, identifier } = useHttp();
  const [todos, dispatch] = useReducer(todoReducer, []);

  const user = authCtx.user;

  useEffect(() => {
    if (!loading && !error && data && identifier === "SET_TODOS") {
      const transformedTodos = [];
      for (const key in data) {
        const todoObj = {
          id: key,
          ...data[key],
        };
        transformedTodos.push(todoObj);
      }
      dispatch({ type: "SET", todos: transformedTodos });
    }
    if (!loading && !error && identifier === "ADD_TODO") {
      console.log(extra);
      dispatch({ type: "ADD", newTodo: { id: data.name, ...extra } });
    }
    if (!loading && !error && identifier === "REMOVE_TODO") {
      dispatch({ type: "REMOVE", id: extra });
    }
  }, [loading, error, identifier]);

  useEffect(async () => {
    if (user) {
      sendRequest(
        `https://todos-project-a5fb8-default-rtdb.firebaseio.com/todos/${user}.json`,
        "GET",
        null,
        null,
        "SET_TODOS"
      );
    } else {
      return navigate("/auth");
    }
  }, [localStorage]);

  const addTodoHandler = useCallback(
    (newTodo) => {
      sendRequest(
        `https://todos-project-a5fb8-default-rtdb.firebaseio.com/todos/${user}.json`,
        "POST",
        JSON.stringify(newTodo),
        newTodo,
        "ADD_TODO"
      );
    },
    [sendRequest]
  );

  const deleteTodoHandler = useCallback(
    (todoId) => {
      sendRequest(
        `https://todos-project-a5fb8-default-rtdb.firebaseio.com/todos/${user}/${todoId}.json`,
        "DELETE",
        null,
        todoId,
        "REMOVE_TODO"
      );
    },
    [sendRequest]
  );

  return (
    <Fragment>
      <NewTodo addTodo={addTodoHandler} />
      {loading && <p>Loading...</p>}
      {!loading && (
        <TodosList allTodos={todos} onDeleteTodo={deleteTodoHandler} />
      )}
    </Fragment>
  );
};

export default Todos;
