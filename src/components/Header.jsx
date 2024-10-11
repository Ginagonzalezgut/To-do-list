import { useState } from "react";
import Lists from "./Lists";

function Header() {
  const [searchText, setSearchText] = useState("");

  const handleSubmitSearch = (event) => {
    event.preventDefault();
  };

  function handleSearchList(event) {
    setSearchText(event.target.value);
  }

  return (
    <header className="header">
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

      <Lists searchText={searchText} />
    </header>
  );
}

export default Header;
