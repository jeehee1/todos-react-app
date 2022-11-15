import React from "react";
import Todos from "./components/Todos";
import TodosList from "./components/TodosList";

function App() {
  const DUMMY_TODOS = [
    { id: "t1", date: "2022-11-30", text: "First todo" },
    { id: "t2", date: "2022-11-30", text: "Second todo" },
    { id: "t3", date: "2022-11-29", text: "Third todo" },
  ];

  return (
    <div>
      <h1>Todo List!</h1>
      <Todos todos={DUMMY_TODOS}/>
    </div>
  );
}

export default App;
