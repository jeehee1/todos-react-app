import { useContext } from "react";
import { TodosContext } from "../context/todos-context";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  return (
    <li className={classes.list} key={props.todoItem.id} onClick={props.onRemoveTodo}>
      {props.todoItem.text} - {props.todoItem.date}
    </li>
  );
};

export default TodoItem;
