import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import JobDescription from "../../components/job_components/JobDescription";

function ViewJob() {
  const { id } = useParams(); //getting the job id from the url
  console.log(id);
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/jobs/${id}`)
      .then((res) => {
        console.log(res);
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
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>
        {isLoading ? "Loading..." : <JobDescription job={job} />}
      </h1>
    </div>
  );
}

export default ViewJob;
