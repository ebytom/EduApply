import React from 'react'

const OrderItem = ({ order }) => {
    return (
        <div className="card card-product-grid card-lg d-flex flex-row gap-4 p-2" style={{ cursor: "pointer", width: "500px" }}>
            <div>
                <img className="rounded-4" style={{ width: "130px", height: "130px", objectFit: "cover" }} src={order.url} />
            </div>
            <div className='w-100 d-flex flex-column justify-content-between'>
                <div className='w-100 d-flex justify-content-between align-items-center pe-4 bg-light p-2 rounded-4'>
                    <div className='d-flex flex-column'>
                        <b className="fs-5">{order.name}</b>
                        <b className="text-secondary">{order.category}</b>
                    </div>
                    <div>
                        <b className='fs-5'>Rs. {order.price}</b>
                    </div>
                </div>
                <div>
                    <b>Order# {order.order_id}</b>
                    <p className='mb-0'>Payment Mode : {order.payment_mode}</p>
                    <p className='mb-2'>Delivery ad# : {order.address}</p>
                </div>
            </div>
        </div>

    )
}

export default OrderItem