import { useState } from "react";

export async function getDietPlan(date) {
  const response = await fetch(
    `https://todos-project-a5fb8-default-rtdb.firebaseio.com/diet/${date}.json`
  );
  const data = await response.json();

  if (!response.ok) {
    console.log("get diet plan error");
    return;
  }

  const transformedDiet = [];

  for (const key in data) {
    const dietObj = {
      id: key,
      date: date,
      ...data[key],
    };
    transformedDiet.push(dietObj);
  }

  return transformedDiet;
}

export async function getAllTodos(isOrdered) {
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

export async function addDietPlan(inputDate, inputType, inputMeal) {
  const newDiet = {};
  newDiet["type"] = inputType;
  newDiet["meal"] = inputMeal;
  console.log(newDiet);
  const response = await fetch(
    `https://todos-project-a5fb8-default-rtdb.firebaseio.com/diet/${inputDate}.json`,
    {
      method: "POST",
      body: JSON.stringify(newDiet),
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.log("add diet plan error");
    return;
  }

  console.log(newDiet);
  return;
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
  const response = await fetch(
    `https://todos-project-a5fb8-default-rtdb.firebaseio.com/todos/${todoId}.json`,
    { method: "DELETE" }
  );

  if (!response.ok) {
    console.log("delete todo error");
    return;
  }

  return;
}
