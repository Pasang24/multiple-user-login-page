import { useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import axios from "axios";
import JobModal from "./JobModal";
import Button from "../custom_components/Buttton";
import "./JobDescription.css";

function JobDescription({ job }) {
  const [showJobModal, setShowJobModal] = useState(false);
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("notApplied");

  const handleClick = () => {
    const currentRole = JSON.parse(localStorage.getItem("role")) || "";
    if (currentRole !== "applicant") {
      setShowJobModal(true);
      setRole(currentRole);
      return;
    } else {
      setShowJobModal(true);
      setRole(currentRole);
      setStatus("pending");
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/applyjob`,
          {
            jobs: { job_id: job._id },
          },
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("userToken")
              )}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setStatus("applied");
        })
        .catch((err) => {
          console.log(err);
          setStatus("failed");
        });
    }
  };

  return (
    <>
      <div className="full-desc">
        <h2>{"Terms of Reference (ToR)"}</h2>
        <div className="job-details">
          <h2>DETAILED JOB DESCRIPTION</h2>
          <ul>
            <li>Position: {job.title}</li>
            <li>Requirement: {job.requirements}</li>
            <li>Salary: ${job.salary}</li>
            <li>Description: {job.description}</li>
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
      {createPortal(
        <AnimatePresence>
          {showJobModal && (
            <JobModal
              role={role}
              status={status}
              onClose={() => {
                setShowJobModal(false);
                setRole("");
                setStatus("notApplied");
              }}
            />
          )}
        </AnimatePresence>,
        document.getElementById("jobModal-div")
      )}
    </>
  );
}

export default JobDescription;
