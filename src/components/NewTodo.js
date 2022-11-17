import { useContext, useRef } from "react";
import { TodosContext } from "../context/todos-context";

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
    <form onSubmit={submitTodoHandler}>
      <label htmlFor="todoText">New Todo</label>
      <input type="date" name="todoDate" ref={enteredTodoDate} />
      <input type="text" id="todoText" name="todoText" ref={enteredTodoText} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
