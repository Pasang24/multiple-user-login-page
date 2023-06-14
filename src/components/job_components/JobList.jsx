import Job from "./Job";
import Pagination from "../custom_components/Pagination";
import "./JobList.css";

function JobList({ jobs, pageNum, handlePageChange }) {
  const renderedList = jobs.map((job, indx) => {
    return <Job job={job} key={indx} />;
  });
  return (
    <div className="jobs">
      <div className="jobs-container">{renderedList}</div>
      <Pagination pageNum={pageNum} handlePageChange={handlePageChange} />
    </div>
  );
}

export default JobList;
