import { useState } from "react";
import Lists from "./Lists";

function Header() {
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmitSearch = (event) => {
    event.preventDefault();
  };

  function handleSearchList(event) {
    setSearchText(event.target.value);
  }

  function handleOpenMenu() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function handleClickItem() {
    setIsOpen(false);
  }

  return (
    <>
      <button className="header__menu-trigger" onClick={handleOpenMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <header className={`header ${isOpen ? "open" : "closed"}`}>
        <form action="header__form" onSubmit={handleSubmitSearch}>
          <label htmlFor="search" className="header__search">
            <i className=" header__icon fa-solid fa-magnifying-glass"></i>

            <input
              onChange={handleSearchList}
              aria-label="Search"
              className="header__input"
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              value={searchText}
            />
          </label>
        </form>

        <Lists searchText={searchText} onClick={handleClickItem} />
      </header>
    </>
  );
}

export default Header;
