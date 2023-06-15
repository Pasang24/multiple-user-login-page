import Button from "../custom_components/Buttton";
import "./JobDescription.css";

function JobDescription({ job }) {
  const handleClick = () => {
    // define handleClick function for applying job
    const role = JSON.parse(localStorage.getItem("role")) || "";
    const userToken = JSON.parse(localStorage.getItem("userToken")) || "";
    if (role !== "applicant" && !userToken) {
      console.log(role);
      return;
    } else {
      console.log(userToken);
    }
  };

  return (
    <div className="full-desc">
      <h1>{"Terms of Reference (ToR)"}</h1>
      <div className="job-details">
        <h2>DETAILED JOB DESCRIPTION</h2>
        <ul>
          <li>Position: {job.title}</li>
          <li>Requirement: {job.requirements}</li>
          <li>Salary: ${job.salary}</li>
          <li>Description: ${job.description}</li>
          <li>Company: {job.company}</li>
          <li>Location: {job.location}</li>
          <li>Total Vacancy: {job.vacancy}</li>
          <li>Posted Date: {job.posted_date.slice(0, 10)}</li>
          <li>Deadline: {job.closing_date.slice(0, 10)}</li>
        </ul>
        <hr />
        <h2>CONTACT DETAILS OF RECRUITER</h2>
        <ul>
          <li>Contact No: {job.phone}</li>
          <li>Address: {job.location}</li>
          <li>
            Website:{" "}
            <a
              className="company-site"
              href={`http://${job.website}`}
              target="_blank"
              rel="noreferrer"
            >
              {job.website}
            </a>
          </li>
        </ul>
        <Button onClick={handleClick}>Apply for Job</Button>
      </div>
    </div>
  );
}

export default JobDescription;
