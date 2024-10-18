import { useEffect, useState } from "react";

function AddTaskForm({ listId, onCreateTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(), { ...text };

    fetch(`https://todolist-api-my16.onrender.com/lists/${listId}/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        task: {
          text: text,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setText("");
        onCreateTask(data);
      });
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="addTask">
      <form className="addTask__form" onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor="task">
          Task
        </label>
        <input
          required
          className="addTask__input"
          type="text"
          name="task"
          id="task"
          placeholder="Buy milk..."
          onChange={handleChange}
          value={text}
        />
        <button className="addTask__button">
          <i className="addTask__icon fa-solid fa-plus"></i>
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTaskForm;
