import { useEffect } from "react";
import Spinner from "./Spinner";
import "./SpinnerContainer.css";

function SpinnerContainer() {
  useEffect(() => {
    document.body.classList.add("prevent-scroll");

    return () => document.body.classList.remove("prevent-scroll");
  }, []);
  return (
    <div className="spinner-container">
      <Spinner />
    </div>
  );
}

export default SpinnerContainer;
