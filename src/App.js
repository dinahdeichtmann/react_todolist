import { useState } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    if (task.text.trim() === "") {
      return;
    }

    const taskList = [task, ...tasks];
    setTasks(taskList);

    console.log("APP: task list", taskList);
  }

  function completeTask(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTasks(updatedTasks);
    console.log("APP: updated tasks", updatedTasks);
  }

  function deleteTask(id) {
    const keptTasks = tasks.filter((task) => task.id !== id);
    setTasks(keptTasks);
    console.log("APP: kept tasks", keptTasks);
  }

  return (
    <>
      <h1>What's on your to do list today?</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
