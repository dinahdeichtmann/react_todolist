import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState("");

  function handleSubmit(e, task) {
    e.preventDefault();

    task = {
      id: Math.floor(Math.random * 10000),
      text: input,
    };

    setInput("");

    return task;
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={input}
        placeholder="Add to the list"
        required
      ></input>
      <button>Add task</button>
    </form>
  );
}

export default Form;
