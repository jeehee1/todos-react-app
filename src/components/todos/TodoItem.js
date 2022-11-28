import { useContext, useState } from "react";
import { deleteTodo } from "../../lib/api";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [] = useState()

  const todoId = props.todoItem.id

  const deleteTodoHandler = () => {
    props.onDelete(todoId)
  }

  return (
    <li className={classes.list} onClick={deleteTodoHandler}>
      {props.todoItem.text} - {props.todoItem.date}
    </li>
  );
};

export default TodoItem;
