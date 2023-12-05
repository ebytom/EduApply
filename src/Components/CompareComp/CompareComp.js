import { PlusCircleIcon } from '@primer/octicons-react'
import React, { useState } from 'react'
import AddSchool from '../AddSchool/AddSchool'

const CompareComp = () => {

    const [selectedSchool, setselectedSchool] = useState("")
    const [open, setOpen] = useState(false)

    console.log(selectedSchool);

    const [school, setSchool] = useState([
        {},
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
        <div className='w-100'>
            {
                selectedSchool != "" ?
                    <div className='bg-light rounded p-3'>
                        <img src={school[selectedSchool].imageUrl} className='w-100 rounded' height="100px" style={{ objectFit: "cover" }} />
                        <div className='px-3 mt-3'>
                            <div className='d-flex justify-content-between my-1' style={{ borderBottom: "1px solid #ddd" }}>
                                <h6>School Name</h6>
                                <h6>{school[selectedSchool].schoolname}</h6>
                            </div>
                        </div>
                        <div className='px-3 mt-3'>
                            <div className='d-flex justify-content-between my-1' style={{ borderBottom: "1px solid #ddd" }}>
                                <h6>Board</h6>
                                <h6>{school[selectedSchool].board}</h6>
                            </div>
                        </div>
                        <div className='px-3 mt-3'>
                            <div className='d-flex justify-content-between my-1' style={{ borderBottom: "1px solid #ddd" }}>
                                <h6>City</h6>
                                <h6>{school[selectedSchool].city}</h6>
                            </div>
                        </div>
                        <div className='px-3 mt-3'>
                            <div className='d-flex justify-content-between my-1' style={{ borderBottom: "1px solid #ddd" }}>
                                <h6>Fee Structure</h6>
                                <h6>{school[selectedSchool].cost}</h6>
                            </div>
                        </div>
                    </div>
                    :
                    <div onClick={() => setOpen(true)} className="bg-light rounded p-3 d-flex justify-content-center btn" style={{ border: "2px dashed black" }}>
                        <PlusCircleIcon size={42} />
                    </div>
            }
            <AddSchool open={open} setOpen={setOpen} setselectedSchool={setselectedSchool} />
        </div>
    )
}

export default CompareComp