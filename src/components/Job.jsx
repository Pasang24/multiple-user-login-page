import { useState } from "react";
import { createPortal } from "react-dom";
import JobOverview from "./JobOverview";
import "./Job.css";

function Job({ job }) {
  const [showOverview, setShowOverview] = useState(false);

  return (
    <>
      <div className="job-container" onClick={() => setShowOverview(true)}>
        <h3>{job.title}</h3>
        <p>{job.description}</p>
        <h1>Posted Date: {job.posted_date}</h1>
      </div>
      {showOverview &&
        createPortal(
          <JobOverview
            job={job}
            onClose={() => {
              setShowOverview(false);
            }}
          />,
          document.getElementById("joboverview-div")
        )}
    </>
  );
}

export default Job;
