import { useEffect, useState } from "react";
import AddTaskForm from "./AddTaskForm";
import { useParams } from "react-router-dom";
import TaskItem from "./TaskItem";
import Button from "./Button";
import ShareModal from "./ShareModal";

function TaskList() {
  const [list, setList] = useState();
  const [tasks, setTasks] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://todolist-api-my16.onrender.com/lists/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        setTasks(data.tasks);
      });
  }, [id]);

  if (!list) {
    return <p>Loading...</p>;
  }

  function renderTask() {
    return tasks.map((task) => {
      return (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      );
    });
  }

  function handleCreateTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDelete(id) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  }

  function handleToggle(id, completed) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: completed };
        } else {
          return task;
        }
      })
    );
  }
  function handleShare() {
    setIsModalOpen(true);
  }
  function handleClose() {
    setIsModalOpen(false);
  }
  return (
    <div className="task-list">
      <button className="task-list__share-button" onClick={handleShare}>
        <i className=" task-list__share-icon fa-solid fa-share-nodes"></i>
        Compartir
      </button>
      <h1 className="task-list__title">{list.name}</h1>
      <AddTaskForm listId={id} onCreateTask={handleCreateTask} />
      {renderTask()}
      {isModalOpen ? <ShareModal onclose={handleClose} /> : null}
    </div>
  );
}

export default TaskList;