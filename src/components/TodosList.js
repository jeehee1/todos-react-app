import TodoItem from "./TodoItem";

const TodosList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem todoItem={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
