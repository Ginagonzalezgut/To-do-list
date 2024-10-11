import { Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import Header from "./Header";
import TaskList from "./TaskList";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/list/:id" element={<TaskList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
