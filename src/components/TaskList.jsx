import { useEffect, useState } from "react";
import AddTaskForm from "./AddTaskForm";
import { useParams } from "react-router-dom";

function TaskList() {
  const [list, setList] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://todolist-api-my16.onrender.com/lists/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      });
  }, [id]);

  if (!list) {
    return <p>Loading...</p>;
  }

  return (
    <div className="task-list">
      <h1 className="task-list__title">{list.name}</h1>
      <AddTaskForm />
    </div>
  );
}

export default TaskList;
