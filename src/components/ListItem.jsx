import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function ListItem({ listItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  function handleOpenMenu() {
    setIsOpen(true);
  }

  useEffect(() => {
    document.addEventListener("click", () => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <Link key={listItem.id} to={`/list/${listItem.id}`}>
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
            <button className="list__menu__icons">
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
