import { useState } from "react";
import { useEffect } from "react";

function Lists() {
  const [listItems, setListItems] = useState([]);

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
        <div key={listItem.id} className="list__item">
          {listItem.name}
        </div>
      );
    });
  }

  return (
    <>
      <div className="list">{renderlistItems()}</div>
    </>
  );
}

export default Lists;
