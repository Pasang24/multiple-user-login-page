import { useEffect } from "react";
import "./Spinner.css";

function Spinner() {
  useEffect(() => {
    document.body.classList.add("prevent-scroll");

    return () => document.body.classList.remove("prevent-scroll");
  }, []);
  return (
    <div className="spinner-container">
      <div className="spinner"></div>;
    </div>
  );
}

export default Spinner;
