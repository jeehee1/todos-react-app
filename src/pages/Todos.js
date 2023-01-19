import TodosList from "../components/todos/TodosList";
import { Fragment, useCallback, useEffect, useState } from "react";
import NewTodo from "../components/todos/NewTodo";
import { addTodo, deleteTodo, getAllTodos } from "../lib/todosApi";
import useHttp from "../hooks/http";

const orderedTodos = (todos, isOrdered) => {
  return isOrdered
    ? todos.concat().sort((todoA, todoB) => {
        return todoA.date > todoB.date ? 1 : -1;
      })
    : todos;
};

const Todos = (props) => {
  const [allTodos, setAllTodos] = useState([]);
  const [orderedRecently, setOrderedRecently] = useState(false);
  const { error, loading, data, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(
      "https://todos-project-a5fb8-default-rtdb.firebaseio.com/todos.json"
    );
  }, [sendRequest]);

  useEffect(() => {
    if (data) {
      const transformedTodos = [];
      for (const key in data) {
        const todoObj = {
          id: key,
          ...data[key],
        };
        transformedTodos.push(todoObj);
      }
      setAllTodos(transformedTodos);
    }
  }, [data]);

  const orderedAllTodos = orderedTodos(allTodos, orderedRecently);

  const orderRecentlyHandler = () => {
    setOrderedRecently(true);
  };

  const orderByDateHandler = () => {
    setOrderedRecently(false);
  };

  const addTodoHandler = async (newTodo) => {
    sendRequest(
      "https://todos-project-a5fb8-default-rtdb.firebaseio.com/todos.json",
      "POST",
      JSON.stringify(newTodo)
    );

    setAllTodos([...allTodos, { id: data.name, ...newTodo }]);
    console.log("add newTodos");
    console.log(data);
    console.log(allTodos);
  };

  const deleteTodoHandler = async (todoId) => {
    await deleteTodo(todoId);
  };

  return (
    <Fragment>
      <NewTodo addTodo={addTodoHandler} />
      {!loading && (
        <TodosList
          allTodos={allTodos}
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
