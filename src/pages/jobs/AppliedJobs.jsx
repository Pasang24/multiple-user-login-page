import React, { useState, useEffect } from "react";
import axios from "axios";

const AppliedJobs = () => {
  const [applied_jobs, setJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/appliedjob`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("userToken")
          )}`,
        },
      })
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const newArr = [];

  if (applied_jobs) {
    for (let i = 0; i < applied_jobs.length; i++) {
      newArr.push(
        <tbody>
          <tr>
            <td>{applied_jobs[i].jobs.job_id.company}</td>
            <td>{applied_jobs[i].jobs.job_id.title}</td>
            <td>{applied_jobs[i].jobs.status}</td>
            <td>{applied_jobs[i].createdAt.slice(0, 10)}</td>
          </tr>
        </tbody>
      );
    }
  }

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Status</th>
            <th>Applied Date</th>
          </tr>
        </thead>
        {newArr}
      </table>
    </>
  );
};

export default AppliedJobs;
