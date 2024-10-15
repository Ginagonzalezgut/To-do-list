import Button from "./Button";

function EmptyState() {
  return (
    <div className="empty-state">
      <i className="fa-solid fa-clipboard-list empty-state__icon"></i>
      <h2 className="empty-state__title">You don't have any lists yet.</h2>
      <p className="empty-state__description">
        Create your first list to start organizing your tasks.
      </p>
      <Button to="/create-list" isLink>
        Create a List
      </Button>
    </div>
  );
}

export default EmptyState;
