import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../context/todos-context";
import { deleteTodo, getAllTodos } from "../lib/api";
import TodoItem from "./TodoItem";
import classes from "./TodosList.module.css";

const TodosList = (props) => {

  return (
    <div className={classes}>
      <ul>
        {props.allTodos.map((todo) => (
          <TodoItem
            todoItem={todo}
            key={todo.id}
            onDelete={props.onDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
