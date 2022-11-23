export async function getAllTodos() {
  const response = await fetch(
    "https://todos-project-a5fb8-default-rtdb.firebaseio.com/todos.json"
  );
  const data = await response.json();

  if (!response.ok) {
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
