import { Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import Header from "./Header";
import TaskList from "./TaskList";
import EmptyState from "./EmptyState";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/list/:id" element={<TaskList />} />
          <Route path="/" element={<EmptyState />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
