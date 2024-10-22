import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function CreateList({ onCreateList }) {
  const [newList, setNewList] = useState({ name: "" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://todolist-api-my16.onrender.com/lists", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newList),
    })
      .then((response) => response.json())
      .then((data) => {
        onCreateList(data);
        navigate(`/list/${data.id}`);
      });
  };

  function handleChange(event) {
    setNewList({
      ...newList,
      name: event.target.value,
    });
  }

  return (
    <div className="create-new-list-container">
      <div className="create-list-background">
        <h1 className="create-new-list-title">Create New List</h1>
        <form className="create-list-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="createList" className="form-label">
              Name of the List:
            </label>
            <input
              autoFocus
              required
              className="create-list-input"
              type="text"
              name="createList"
              id="createList"
              placeholder=" Shopping, Vacations...)"
              onChange={handleChange}
              value={newList.name}
            />
          </div>
          <Button className="create-list-button">
            <i className="fa-solid fa-plus"></i> Create list
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateList;
