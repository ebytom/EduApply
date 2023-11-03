import { LocationIcon, SearchIcon } from '@primer/octicons-react'
import React, { useState } from 'react'
import FilterComp from '../../Components/FilterComp/FilterComp'
import SchoolCard from '../../Components/SchoolCard/SchoolCard'

const Home = () => {

    const [searchval, setsearchval] = useState("")
    const [tempsearchval, setTempsearchval] = useState("")
    const [locationSelected, setlocationSelected] = useState("")
    const [searchCity, setsearchCity] = useState("")

    const [cities, setCities] = useState([
        "Bangalore",
        "Hyderabad",
        "Chennai",
        "Mumbai",
        "Delhi",
        "Goa",
        "Kochi",
        "Madurai",
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Philadelphia",
        "Phoenix",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose",
        "Austin",
        "Jacksonville",
        "San Francisco",
        "Columbus",
        "Indianapolis",
        "Seattle",
        "Denver",
        "Washington",
        "Boston",
        "El Paso",
        "Nashville",
        "Las Vegas",
        "Portland",
        "Louisville",
        "Oklahoma City",
        "Milwaukee",
        "Albuquerque",
        "Tucson",
        "Fresno",
        "Sacramento",
        "Kansas City",
        "Long Beach",
        "Mesa",
        "Atlanta",
        "Colorado Springs",
        "Virginia Beach",
        "Raleigh",
        "Omaha",
        "Miami",
        "Tulsa"
    ]);


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
        <div className='d-flex p-4 w-100' >
            {
                locationSelected ?
                    <>
                        <div className='bg-black p-2 rounded' style={{ overflow: "hidden", minHeight: "600px" }}>
                            <b className='text-white'>Filter</b>
                            <hr className='text-white' />
                            <div className='btn btn-danger w-100 p-0 py-1 mb-3' onClick={() => setlocationSelected("")}>Change City</div>
                            <div className='mb-3 text-secondary'>
                                Distance Range
                                <div className='d-flex gap-2 text-white mt-2'><b>10 </b><input type="range" className="w-100" /><b> 100</b></div>
                            </div>
                            <FilterComp />
                        </div>
                        <div className='px-3 w-100'>
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
                    </>
                    :
                    <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                        <div className='d-flex align-items-baseline'>
                            <div><img src="bg1.png" className='w-100' /></div>
                            <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                                <h2 className='my-5 mb-4'><b>Choose your city</b></h2>
                                <div className="d-flex">
                                    <div className='bg-light d-flex align-items-center p-2 border border-black rounded-3 mb-4'>
                                        <input onChange={(e) => setsearchCity(e.target.value)} className='bg-light' style={{ width: "500px", outline: "none", border: "none" }} type="search" />
                                    </div>
                                </div>
                            </div>
                            <div><img src="bg2.png" className='w-100' /></div>
                        </div>
                        <div className='locGrid gap-4 w-100 px-5'>
                            {
                                cities.filter(city => city.toLowerCase().includes(searchCity.toLowerCase())).slice(0, 20).map(city => {
                                    return (
                                        <div onClick={() => setlocationSelected(city)} style={{ background: "#b4d0d4", boxShadow: "2px 3px 7px 0px #bebebe" }} className='d-flex btn align-items-center border border-black rounded'>
                                            <LocationIcon size={26} />
                                            <b className='ms-2 fs-6'>{city}</b>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
            }


        </div >
    )
}

export default Home