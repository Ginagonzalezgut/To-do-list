function TaskItem({ task, onDelete, onToggle }) {
  function handleToggleTask() {
    fetch(
      `https://todolist-api-my16.onrender.com/lists/${task.list_id}/tasks/${task.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: { completed: !task.completed },
        }),
      }
    )
      .then((response) => response.json())
      .then(() => {
        onToggle(task.id, !task.completed);
      });
  }

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
      <button onClick={handleToggleTask} className="task__button "></button>
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
