import { Navigate } from "react-router-dom";
import Button from "./Button";

function EmptyState({ lists }) {
  if (lists.length === 0) {
    return (
      <div className="empty-state">
        <i className="fa-solid fa-clipboard-list empty-state__icon"></i>
        <h2 className="empty-state__title">You don't have any lists yet.</h2>
        <p className="empty-state__description">
          Create your first list to start organizing your tasks.
        </p>
        <Button to="/app/create-list" isLink>
          Create a List
        </Button>
      </div>
    );
  } else {
    return <Navigate to="/app/create-list" />;
  }
}

export default EmptyState;
