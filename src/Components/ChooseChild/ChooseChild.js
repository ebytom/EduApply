import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const App = ({ openChild, setOpenChild, setChildren, children }) => {
    const [loading, setLoading] = useState(false);
    const showModal = () => {
        setOpenChild(true);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpenChild(false);
        }, 3000);
    };
    const handleCancel = () => {
        setOpenChild(false);
    };

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', // 3 columns of equal width
        gridGap: '10px', // Gap between grid items
    };

    const [children1, setchildren1] = useState(JSON.parse(localStorage.getItem("children")) || [])


    return (
        <>
            <Modal
                open={openChild}
                title="Choose Child"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                ]}
            >
                <div className="mt-4 childGrid" style={gridContainerStyle}>
                    {
                        children1?.map(child => {
                            return (
                                <div className="d-flex flex-column btn border border-black align-items-center justify-content-center bg-light rounded"
                                    style={{ height: "150px", width: "150px" }} onClick={() => {
                                        setChildren([
                                            ...children,
                                            child
                                        ]);
                                        setOpenChild(false)
                                    }}>
                                    {
                                        child.gender === 'Male' ?
                                            <img src='/male.jpg' height="70px" />
                                            :
                                            <img src='/female.jpg' height="70px" />
                                    }
                                    <b>{child.name}, {child.age}</b>
                                    <p className='p-0 m-0' style={{ fontSize: "13px" }}>{child.dob}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </Modal>
        </>
    );
};
export default App;