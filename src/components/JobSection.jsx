import JobCategory from "./JobCategory";
import JobList from "./JobList";
import "./JobSection.css";

function JobSection({ jobs }) {
  return (
    <div className="jobsection-container">
      <h2 className="joblist-title">Available Jobs</h2>
      <div className="jobsection">
        <JobList jobs={jobs} />
        <JobCategory />
      </div>
    </div>
  );
}

export default JobSection;
