import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Apply = () => {

    const loc = useLocation()
    const nav = useNavigate()

    const applications = [
        {
            class: "Pre-Nursery",
            session: "2023-2024",
            date: "31 December 2023",
            fees: "1000",
        },
        {
            class: "Pre-Nursery",
            session: "2023-2024",
            date: "31 December 2023",
            fees: "1000",
        },
        {
            class: "Pre-Nursery",
            session: "2023-2024",
            date: "31 December 2023",
            fees: "1000",
        },
        {
            class: "Nursery",
            session: "2023-2024",
            date: "31 December 2023",
            fees: "1000",
        },
        {
            class: "LKG",
            session: "2023-2024",
            date: "31 December 2023",
            fees: "1000",
        },
        {
            class: "UKG",
            session: "2023-2024",
            date: "31 December 2023",
            fees: "1000",
        },
        {
            class: "Class 1",
            session: "2023-2024",
            date: "31 December 2023",
            fees: "1000",
        },
        {
            class: "Class 1",
            session: "2023-2024",
            date: "31 December 2023",
            fees: "1000",
        },
        {
            class: "Class 2",
            session: "2023-2024",
            date: "31 December 2023",
            fees: "1000",
        },
        {
            class: "Class 3",
            session: "2023-2024",
            date: "31 December 2023",
            fees: "1000",
        },
        {
            class: "Class 4",
            session: "2023-2024",
            date: "31 December 2023",
            fees: "1000",
        },
        {
            class: "Class 6",
            session: "2023-2024",
            date: "31 December 2023",
            fees: "1000",
        },
    ]

    return (
        < div className='p-3' >
            <div className='bg-dark rounded p-3 d-flex text-white align-items-center justify-content-between'>
                <div className='text-white fs-5'><b>Apply for Online Admission</b></div>
                <div>{loc.state?.school.schoolname}, {loc.state?.school.city}</div>
            </div>
            <div className="p-3">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Class</th>
                            <th scope="col">Session</th>
                            <th scope="col">Application Date</th>
                            <th scope="col">Application Fees</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            applications.map(app => {
                                return (
                                    <tr>
                                        <th>{app.class}</th>
                                        <td>{app.session}</td>
                                        <td>{app.date}</td>
                                        <td>Rs {app.fees}</td>
                                        <td><div className="btn btn-primary" onClick={() => nav("/applicationForm",
                                            {
                                                state: {
                                                    application: app,
                                                    school: loc?.state?.school
                                                }
                                            })}>Add to Apply</div></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Apply