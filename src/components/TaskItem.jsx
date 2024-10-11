function TaskItem({ task }) {
  return (
    <div className="task">
      <button className="task__button"></button>
      <span className="task__title">{task.text}</span>
      <button className="task__star">
        <i className="fa-solid fa-ellipsis"></i>
      </button>
    </div>
  );
}

export default TaskItem;
