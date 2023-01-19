import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const todoId = props.todoItem.id;
  const deleteTodoHandler = async () => {
    props.deleteTodo(todoId);
  };

  return (
    <li className={classes.list} onClick={deleteTodoHandler}>
      {props.todoItem.text} - {props.todoItem.date}
    </li>
  );
};

export default TodoItem;
