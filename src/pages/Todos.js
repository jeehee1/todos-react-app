import TodosList from "../components/todos/TodosList";
import { Fragment, useCallback, useEffect, useState } from "react";
import NewTodo from "../components/todos/NewTodo";
import { addTodo, deleteTodo, getAllTodos } from "../lib/todosApi";
import useHttp from "../hooks/http";
import { useReducer } from "react";

const orderedTodos = (todos, isOrdered) => {
  return isOrdered
    ? todos.concat().sort((todoA, todoB) => {
        return todoA.date > todoB.date ? 1 : -1;
      })
    : todos;
};

const todoReducer = (currentTodos, action) => {
  switch (action.type) {
    case "SET":
      return action.todos;
    case "ADD":
      return [...currentTodos, action.newTodo];
    default:
      throw new Error("Something went wrong!");
  }
};

const Todos = (props) => {
  const [allTodos, setAllTodos] = useState([]);
  const [orderedRecently, setOrderedRecently] = useState(false);
  const { error, loading, data, sendRequest, extra, identifier } = useHttp();
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    sendRequest(
      "https://todos-project-a5fb8-default-rtdb.firebaseio.com/todos.json",
      "GET",
      null,
      null,
      "SET_TODOS"
    );
  }, [sendRequest]);

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
    } else if (!loading && !error && data && identifier === "ADD_TODO") {
      dispatch({ type: "ADD", newTodo: { id: data.name, ...extra } });
    }
  }, [loading, error, data]);

  const orderedAllTodos = orderedTodos(allTodos, orderedRecently);

  const orderRecentlyHandler = () => {
    setOrderedRecently(true);
  };

  const orderByDateHandler = () => {
    setOrderedRecently(false);
  };

  const addTodoHandler = useCallback(
    async (newTodo) => {
      await sendRequest(
        "https://todos-project-a5fb8-default-rtdb.firebaseio.com/todos.json",
        "POST",
        JSON.stringify(newTodo),
        newTodo,
        "ADD_TODO"
      );
    },
    [sendRequest]
  );

  const deleteTodoHandler = async (todoId) => {
    await deleteTodo(todoId);
  };

  return (
    <Fragment>
      <NewTodo addTodo={addTodoHandler} />
      {loading && <p>Loading...</p>}
      {!loading && (
        <TodosList
          allTodos={todos}
          onDeleteTodo={deleteTodoHandler}
          onOrderRecently={orderRecentlyHandler}
          onOrderByDate={orderByDateHandler}
          isOrderedRecently={orderedRecently}
        />
      )}
    </Fragment>
  );
};

export default Todos;
