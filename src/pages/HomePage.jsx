import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/custom_components/SearchBar";
import JobSection from "../components/job_components/JobSection";
import sampleJobs from "../sampleData";

function HomePage() {
  const [jobs, setJobs] = useState(sampleJobs);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/jobs?search_term`)
      .then((res) => {
        console.log(res.data);
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowSkeleton(false);
      });
  }, []);

  // const searchJobs = (searchTerm) => {
  //   setShowSkeleton(true);
  //   axios
  //     .get(`http://localhost:8000/api/jobs/?vacancy=${searchTerm}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setJobs(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setShowSkeleton(false);
  //     });
  // };

  return (
    <div>
      <SearchBar />
      {/* searchJobs={searchJobs}  */}
      <JobSection jobs={jobs} showSkeleton={showSkeleton} />
    </div>
  );
}

export default HomePage;
