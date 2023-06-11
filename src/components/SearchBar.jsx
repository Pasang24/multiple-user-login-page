import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ searchJobs }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    searchJobs(searchTerm);
    setSearchTerm("");
  };
  return (
    <div className="search-container">
      <h2 className="search-title">Search Bar</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Enter a job title or company name"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
