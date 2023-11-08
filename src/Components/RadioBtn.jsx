import "./RadioBtn.css";
const RadioBtn = ({ name, value, onChange, checked, text }) => {
  return (
    <label className="radio-label">
      <input
        className="radio-input"
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />

      <span className="custom-radio" />
      <p className="radio-text">{text}</p>
    </label>
  );
};

export default RadioBtn;
