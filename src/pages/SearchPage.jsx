import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/custom_components/SearchBar";
import JobSection from "../components/job_components/JobSection";
import sampleJobs from "../sampleData";
import { useNavigate, useParams } from "react-router-dom";

function SearchPage() {
  const navigate = useNavigate();
  const { searchTerm } = useParams();

  const [jobs, setJobs] = useState(sampleJobs);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/jobs?search_term=${searchTerm}`)
      .then((res) => {
        console.log(res.data);
        setJobs(res.data.data);
        setTotalPages(Math.ceil(res.data.meta.total / 12));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowSkeleton(false);
      });
  }, [searchTerm]);

  const handlePageChange = (nextPageNum) => {
    if (
      nextPageNum === currentPage ||
      nextPageNum < 1 ||
      nextPageNum > totalPages
    )
      return;
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
    setCurrentPage(nextPageNum);
  };

  const searchJobs = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div>
      <SearchBar searchJobs={searchJobs} />
      <JobSection
        title="Search Results"
        jobs={jobs}
        showSkeleton={showSkeleton}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default SearchPage;
