import { useNavigate } from "react-router-dom";
import "./Job.css";

function Job({ job }) {
  const navigate = useNavigate();
  return (
    <div className="job-container" onClick={() => navigate(`/jobs/${job._id}`)}>
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
  );
}

export default Job;
