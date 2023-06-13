import { useState } from "react";
import { createPortal } from "react-dom";
import JobOverview from "./JobOverview";
import "./Job.css";

function Job({ job }) {
  const [showOverview, setShowOverview] = useState(false);

  return (
    <>
      <div className="job-container" onClick={() => setShowOverview(true)}>
        <div className="company-image">
          {/* Added static image for now */}
          <img
            alt="logo"
            src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
          />
        </div>
        <div className="job-desc">
          <h3>{job.title}</h3>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <p>Requirement: {job.requirements}</p>
        </div>
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
