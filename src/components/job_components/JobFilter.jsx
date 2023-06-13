import "./JobFilter.css";

function JobFilter() {
  return (
    <div className="jobfilter-container">
      <div className="jobfilter">
        <h3>Jobs by Categories</h3>
        <ul>
          <li>IT Jobs</li>
          <li>Hospitality Jobs</li>
          <li>Administration Jobs</li>
          <li>NGO/INGO Jobs</li>
          <li>Engineering Jobs</li>
        </ul>
        <hr />
      </div>
      <div className="jobfilter">
        <h3>Jobs by Cities</h3>
        <ul>
          <li>Kathmandu</li>
          <li>Lalitpur</li>
          <li>Bhaktapur</li>
          <li>Pokhara</li>
        </ul>
        <hr />
      </div>
      <div className="jobfilter">
        <h3>Jobs by Types</h3>
        <ul>
          <li>Full Time</li>
          <li>Contract</li>
          <li>Other</li>
          <li>Part Time</li>
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default JobFilter;
