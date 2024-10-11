import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function ListItem({ listItem, onDelete, onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  function handleOpenMenu(event) {
    event.preventDefault();
    setIsOpen(true);
  }
  function handleDeleteIcon() {
    fetch(`https://todolist-api-my16.onrender.com/lists/${listItem.id}`, {
      method: "DELETE",
    }).then(() => {
      onDelete(listItem.id);
    });
  }
  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <Link key={listItem.id} to={`/list/${listItem.id}`} onClick={onClick}>
      <div className="list__item">
        <div>
          <i className="fa-solid fa-list list__icon"></i>
          {listItem.name}
        </div>
        <button
          ref={menuRef}
          className="list__ellipsis"
          onClick={handleOpenMenu}
        >
          <i className="fa-solid fa-ellipsis"></i>
        </button>

        {isOpen ? (
          <div className="list__menu">
            <button className="list__menu__icons">
              <i className=" fa-solid fa-pencil"></i>
              <span className="list__menu__word"> Rename</span>
            </button>
            <button onClick={handleDeleteIcon} className="list__menu__icons">
              <i className="list_menu__image fa-regular fa-trash-can"></i>
              <span className="list__menu__word"> Delete</span>
            </button>
          </div>
        ) : null}
      </div>
    </Link>
  );
}

export default ListItem;
