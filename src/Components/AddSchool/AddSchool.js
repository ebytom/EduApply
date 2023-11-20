import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react'

const AddSchool = ({ open, setOpen, setselectedSchool }) => {


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

    const [searchVal, setsearchVal] = useState("")

    const [school, setSchool] = useState([
        {
            "schoolname": "Maple High School",
            "city": "New York",
            "board": "Public",
            "cost": 10000,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/67/Lebanon_High_School_Kentucky.jpg"
        },
        {
            "schoolname": "Rosewood Academy",
            "city": "Los Angeles",
            "board": "Private",
            "cost": 20000,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/67/Lebanon_High_School_Kentucky.jpg"
        },
        {
            "schoolname": "Pinecrest Elementary",
            "city": "Chicago",
            "board": "Public",
            "cost": 8000,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/67/Lebanon_High_School_Kentucky.jpg"
        },
        {
            "schoolname": "Sunset Preparatory School",
            "city": "Miami",
            "board": "Private",
            "cost": 25000,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/67/Lebanon_High_School_Kentucky.jpg"
        },
        {
            "schoolname": "Green Valley High",
            "city": "San Francisco",
            "board": "Public",
            "cost": 9000,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/67/Lebanon_High_School_Kentucky.jpg"
        },
        {
            "schoolname": "Elite Academy",
            "city": "Houston",
            "board": "Private",
            "cost": 22000,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/67/Lebanon_High_School_Kentucky.jpg"
        },
        {
            "schoolname": "Meadowbrook Middle School",
            "city": "Dallas",
            "board": "Public",
            "cost": 7500,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/67/Lebanon_High_School_Kentucky.jpg"
        },
        {
            "schoolname": "Harborview Prep",
            "city": "Seattle",
            "board": "Private",
            "cost": 24000,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/67/Lebanon_High_School_Kentucky.jpg"
        }
    ])

    return (
        <Modal
            open={open}
            title="Add School"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
            ]}
        >
            <div className="my-3">
                <input type="search" className="w-100 rounded p-1" onChange={e => setsearchVal(e.target.value)} />
                <hr></hr>
                <div>
                    {
                        school.filter(school => school.schoolname.toLowerCase().includes(searchVal)).map((sch, index) => {
                            return (
                                <div onClick={() => { setselectedSchool(index + 1); setOpen(false) }} className="my-1 bg-light rounded p-1 py-2 btn w-100">
                                    <b>{sch.schoolname}</b>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Modal>
    )
}

export default AddSchool