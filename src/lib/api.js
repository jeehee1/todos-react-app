import { useState } from "react";

export async function getAllTodos() {
  const response = await fetch(
    "https://todos-project-a5fb8-default-rtdb.firebaseio.com/todos.json"
  );
  const data = await response.json();

  if (!response.ok) {
    console.log("get all todos error");
    return;
  }

  const transforedTodos = [];

  for (const key in data) {
    const todoObj = {
      id: key,
      ...data[key],
    };
    transforedTodos.push(todoObj);
  }

  return transforedTodos;
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

export async function deleteTodo(todoId) {
  const respone = await fetch(
    `https://todos-project-a5fb8-default-rtdb.firebaseio.com/todos/${todoId}.json`,
    { method: "DELETE" }
  );

  if (!respone.ok) {
    console.log("delete todo error");
    return;
  }

  return;
}