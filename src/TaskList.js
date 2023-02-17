import React, { useState } from "react";

function TaskList({ tasks, completeTask, deleteTask }) {
  const [edit, setEdit] = useState({
    id: null,
    edit: "",
  });

  return tasks.map((task, index) => (
    <li key={index}>
      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.text}
      </div>
      <span onClick={() => deleteTask(task.id)}>Delete</span>
      <span onClick={() => setEdit({ id: task.id, edit: task.text })}>
        Edit
      </span>
    </li>
  ));
}

export default TaskList;
