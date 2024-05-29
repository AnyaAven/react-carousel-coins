import "./Button.css";

/**
 * Button for onClick events
 *
 * Props:
 * onClick: function
 * label: String
 *
 * Events:
 * onClick
 */
function Button({ onClick, label }) {
  return (
    <button
        className="Button"
        onClick={onClick}>
      <p className="Button-label">{label}</p>
    </button>
);
}

export default Button