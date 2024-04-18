import "../styles/input.css";

function Input() {
  return (
    <div className="form__group">
      <input
        type="text"
        className="form__input"
        id="name"
        placeholder="Your name"
        required=""
      />

      <button type="button">Click</button>
    </div>
  );
}

export default Input;
