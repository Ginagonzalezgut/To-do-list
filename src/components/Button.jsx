import { Link } from "react-router-dom";

function Button({ children, onClick, isLink, to }) {
  if (isLink) {
    return (
      <Link to={to} className="button">
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

export default Button;
