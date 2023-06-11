import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";

function HomePage() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/jobs")
      .then((res) => {
        console.log(res.data);
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchJobs = (searchTerm) => {
    axios
      .get(`http://localhost:8000/api/jobs/${searchTerm}`)
      .then((res) => {
        console.log(res.data);
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <SearchBar searchJobs={searchJobs} />
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;
