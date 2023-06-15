import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import JobDescription from "../../components/job_components/JobDescription";

function ViewJob() {
  const { id } = useParams(); //getting the job id from the url
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/jobs/${id}`)
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <h1 style={{ textAlign: "center", color: "white" }}>Loading...</h1>
      ) : (
        <JobDescription job={job} />
      )}
    </>
  );
}

export default ViewJob;
