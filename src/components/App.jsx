import "../scss/App.scss";

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">To Do</h1>
        <label htmlFor="search" className="header__search">
          <i className=" header__icon fa-solid fa-magnifying-glass"></i>

          <input
            aria-label="Search"
            className="header__input"
            type="text"
            name="search"
            id="search"
            placeholder="Search"
          />
        </label>
        <div></div>
      </header>
      <h1 className="title">My Things To Do </h1>

      <div className="addTask">
        <form className="addTask__form">
          <label className="visually-hidden" htmlFor="task">
            Task
          </label>
          <input
            className="addTask__input"
            type="text"
            name="task"
            id="task"
            placeholder="Buy milk..."
          />
          <button className="addTask__button">
            <i className="addTask__icon fa-solid fa-plus"></i>
            Add Task
          </button>
        </form>
      </div>

      <div className="task-list">
        <div className="task">
          <button className="task__button"></button>
          <span className="task__title">Ir de compras</span>
          <button className="task__icon">
            <i className="task__icon fa-solid fa-trash-can"></i>
          </button>
        </div>

        <div className="task">
          <button className="task__button"></button>
          <span className="task__title">Hacer ejercicio</span>
          <button className="task__star">
            <i className="fa-regular fa-star"></i>
          </button>
          <button className="task__star">
            <i className="fa-solid fa-star"></i>
          </button>
          <button className="task__icon">
            <i className=" fa-solid fa-trash-can"></i>
          </button>
        </div>

        {/* <div className="tasks-info">
            <div className="tasks-info__count">
              Completed <span className="tasks-info__number">22</span>
            </div>
            <div className="tasks-info__count">
              To do <span className="tasks-info__number">45</span>
            </div>
          </div> */}
      </div>
    </>
  );
}

export default App;
