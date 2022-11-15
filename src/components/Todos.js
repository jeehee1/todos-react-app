import TodosList from "./TodosList";
import classes from "./Todos.module.css";
import { Fragment } from "react";

const Todos = (props) => {
  return (
    <Fragment>
      <h1 className={classes.title}>Todo List!</h1>
      <TodosList />
    </Fragment>
  );
};

export default Todos;
