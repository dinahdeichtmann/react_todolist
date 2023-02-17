import { useState } from "react";

import Form from "./Form";
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
    return tasks;
  }

  return (
    <>
      <h1>What's on your to do list today?</h1>
      <Form onSubmit={addTask} />
    </>
  );
}

export default App;
