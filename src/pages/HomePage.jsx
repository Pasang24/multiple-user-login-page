import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/custom_components/SearchBar";
import JobSection from "../components/job_components/JobSection";
import sampleJobs from "../sampleData";
import { useLocation, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = parseInt(location.search.split("=")[1]) || 1;

  const [totalPages, setTotalPages] = useState(1);
  const [jobs, setJobs] = useState(sampleJobs);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    setShowSkeleton(true);
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/jobs?search_term&page=${currentPage}`
      )
      .then((res) => {
        setJobs(res.data.data);
        setTotalPages(Math.ceil(res.data.meta.total / 12));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowSkeleton(false);
      });
    // eslint-disable-next-line
  }, [currentPage, location.search]);

  const handlePageChange = (nextPageNum) => {
    if (
      nextPageNum === currentPage ||
      nextPageNum < 1 ||
      nextPageNum > totalPages
    )
      return;
    navigate(`/?page=${nextPageNum}`);
  };

  const searchJobs = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div>
      <SearchBar searchJobs={searchJobs} />
      <JobSection
        title="Available Jobs"
        jobs={jobs}
        showSkeleton={showSkeleton}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default HomePage;
