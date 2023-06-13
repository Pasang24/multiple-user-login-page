import { useEffect } from "react";
import "./JobOverview.css";

function JobOverview({ job, onClose }) {
  useEffect(() => {
    document.body.classList.add("prevent-screen-scroll");

    return () => document.body.classList.remove("prevent-screen-scroll");
  }, []);
  return (
    <div className="joboverview-container">
      <div className="joboverview">
        <h3>Post: {job.title}</h3>
        <p>Description: {job.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default JobOverview;
