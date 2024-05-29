import "./Button.css";

/**
 * Button for onClick events
 *
 * Props:
 * onClick: function
 * children: ReactNode
 *
 * Events:
 * onClick
 */
function Button({ onClick, children }) {
  return (
    <button
        className="Button btn btn-primary"
        onClick={onClick}>
      <p className="Button-label">{children}</p>
    </button>
);
}

export default Button