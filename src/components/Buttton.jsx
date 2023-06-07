import "./Button.css";

function Button({ children, ...props }) {
  return (
    <button {...props} className="btn">
      {children}
    </button>
  );
}

export default Button;
