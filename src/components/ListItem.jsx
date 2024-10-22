import { useEffect, useRef, useState, useContext } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import ShareContext from "../context/ShareContext";

function ListItem({ listItem, onDelete, onClick, isActive }) {
  const { handleShare } = useContext(ShareContext);
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  function handleOpenMenu(event) {
    event.preventDefault();
    setMenuPosition({ x: event.pageX, y: event.pageY });
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
  function handleClickAdd() {
    setIsOpen(true);
  }

  return (
    <div className={`list__item ${isActive ? "list__item--active" : ""}`}>
      <Link
        className="list__item__link"
        key={listItem.id}
        to={`/list/${listItem.id}`}
        onClick={onClick}
      >
        <i className="fa-solid fa-list list__icon"></i>
        {listItem.name}
      </Link>

      <button ref={menuRef} className="list__ellipsis" onClick={handleOpenMenu}>
        <i className="fa-solid fa-ellipsis"></i>
      </button>

      {isOpen
        ? createPortal(
            <div
              className="list__menu"
              style={{ top: menuPosition.y, left: menuPosition.x }}
            >
              <button className="list__menu__button">
                <i className=" fa-solid fa-pencil"></i>
                <span className="list__menu__word"> Rename</span>
              </button>
              <button onClick={handleShare} className="list__menu__button">
                <i className="fa-solid fa-share-nodes"></i>
                <span className="list__menu__word"> Share</span>
              </button>
              <button onClick={handleDeleteIcon} className="list__menu__button">
                <i className="list_menu__image fa-regular fa-trash-can"></i>
                <span className="list__menu__word"> Delete</span>
              </button>
            </div>,
            window.document.body
          )
        : null}
    </div>
  );
}

export default ListItem;
