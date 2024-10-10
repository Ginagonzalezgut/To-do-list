import AddTaskForm from "./AddTaskForm";
import Task from "./Task";

function TaskList() {
  return (
    <div className="task-list">
      <h1 className="task-list__title">My Things To Do</h1>
      <AddTaskForm />
      {[{ text: "Hacer ejercicio" }, { text: "Comer sano" }].map(
        (task, index) => (
          <Task task={task} key={index} />
        )
      )}
    </div>
  );
}

export default TaskList;
