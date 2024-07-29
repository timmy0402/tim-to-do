"use client";
import React from "react";
import Header from "@/components/Header";
import Prompt from "@/components/Prompt";
import TaskList from "@/components/TaskList";
import ProgressBar from "@/components/ProgressBar";

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <ProgressBar completedTask={0} totalTask={0} />
      <Prompt />
      <TaskList tasks={[]} />
    </div>
  );
}

export default Home;
