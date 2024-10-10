import Lists from "./Lists";

function Header() {
  return (
    <header className="header">
      <label htmlFor="search" className="header__search">
        <i className=" header__icon fa-solid fa-magnifying-glass"></i>

        <input
          aria-label="Search"
          className="header__input"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
      </label>
      <Lists />
    </header>
  );
}

export default Header;
