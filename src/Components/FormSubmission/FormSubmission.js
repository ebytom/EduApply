import { CheckCircleFillIcon } from '@primer/octicons-react';
import { Modal } from 'antd';
import React, { useState } from 'react'
import Payment from '../Payment/Payment';

const FormSubmission = ({ setOpen, open, application, school }) => {


    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState(false)

    const showModal = () => {
        setOpen(true);
        setStatus(false)
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const paymentStatus = (sts) => {
        setStatus(sts);
    }

    console.log(school);

    return (
        <div>
            <Modal
                open={open}
                onCancel={handleCancel}
                footer={[]}
            >
                <>
                    {
                        status ?
                            <div className='d-flex align-items-center gap-3'>
                                <CheckCircleFillIcon size="large" fill='green' />
                                <b className='fs-3'>Application Submitted successfully!</b>
                            </div>
                            :
                            <div>
                                <div className="d-flex">
                                    <div className="w-50"><img class="rounded-3 w-100" style={{ minWidth: "180px" }} src={school.imageUrl} /></div>
                                    <div className="ms-3 d-flex flex-column">
                                        <b className="fs-5">{school.schoolname}, {school.city}</b>
                                        <b className="text-secondary">{school.board}</b>
                                        <p className='mb-0'>{application.class} ({application.session})</p>
                                        {/* <div className="d-flex align-items-center mt-0">
                                            <b>Rating &nbsp;</b>
                                            {
                                                Array.from({ length: details.rating }).map((_, index) => (
                                                    <span key={index} className="fs-5">⭐</span>
                                                ))
                                            }
                                        </div> */}
                                        {/* <b className="fs-5 mt-2">Rs. {application.fees}</b> */}
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div className="d-flex justify-content-between mt-2">
                                        Application Form Fee
                                        <b>Rs. {application.fees}</b>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        Platform & Notification Charges
                                        <b>Rs. 20</b>
                                    </div>
                                </div>

                                <hr />
                                <div className="d-flex justify-content-between mt-2">
                                    <b>Total Fee to be paid</b>
                                    <b>RS. {Number(application.fees) + 20}</b>
                                </div>
                                <hr />
                                <Payment details={school} application={application} setOpen={setOpen} paymentStatus={paymentStatus} />
                            </div>
                    }
                </>

            </Modal>
        </div>
    )
}

export default FormSubmission