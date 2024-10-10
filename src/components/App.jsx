import "../scss/App.scss";
import Header from "./Header";
import TaskList from "./TaskList";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <TaskList />
      </main>
    </div>
  );
}

export default App;
