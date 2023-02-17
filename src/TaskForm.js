import React, { useEffect, useRef, useState } from "react";

function TaskForm({ addTask }) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  function handleSubmit(e, task) {
    e.preventDefault();

    task = {
      id: Math.floor(Math.random() * 10000),
      text: input,
    };

    setInput("");
    addTask(task);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        onChange={handleChange}
        value={input}
        placeholder="Add to the list"
        ref={inputRef}
        className="todo-input"
        required
      ></input>
      <button className="todo-button">Add task</button>
    </form>
  );
}

export default TaskForm;
