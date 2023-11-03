import { BugIcon, CreditCardIcon, RepoIcon } from '@primer/octicons-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SchoolCard = ({ data }) => {

    const nav = useNavigate()

    return (
        <div className='d-flex bg-light rounded' style={{ height: "150px", maxWidth: "560px", boxShadow: "2px 3px 7px 0px #bebebe" }}>
            <div><img height="150px" className='rounded' src={data.imageUrl} /></div>
            <div className='p-2 w-100'>
                <div className='d-flex flex-column'>
                    <b style={{ fontSize: "17px" }}>{data.schoolname}</b>
                    <b style={{ fontSize: "13px" }} className='text-secondary'>{data.city}</b>
                </div>
                <div className='d-flex gap-2 mt-1'>
                    <div className='px-3 py-2 d-flex align-items-center gap-2 bg-white rounded'>
                        <RepoIcon />
                        <b>{data.board}</b>
                    </div>
                    <div className='px-3 py-2 d-flex align-items-center gap-2 bg-white rounded'>
                        <CreditCardIcon />
                        <b>{data.cost}</b>
                    </div>
                </div>
                <div className='btn btn-danger w-100 p-0 py-1 fw-bold mt-2' onClick={() => nav('/apply', {
                    state: {
                        school: data
                    }
                })}>
                    Apply Now
                </div>
            </div>
        </div>
    )
}

export default SchoolCard