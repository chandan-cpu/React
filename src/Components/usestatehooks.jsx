import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState(""); // For input value (string)
  const [items, setItems] = useState([]); // For the list of tasks (array)

  const addTask = () => {
    if (task.trim() === "") return; // avoid empty task
    setItems([...items, task]); // add new task to the list
    setTask(""); // clear input field
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📝 My To-Do List</h2>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />
      <button onClick={addTask} style={{ padding: "8px", width: "100%" }}>
        Add Task
      </button>

      <ul style={{ marginTop: "20px" }}>
        {items.map((item, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            ✅ {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
