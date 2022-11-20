import { useContext, useRef } from "react";
import { TodosContext } from "../context/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo = () => {
  const todosCtx = useContext(TodosContext);
  const enteredTodoText = useRef();
  const enteredTodoDate = useRef();

  const submitTodoHandler = (event) => {
    event.preventDefault();

    const newTodoText = enteredTodoText.current.value;
    const newTodoDate = enteredTodoDate.current.value;

    todosCtx.addTodo(newTodoDate, newTodoText);
  };

  return (
    <form onSubmit={submitTodoHandler} className={classes.form}>
      <label htmlFor="todoText">New Todo</label>
      <input
        className={classes.date}
        type="date"
        name="todoDate"
        ref={enteredTodoDate}
      />
      <input
        className={classes.text}
        type="text"
        id="todoText"
        name="todoText"
        ref={enteredTodoText}
      />
      <div className={classes.addbutton}>
        <button>Add Todo</button>
      </div>
    </form>
  );
};

export default NewTodo;
