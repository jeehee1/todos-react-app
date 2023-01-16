import { useRef } from "react";
import classes from "./NewTodo.module.css";
import { addTodo } from "../../lib/todosApi";

const NewTodo = (props) => {
  const enteredTodoText = useRef();
  const enteredTodoDate = useRef();

  const submitTodoHandler = (event) => {
    event.preventDefault();

    const newTodoText = enteredTodoText.current.value;
    const newTodoDate = enteredTodoDate.current.value;

    props.addTodo(newTodoText, newTodoDate);
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
