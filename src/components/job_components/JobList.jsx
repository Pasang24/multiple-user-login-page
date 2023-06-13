import Job from "./Job";
import Pagination from "../custom_components/Pagination";
import "./JobList.css";

function JobList({ jobs }) {
  const renderedList = jobs.map((job, indx) => {
    return <Job job={job} key={indx} />;
  });
  return (
    <div className="jobs">
      <div className="jobs-container">{renderedList}</div>
      <Pagination />
    </div>
  );
}

export default JobList;
