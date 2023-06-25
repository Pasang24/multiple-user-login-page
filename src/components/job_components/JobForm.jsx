import "./JobForm.css";

function JobForm({ job, handleSubmit, handleChange }) {
  return (
    <div className="job-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            required
            type="text"
            placeholder="Enter job title"
            name="title"
            value={job.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Company Name</label>
          <input
            required
            type="text"
            placeholder="Enter company name"
            name="company"
            value={job.company}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1" className="form-label">
            Images
          </label>
          <div className="upload-images">
            {job.images.map((image) => {
              let src = "";
              if (typeof image == "string") {
                src = image;
              } else {
                src = URL.createObjectURL(image);
              }

              return (
                <img
                  src={src}
                  style={{
                    height: "150px",
                    width: "150px",
                    margin: "10px",
                  }}
                  alt="Uploads"
                />
              );
            })}
          </div>
          <input
            required
            type="file"
            multiple
            name="images"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Salary</label>
          <input
            required
            type="text"
            placeholder="Enter salary"
            name="salary"
            value={job.salary}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Contact</label>
          <input
            required
            type="text"
            placeholder="Enter phone no"
            name="phone"
            value={job.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Vacany no.</label>
          <input
            required
            type="text"
            placeholder="Enter no of applicants required"
            name="vacancy"
            value={job.vacancy}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Category</label>
          <input
            required
            type="text"
            placeholder="Enter Category"
            name="category"
            value={job.category}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobLocation">Job Location</label>
          <input
            required
            type="text"
            placeholder="Enter job location"
            name="location"
            value={job.location}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="basic-url" className="form-label">
            Website
          </label>
          <input
            required
            type="text"
            aria-describedby="basic-addon3"
            placeholder="Enter website link"
            name="website"
            value={job.website}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Posted Date</label>
          <input
            required
            type="date"
            name="posted_date"
            value={job.posted_date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Closing Date</label>
          <input
            required
            type="date"
            name="closing_date"
            value={job.closing_date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Job Requirements</label>
          <textarea
            rows="3"
            placeholder="Enter job requirements"
            name="requirements"
            value={job.requirements}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            rows="3"
            placeholder="Enter job description"
            name="description"
            value={job.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="job-form-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default JobForm;
