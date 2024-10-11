import AddTaskForm from "./AddTaskForm";
import { useParams } from "react-router-dom";

function TaskList() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="task-list">
      <h1 className="task-list__title">My Things To Do</h1>
      <AddTaskForm />
    </div>
  );
}

export default TaskList;
