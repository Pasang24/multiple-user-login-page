import "./Job.css";

function Job({ job }) {
  return (
    <div className="job-container">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <h1>Posted Date: {job.posted_date}</h1>
    </div>
  );
}

export default Job;
