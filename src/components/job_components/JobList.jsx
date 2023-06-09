import Job from "./Job";
import Pagination from "../custom_components/Pagination";
import "./JobList.css";

function JobList({ jobs, currentPage, totalPages, handlePageChange }) {
  const renderedList = jobs.map((job, indx) => {
    return <Job job={job} key={indx} />;
  });
  return (
    <div className="jobs">
      <div className="jobs-container">{renderedList}</div>
      {jobs.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default JobList;
