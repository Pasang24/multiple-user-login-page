import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/custom_components/SearchBar";
import JobSection from "../components/job_components/JobSection";
import sampleJobs from "../sampleData";

function HomePage() {
  const [jobs, setJobs] = useState(sampleJobs);
  const [pageNum, setPageNum] = useState(1);
  const [showSkeleton, setShowSkeleton] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/jobs?search_term`)
      .then((res) => {
        console.log(res.data);
        setJobs(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowSkeleton(false);
      });
  }, []);

  const handlePageChange = (nextPageNum) => {
    if (nextPageNum === pageNum || nextPageNum < 1 || nextPageNum > 12) return;
    // setShowSkeleton(true);
    // axios
    //   .get(`${process.env.REACT_APP_SERVER_URL}/jobs?search_term`)
    //   .then((res) => {
    //     console.log(res.data);
    //     setJobs(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     setShowSkeleton(false);
    //   });
    setPageNum(nextPageNum);
  };

  const searchJobs = (searchTerm) => {
    setShowSkeleton(true);
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/jobs?search_term=${searchTerm}`)
      .then((res) => {
        console.log(res.data);
        setJobs(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowSkeleton(false);
      });
  };

  return (
    <div>
      <SearchBar searchJobs={searchJobs} />
      <JobSection
        jobs={jobs}
        showSkeleton={showSkeleton}
        pageNum={pageNum}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default HomePage;
