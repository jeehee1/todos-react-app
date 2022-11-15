import { useContext } from "react";
import { TodosContext } from "../context/todos-context";
import TodoItem from "./TodoItem";
import classes from "./TodosList.module.css";

const TodosList = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <div className={classes}>
      <ul>
        {todosCtx.todos.map((todo) => (
          <TodoItem todoItem={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
