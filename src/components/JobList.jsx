import Job from "./Job";
import "./JobList.css";

function JobList({ jobs }) {
  const renderedList = jobs.map((job, indx) => {
    return <Job job={job} key={indx} />;
  });
  return <div className="jobs">{renderedList}</div>;
}

export default JobList;
