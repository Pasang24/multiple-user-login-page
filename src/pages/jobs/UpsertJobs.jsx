import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    })

    useEffect(() => {
        if (id) {
            axios.get(`${process.env.REACT_APP_SERVER_URL}/jobs/${id}`)
                .then(res => {
                    setJob(res.data.data)
                })
        }
        // eslint-disable-next-line
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        let form_data = new FormData();
        form_data.append("title", job.title)
        form_data.append("company", job.company)
        form_data.append("location", job.location)
        form_data.append("phone", job.phone)
        form_data.append("website", job.website)
        form_data.append("requirements", job.requirements)
        form_data.append("salary", job.salary)
        form_data.append("vacancy", job.vacancy)
        form_data.append("catagory", job.category)
        form_data.append("posted_date", job.posted_date)
        form_data.append("closing_date", job.closing_date)
        form_data.append("description", job.description) 
        let temp = [...job.images]
        temp.forEach(img => {
            if (typeof (img) === "string") {
                form_data.append("images[]", img)
            } else {
                form_data.append("images", img)
            }
        })

        let method = "post"
        let url = `${process.env.REACT_APP_SERVER_URL}/jobs`

        if (id) {
            method = "put"
            url = `${process.env.REACT_APP_SERVER_URL}/jobs/${id}`
        }

        axios[method](url, form_data, {
            headers: {
                Authorization: `Bearer ${JSON.parse(
                    localStorage.getItem("userToken"))}`
            }
        })
            .then(user_res => {
                console.log({ user_res })
            }).catch(err => {
                console.log(err)
            })
    }

    const handlechange = (event) => {
        if (event.target.type === "file") {
            setJob({
                ...job,
                images: [...job.images, ...event.target.files]
            })
        } else {
            setJob({ ...job, [event.target.name]: event.target.value })
        }
    }

    return (
        <div className="container">
            <h1>Job Listings</h1>
            <div>
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="jobTitle">Job Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="jobTitle"
                            placeholder="Enter job title"
                            name="title"
                            value={job.title}
                            onChange={handlechange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Company Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="jobTitle"
                            placeholder="Enter company name"
                            name="company"
                            value={job.company}
                            onChange={handlechange}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">image</label>
                        {
                            job.images.map(image => {
                                let src = "";
                                if (typeof (image) == "string") {
                                    src = image
                                } else {
                                    src = URL.createObjectURL(image)
                                }

                                return <img src={src}
                                    style={{
                                        height: "150px",
                                        width: "150px",
                                        margin: "10px"
                                    }}
                                />
                            })
                        }
                        <input type="file" multiple className="form-control" id=""
                            name='images'
                            onChange={handlechange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Salary</label>
                        <input
                            type="text"
                            className="form-control"
                            id="jobTitle"
                            placeholder="Enter salary"
                            name="salary"
                            value={job.salary}
                            onChange={handlechange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Contact</label>
                        <input
                            type="text"
                            className="form-control"
                            id="jobTitle"
                            placeholder="Enter phone no"
                            name="phone"
                            value={job.phone}
                            onChange={handlechange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Vacany no.</label>
                        <input
                            type="text"
                            className="form-control"
                            id="jobTitle"
                            placeholder="Enter no of applicants required"
                            name="vacancy"
                            value={job.vacancy}
                            onChange={handlechange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Category</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Category"
                            placeholder="Enter Category"
                            name="category"
                            value={job.category}
                            onChange={handlechange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobLocation">Job Location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="jobLocation"
                            placeholder="Enter job location"
                            name="location"
                            value={job.location}
                            onChange={handlechange}
                        />
                    </div>
                    <label for="basic-url" className="form-label">
                        Website
                    </label>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="basic-url"
                            aria-describedby="basic-addon3"
                            placeholder="Enter website link"
                            name="website"
                            value={job.website}
                            onChange={handlechange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Posted Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="posted_date"
                            name="posted_date"
                            value={job.posted_date}
                            onChange={handlechange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Closing Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="Closing_date"
                            name="closing_date"
                            value={job.closing_date}
                            onChange={handlechange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobDescription">Job Requirements</label>
                        <textarea
                            className="form-control"
                            id="jobDescription"
                            rows="3"
                            placeholder="Enter job requirements"
                            name="requirements"
                            value={job.requirements}
                            onChange={handlechange}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobDescription">Job Description</label>
                        <textarea
                            className="form-control"
                            id="jobDescription"
                            rows="3"
                            placeholder="Enter job description"
                            name="description"
                            value={job.description}
                            onChange={handlechange}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UpsertJobs;
