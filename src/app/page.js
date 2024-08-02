"use client";
import React from "react";

import Header from "@/components/Header";
import Prompt from "@/components/Prompt";
import TaskList from "@/components/TaskList";
import ProgressBar from "@/components/ProgressBar";

function Home() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const storedTodo = localStorage.getItem("todos");
    if (storedTodo) {
      setTodos(JSON.parse(storedTodo));
    }
  }, []);
  const todoCompleted = todos.filter(
    (todo) => todo.isCompleted === true
  ).length;
  const totalTodo = todos.length;
  return (
    <div className="wrapper">
      <Header />
      <ProgressBar completedTask={todoCompleted} totalTask={totalTodo} />
      <Prompt todos={todos} setTodos={setTodos} />
      <TaskList tasks={todos} setTodos={setTodos} />
    </div>
  );
}

export default Home;
