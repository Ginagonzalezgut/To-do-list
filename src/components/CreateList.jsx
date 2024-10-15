import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function CreateList({ onCreateList }) {
  const [newList, setNewList] = useState({});
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
    <div>
      <h1>Create New List</h1>
      <form className="createList" onSubmit={handleSubmit}>
        <label htmlFor="createList">Name of the List:</label>
        <input
          className="createList__input"
          type="text"
          name="createList"
          id="createList"
          placeholder="Name of the list (e.g., Shopping, Work)"
          onChange={handleChange}
          value={newList.name}
        />
        <Button>
          <i className="fa-solid fa-plus"></i> Create list
        </Button>
      </form>
    </div>
  );
}

export default CreateList;
