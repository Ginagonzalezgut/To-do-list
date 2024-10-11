import { useState } from "react";
import { useEffect } from "react";
import { Form, Link } from "react-router-dom";

function Lists() {
  const [listItems, setListItems] = useState([]);
  const [newList, setNewList] = useState({ name: "" });

  useEffect(() => {
    fetch("https://todolist-api-my16.onrender.com/lists")
      .then((response) => response.json())
      .then((data) => {
        setListItems(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  function renderlistItems() {
    return listItems.map((listItem) => {
      return (
        <Link key={listItem.id} to={`/list/${listItem.id}`}>
          <div className="list__item">
            <i className="fa-solid fa-list list__icon"></i>
            {listItem.name}
          </div>
        </Link>
      );
    });
  }
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
        setListItems([...listItems, data]);
        setNewList({ name: "" });
      });
  };

  const NewListHandleChange = (event) => {
    setNewList({
      ...newList,
      name: event.target.value,
    });
  };

  return (
    <>
      <div className="list">
        {renderlistItems()}
        <form className="createList" onSubmit={handleSubmit}>
          <label className=" visually-hidden" htmlFor="createList"></label>
          <i className=" createList__icon fa-solid fa-plus"></i>
          <input
            className="createList__input"
            type="text"
            name="createList"
            id="createList"
            placeholder="New List"
            onChange={NewListHandleChange}
            value={newList.name}
          />
        </form>
      </div>
    </>
  );
}

export default Lists;
