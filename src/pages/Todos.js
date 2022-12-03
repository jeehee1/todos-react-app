import TodosList from "../components/todos/TodosList";
import { Fragment, useCallback, useEffect, useState } from "react";
import NewTodo from "../components/todos/NewTodo";
import { addTodo, deleteTodo, getAllTodos } from "../lib/api";

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

  const getTodos = useCallback(async () => {
    const foundTodos = await getAllTodos();
    setAllTodos(foundTodos);
    console.log("getAllTodos");
    return null;
  }, [setAllTodos]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const orderedAllTodos = orderedTodos(allTodos, orderedRecently);

  const orderRecentlyHandler = () => {
    setOrderedRecently(true);
  };

  const orderByDateHandler = () => {
    setOrderedRecently(false);
  };

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
      <h1>Todo List!</h1>
      <NewTodo addTodo={addTodoHandler} />
      <TodosList
        allTodos={orderedAllTodos}
        onDeleteTodo={deleteTodoHandler}
        onOrderRecently={orderRecentlyHandler}
        onOrderByDate={orderByDateHandler}
        isOrderedRecently={orderedRecently}
      />
    </Fragment>
  );
};

export default Todos;
