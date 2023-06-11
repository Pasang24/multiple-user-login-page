import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import "./PasswordInput.css";

function PasswordInput({ value, setValue, actionType, placeholder, children }) {
  const [type, setType] = useState("password");

  const handleChange = (event) => {
    setValue({
      type: actionType,
      payload: event.target.value,
    });
  };

  return (
    <div className="passInput-box">
      {children}
      <input type={type} value={value} onChange={handleChange} required />
      <span>{placeholder}</span>
      <div className="pass-icon">
        {type === "password" ? (
          <BiShow onClick={() => setType("text")} />
        ) : (
          <BiHide onClick={() => setType("password")} />
        )}
      </div>
    </div>
  );
}

export default PasswordInput;
