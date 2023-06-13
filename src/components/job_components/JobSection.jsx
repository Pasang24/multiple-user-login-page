import JobFilter from "./JobFilter";
import JobList from "./JobList";
import SkeletonContainer from "../loader_components/SkeletonContainer";
import "./JobSection.css";

function JobSection({ jobs, showSkeleton }) {
  return (
    <div className="jobsection-container">
      <h2 className="joblist-title">Available Jobs</h2>
      <div className="jobsection">
        {showSkeleton ? (
          <SkeletonContainer times={12} />
        ) : (
          <JobList jobs={jobs} />
        )}
        <JobFilter />
      </div>
    </div>
  );
}

export default JobSection;
