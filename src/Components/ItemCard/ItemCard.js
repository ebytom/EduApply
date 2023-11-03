import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'antd';
import Payment from '../Payment/Payment';
import { CheckCircleFillIcon } from '@primer/octicons-react';

const ItemCard = ({ details, updateValue }) => {

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

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

    return (
        <>
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
                                <b className='fs-3'>Order placed successfully!</b>
                            </div>
                            :
                            <div>
                                <div className="d-flex">
                                    <div className="w-50"><img class="rounded-3 w-100" style={{ minWidth: "180px" }} src={details.url} /></div>
                                    <div className="ms-3 d-flex flex-column">
                                        <b className="fs-5">{details.name}</b>
                                        <b className="text-secondary">{details.category}</b>
                                        <p className='mb-0'>{details.description}</p>
                                        <div className="d-flex align-items-center mt-0">
                                            <b>Rating &nbsp;</b>
                                            {
                                                Array.from({ length: details.rating }).map((_, index) => (
                                                    <span key={index} className="fs-5">⭐</span>
                                                ))
                                            }
                                        </div>
                                        <b className="fs-5 mt-2">Rs. {details.price}</b>
                                    </div>
                                </div>
                                <hr />
                                <Payment details={details} setOpen={setOpen} paymentStatus={paymentStatus} />
                            </div>
                    }
                </>

            </Modal>
        </>
    )
}

export default ItemCard