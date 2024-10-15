import { Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import Header from "./Header";
import TaskList from "./TaskList";
import EmptyState from "./EmptyState";
import CreateList from "./CreateList";
import { useEffect, useState } from "react";

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("https://todolist-api-my16.onrender.com/lists")
      .then((response) => response.json())
      .then((data) => {
        setLists(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  function handleDeleteList(id) {
    const deletedItems = lists.filter((listItem) => {
      return listItem.id !== id;
    });
    setLists(deletedItems);
  }

  function handleCreateList(list) {
    setLists([...lists, list]);
  }

  return (
    <div className="app">
      <Header lists={lists} onDeleteList={handleDeleteList} />
      <main className="main">
        <Routes>
          <Route
            path="/create-list"
            element={<CreateList onCreateList={handleCreateList} />}
          />
          <Route path="/list/:id" element={<TaskList />} />
          <Route path="/" element={<EmptyState />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
