import { useLocation } from "react-router-dom";
import ListItem from "./ListItem";
import Button from "./Button";

function Lists({ searchText, onClick, lists, onDelete, onClickAddList }) {
  const location = useLocation();
  const id = location.pathname.split("/list/")[1];

  function renderlistItems() {
    return lists
      .filter((listitem) => {
        return listitem.name.toLowerCase().includes(searchText.toLowerCase());
      })
      .map((listItem) => {
        const isActive = listItem.id === parseInt(id);

        return (
          <ListItem
            listItem={listItem}
            key={listItem.id}
            onDelete={onDelete}
            onClick={onClick}
            isActive={isActive}
          />
        );
      });
  }

  return (
    <>
      <div className="list">{renderlistItems()}</div>
      <Button
        className="add-list-button"
        isLink
        to="/create-list"
        onClick={onClickAddList}
      >
        +
      </Button>
    </>
  );
}

export default Lists;
