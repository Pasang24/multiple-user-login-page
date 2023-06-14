import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ViewJob() {
  const location = useLocation();
  const jobId = location.pathname.split("/")[2]; //getting the job id from the url

  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/jobs/${jobId}`)
      .then((res) => {
        console.log(res.data);
        setJob(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [jobId]);

  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>
        {isLoading ? "Loading..." : job.title}
      </h1>
    </div>
  );
}

export default ViewJob;
