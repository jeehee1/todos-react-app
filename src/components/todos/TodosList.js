import { useEffect } from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import classes from "./TodosList.module.css";

const orderTodos = (todos, recentlyOrdered) => {
  return recentlyOrdered
    ? todos.concat().sort((todoA, todoB) => {
        return todoA.date > todoB.date ? 1 : -1;
      })
    : todos;
};

const TodosList = (props) => {
  const [orderedRecently, setOrderedRecently] = useState(true);
  const [orderedTodos, setOrderedTodos] = useState([]);

  useEffect(() => {
    setOrderedTodos(orderTodos(props.allTodos, orderedRecently));
  }, [props.allTodos, orderedRecently]);
  const orderRecently = () => {
    setOrderedRecently(true);
  };
  const orderByDate = () => {
    setOrderedRecently(false);
  };
  const orderedButton = orderedRecently ? (
    <button className={classes.button} onClick={orderByDate}>
      Order by registered date
    </button>
  ) : (
    <button className={classes.button} onClick={orderRecently}>
      Order by recent date
    </button>
  );

  return (
    <div className={classes.list}>
      {orderedButton}
      <ul>
        {orderedTodos.map((todo) => (
          <TodoItem
            todoItem={todo}
            key={todo.id}
            deleteTodo={props.onDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
