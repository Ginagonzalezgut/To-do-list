import { useLocation } from "react-router-dom";
import ListItem from "./ListItem";
import Button from "./Button";

function Lists({
  searchText,
  onClick,
  lists,
  onDelete,
  onClickAddList,
  onShare,
}) {
  const location = useLocation();
  const id = location.pathname.split("/list/")[1];

  function renderlistItems() {
    const filterLists = lists.filter((listitem) => {
      return listitem.name.toLowerCase().includes(searchText.toLowerCase());
    });

    if (filterLists.length === 0) {
      return (
        <p className="message-not-found">Your search did not match any list</p>
      );
    } else {
      return filterLists.map((listItem) => {
        const isActive = listItem.id === parseInt(id);

        return (
          <ListItem
            listItem={listItem}
            key={listItem.id}
            onDelete={onDelete}
            onClick={onClick}
            isActive={isActive}
            onShare={onShare}
          />
        );
      });
    }
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
