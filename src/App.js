import { useState } from "react";

import TaskForm from "./Form";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    if (task.text.trim() === "") {
      return;
    }

    const taskList = [task, ...tasks];
    setTasks(taskList);

    console.log(tasks);
  }

  return (
    <>
      <h1>What's on your to do list today?</h1>
      <TaskForm addTask={addTask} />
    </>
  );
}

export default App;
