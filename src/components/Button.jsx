import { Link } from "react-router-dom";

function Button({ children, onClick, isLink, to, className }) {
  const _className = `button ${className}`;

  if (isLink) {
    return (
      <Link to={to} className={_className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={_className}>
      {children}
    </button>
  );
}

export default Button;
