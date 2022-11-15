const TodoItem = (props) => {
  return (
    <li key={props.todoItem.id}>
      {props.todoItem.text} - {props.todoItem.date}
    </li>
  );
};

export default TodoItem;
