import Button from "./Button";

function EmptyState() {
  return (
    <div className="empty-state">
      <i className="fa-solid fa-clipboard-list empty-state__icon"></i>
      <h2 className="empty-state__title">No tienes listas aún</h2>
      <p className="empty-state__description">
        Crea tu primera lista para comenzar a organizar tus tareas.
      </p>
      <Button>Create a List</Button>
    </div>
  );
}

export default EmptyState;
