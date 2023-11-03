import { Button, Modal } from 'antd';
import React, { useState } from 'react'

const Track = ({ open, setOpen }) => {


    const [loading, setLoading] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const [appNumber, setAppNumber] = useState(null)
    const [appStatus, setappStatus] = useState(null)

    const applications = JSON.parse(localStorage.getItem("applications")) || [];

    const checkStatus = () => {
        setappStatus(null)
        applications.filter(app => {
            if (String(app.timeStamp) === appNumber) {
                setappStatus(app)
            }
        });
    }

    return (
        <Modal
            open={open}
            title="Track Application"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
            ]}
        >
            <div className="my-3">
                <div className="d-flex align-items-center">
                    <b className='text-nowrap me-4'>Application Number</b>
                    <input className="rounded w-100 p-2" onChange={(e) => {
                        setAppNumber(e.target.value);
                    }} />
                </div>
                <div className="btn btn-primary mt-4 w-100" onClick={() => { setappStatus(null); checkStatus() }}>Check Status</div>
                {
                    appStatus &&
                    <>
                        <hr />
                        <div className="px-5">
                            <div className="d-flex justify-content-between my-1">
                                <b>Application Date</b>
                                <b>{new Date(appStatus?.timeStamp).toLocaleDateString()}</b>
                            </div>
                            <div className="d-flex justify-content-between my-1">
                                <b>Application Number</b>
                                <b>{appStatus?.timeStamp}</b>
                            </div>
                            <div className="d-flex justify-content-between my-1">
                                <b>School</b>
                                <b>{appStatus?.school.schoolname}</b>
                            </div>
                            <div className="d-flex justify-content-between my-1">
                                <b>Application Status</b>
                                <b className="text-danger">Application Under Review</b>
                            </div>
                        </div>
                    </>
                }
            </div>
        </Modal>
    )
}

export default Track