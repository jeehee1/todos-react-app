import TodoItem from "./TodoItem";

const TodoList = (props) => {
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

export default TodoList;
