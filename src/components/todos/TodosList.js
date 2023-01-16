import TodoItem from "./TodoItem";
import classes from "./TodosList.module.css";

const TodosList = (props) => {
  const orderedButton = props.isOrderedRecently ? (
    <button className={classes.button} onClick={props.onOrderByDate}>
      Order by registered date
    </button>
  ) : (
    <button className={classes.button} onClick={props.onOrderRecently}>
      Order by recent date
    </button>
  );

  return (
    <div className={classes.list}>
      {orderedButton}
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
