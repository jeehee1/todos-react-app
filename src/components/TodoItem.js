import classes from './TodoItem.module.css'

const TodoItem = (props) => {
  return (
    <li className={classes.list} key={props.todoItem.id}>
      <p> {props.todoItem.text} - {props.todoItem.date}</p>
    </li>
  );
};

export default TodoItem;
