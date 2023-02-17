import React, { useState } from "react";
import TaskForm from "./TaskForm";

function TaskList({ tasks, completeTask, editTask, deleteTask }) {
  const [edit, setEdit] = useState({
    newId: null,
    newText: "",
  });

  function submitEdit(value) {
    editTask(edit.newId, value);
    setEdit({
      newId: null,
      newText: "",
    });
  }

  if (edit.newId) {
    return <TaskForm edit={edit} onSubmit={submitEdit} />;
  }

  return tasks.map((task, index) => (
    <li
      key={index}
      className={task.completed ? "todo-row complete" : "todo-row"}
    >
      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.text}
      </div>
      <span className="icons">
        <button onClick={() => deleteTask(task.id)} className="delete-icon">
          Delete
        </button>
        <button
          onClick={() => setEdit({ newId: task.id, newText: task.text })}
          className="edit-icon"
        >
          Edit
        </button>
      </span>
    </li>
  ));
}

export default TaskList;
