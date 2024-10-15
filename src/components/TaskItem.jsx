function TaskItem({ task, onDelete }) {
  function handleDelete() {
    fetch(
      `https://todolist-api-my16.onrender.com/lists/${task.list_id}/tasks/${task.id}`,
      {
        method: "DELETE",
      }
    ).then(() => {
      onDelete(task.id);
    });
  }

  return (
    <div className="task">
      <button className="task__button "></button>
      <span
        className={`task__title ${task.completed ? "task__completed" : ""}`}
      >
        {task.text}
      </span>
      <button className="task__delete" onClick={handleDelete}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </div>
  );
}

export default TaskItem;
