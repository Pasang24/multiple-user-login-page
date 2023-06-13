import JobFilter from "./job_components/JobFilter";
import JobList from "./job_components/JobList";
import SkeletonContainer from "./SkeletonContainer";
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
