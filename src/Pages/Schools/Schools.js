import React, { useState } from 'react'
import FilterComp from '../../Components/FilterComp/FilterComp'
import SchoolCard from '../../Components/SchoolCard/SchoolCard'
import { SearchIcon } from '@primer/octicons-react'

const Schools = () => {

    const [searchval, setsearchval] = useState("")
    const [tempsearchval, setTempsearchval] = useState("")
    const [locationSelected, setlocationSelected] = useState("")
    const [searchCity, setsearchCity] = useState("")

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
        <div className="d-flex p-4">
            <div className='bg-black p-2 rounded' style={{ overflow: "hidden", minHeight: "600px" }}>
                <b className='text-white'>Filter</b>
                <hr className='text-white' />
                {/* <div className='btn btn-danger w-100 p-0 py-1 mb-3' onClick={() => setlocationSelected("")}>Change City</div> */}
                <div className='mb-3 text-secondary'>
                    Distance Range
                    <div className='d-flex gap-2 text-white mt-2'><b>10 </b><input type="range" className="w-100" /><b> 100</b></div>
                </div>
                <FilterComp />
            </div>
            <div className='px-4 w-100'>
                <div className='d-flex align-items-center gap-3'>
                    <b>Search Schools</b>
                    <div className="d-flex">
                        <div className='bg-light d-flex align-items-center ps-3 border' style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                            <input onChange={(e) => setTempsearchval(e.target.value)} className='bg-light' style={{ width: "400px", outline: "none", border: "none" }} type="search" />
                        </div>
                        <div className='btn btn-danger p-2 px-4 text-white' onClick={() => setsearchval(tempsearchval)} style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>
                            <SearchIcon size={20} />
                            <b className='ms-2'>Search</b>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='grid-container'>
                    {
                        school
                            .filter((school) => school.schoolname.toLowerCase().includes(searchval))
                            .map((school, index) => (
                                <SchoolCard
                                    key={index}
                                    data={school}
                                />
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Schools
