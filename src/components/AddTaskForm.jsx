function AddTaskForm() {
  return (
    <div className="addTask">
      <form className="addTask__form">
        <label className="visually-hidden" htmlFor="task">
          Task
        </label>
        <input
          className="addTask__input"
          type="text"
          name="task"
          id="task"
          placeholder="Buy milk..."
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
