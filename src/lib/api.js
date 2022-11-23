export async function getAllTodos() {
  const response = await fetch(
    "https://todos-project-a5fb8-default-rtdb.firebaseio.com/todos.json"
  );
  const data = await response.json();

  if (!response.ok) {
    console.log("get all todos error");
    return;
  }

  const allTodos = [];

  for (const key in data) {
    const todoObj = {
      id: key,
      ...data[key],
    };
    allTodos.push(todoObj);
  }
  return allTodos;
}

export async function addTodo(todoText, todoDate) {
  let status = false;
  const todoData = { text: todoText, date: todoDate };
  console.log(todoData);

  const response = await fetch(
    "https://todos-project-a5fb8-default-rtdb.firebaseio.com/todos.json",
    {
      method: "POST",
      body: JSON.stringify(todoData),
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    console.log("add todo error");
    return;
  }
  console.log(data);

  status = true;
  return status;
}
