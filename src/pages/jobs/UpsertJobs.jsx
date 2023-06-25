import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobForm from "../../components/job_components/JobForm";

const UpsertJobs = () => {
  const { id } = useParams();
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    phone: "",
    website: "",
    requirements: "",
    salary: "",
    vacancy: "",
    category: "",
    posted_date: "",
    closing_date: "",
    description: "",
    images: [],
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/jobs/${id}`)
        .then((res) => {
          setJob(res.data.data);
        });
    }
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let form_data = new FormData();
    form_data.append("title", job.title);
    form_data.append("company", job.company);
    form_data.append("location", job.location);
    form_data.append("phone", job.phone);
    form_data.append("website", job.website);
    form_data.append("requirements", job.requirements);
    form_data.append("salary", job.salary);
    form_data.append("vacancy", job.vacancy);
    form_data.append("catagory", job.category);
    form_data.append("posted_date", job.posted_date);
    form_data.append("closing_date", job.closing_date);
    form_data.append("description", job.description);
    let temp = [...job.images];
    temp.forEach((img) => {
      if (typeof img === "string") {
        form_data.append("images[]", img);
      } else {
        form_data.append("images", img);
      }
    });

    let method = "post";
    let url = `${process.env.REACT_APP_SERVER_URL}/jobs`;

    if (id) {
      method = "put";
      url = `${process.env.REACT_APP_SERVER_URL}/jobs/${id}`;
    }

    axios[method](url, form_data, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    })
      .then((user_res) => {
        console.log({ user_res });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    if (event.target.type === "file") {
      setJob({
        ...job,
        images: [...job.images, ...event.target.files],
      });
    } else {
      setJob({ ...job, [event.target.name]: event.target.value });
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "white" }}>Job Listings</h1>
      <JobForm
        job={job}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default UpsertJobs;
