import { Route, Routes, useLocation } from "react-router-dom";
import "../scss/App.scss";
import Header from "./Header";
import TaskList from "./TaskList";
import EmptyState from "./EmptyState";
import CreateList from "./CreateList";
import { useEffect, useState } from "react";
import { ShareProvider } from "../context/ShareContext";
import LandingPage from "./LandingPage";

function App() {
  const [lists, setLists] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  function handleShare() {
    setIsModalOpen(true);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  const location = useLocation();

  // Verificamos si la ruta actual es la de la landing page
  const isLandingPage = location.pathname === "/landing";

  if (isLandingPage) {
    return <LandingPage />;
  }

  return (
    <ShareProvider value={{ isModalOpen, handleShare }}>
      <div className="app">
        <Header lists={lists} onDeleteList={handleDeleteList} />
        <main className="main">
          <Routes>
            <Route
              path="/create-list"
              element={<CreateList onCreateList={handleCreateList} />}
            />
            <Route
              path="/list/:id"
              element={
                <TaskList
                  onShare={handleShare}
                  onClose={handleClose}
                  isModalOpen={isModalOpen}
                />
              }
            />
            <Route path="/" element={<EmptyState lists={lists} />} />
          </Routes>
        </main>
      </div>
    </ShareProvider>
  );
}

export default App;
