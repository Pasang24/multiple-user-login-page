
import React, { useState, useEffect } from "react";
import axios from "axios";

const AppliedJobs = () => {
    const [applied_jobs, setJobs] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/appliedjob`,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(
                        localStorage.getItem("userToken"))}`
                }
            }
        )
            .then(res => {
                setJobs(res.data);

            }).catch(err => {
                console.log(err);
            })
    }, [])

    const newArr = [];

    if (applied_jobs){
    for (let i = 0; i < applied_jobs.length; i++) {
        newArr.push(<tbody><tr>
            <td>{applied_jobs[i].jobs.job_id.company}</td>
            <td>{applied_jobs[i].jobs.job_id.title}</td>
            <td>{applied_jobs[i].jobs.status}</td>
            <td>{applied_jobs[i].createdAt}</td>
        </tr>
        </tbody>)
    }}

    return (
        <>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Date Applied</th>
                    </tr>
                </thead>
                {newArr}
            </table>
        </>
    )

}


export default AppliedJobs;




