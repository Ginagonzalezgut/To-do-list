import { useState } from "react";

function AddTaskForm() {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
          className="addTask__input"
          type="text"
          name="task"
          id="task"
          placeholder="Buy milk..."
          onChange={handleChange}
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
