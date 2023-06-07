import "./Input.css";

function Input({ type, value, setValue, actionType, placeholder, children }) {
  const handleChange = (event) => {
    setValue({
      type: actionType,
      payload: event.target.value,
    });
  };

  return (
    <div className="input-box">
      {children}
      <input type={type} value={value} onChange={handleChange} required />
      <span>{placeholder}</span>
    </div>
  );
}

export default Input;
