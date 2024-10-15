import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ListItem from "./ListItem";

function Lists({ searchText, onClick }) {
  const [listItems, setListItems] = useState([]);
  const [newList, setNewList] = useState({ name: "" });
  const location = useLocation();
  const id = location.pathname.split("/list/")[1];

  console.log(id);

  useEffect(() => {
    fetch("https://todolist-api-my16.onrender.com/lists")
      .then((response) => response.json())
      .then((data) => {
        setListItems(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  function handleDelete(id) {
    const deletedItems = listItems.filter((listItem) => {
      return listItem.id !== id;
    });
    setListItems(deletedItems);
  }

  function renderlistItems() {
    return listItems
      .filter((listitem) => {
        return listitem.name.toLowerCase().includes(searchText.toLowerCase());
      })
      .map((listItem) => {
        const isActive = listItem.id === parseInt(id);
        console.log(listItem.id, "===", id);
        return (
          <ListItem
            listItem={listItem}
            key={listItem.id}
            onDelete={handleDelete}
            onClick={onClick}
            isActive={isActive}
          />
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
