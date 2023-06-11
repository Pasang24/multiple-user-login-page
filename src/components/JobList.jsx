import "./JobList.css";

function JobList({ jobs }) {
  const renderedList = jobs.map((job, indx) => {
    return (
      <div key={indx}>
        <h3>{job.title}</h3>
        <p>{job.description}</p>
        <h1>Posted Date: {job.postedDate}</h1>
      </div>
    );
  });
  return (
    <div className="joblist-container">
      <h2 className="joblist-title">Top Jobs</h2>
      <div>{renderedList}</div>
    </div>
  );
}

export default JobList;
