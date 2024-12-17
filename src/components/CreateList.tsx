import { useState } from "react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

function CreateList({ onCreateList }) {
  const [newList, setNewList] = useState({ name: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
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
        navigate(`/app/list/${data.id}`);
      })
      .catch((error) => {
        console.error("Error creating list", error);
      })
      .finally(() => {
        setLoading(false);
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
          {loading ? (
            <button>Loading</button>
          ) : (
            <button disabled={loading} className="button create-list-button">
              <i className="fa-solid fa-plus"></i> Create list
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateList;
