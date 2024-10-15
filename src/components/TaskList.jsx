import { useEffect, useState } from "react";
import AddTaskForm from "./AddTaskForm";
import { useParams } from "react-router-dom";
import TaskItem from "./TaskItem";

function TaskList() {
  const [list, setList] = useState();
  const [tasks, setTasks] = useState();

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

  return (
    <div className="task-list">
      <h1 className="task-list__title">{list.name}</h1>
      <AddTaskForm listId={id} onCreateTask={handleCreateTask} />
      {renderTask()}
    </div>
  );
}

export default TaskList;
