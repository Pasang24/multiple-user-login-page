import { useEffect } from "react";
import "./Spinner.css";

function Spinner({ size }) {
  return (
    <div
      className="spinner"
      style={{ width: size || 60, height: size || 60 }}
    ></div>
  );
}

export default Spinner;
