import { ArrowRightIcon, LocationIcon, SearchIcon } from '@primer/octicons-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {

    const [searchval, setsearchval] = useState("")
    const [tempsearchval, setTempsearchval] = useState("")
    const [locationSelected, setlocationSelected] = useState("")
    const [searchCity, setsearchCity] = useState("")

    const nav = useNavigate()

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


    return (
        <div className='d-flex p-4 w-100' >
            <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='d-flex align-items-baseline mt-4'>
                    <div><img src="bg1.png" className='w-100' /></div>
                    {/* <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                                <h2 className='my-5 mb-4'><b>Choose your city</b></h2>
                                <div className="d-flex">
                                    <div className='bg-light d-flex align-items-center p-2 border border-black rounded-3 mb-4'>
                                        <input onChange={(e) => setsearchCity(e.target.value)} className='bg-light' style={{ width: "500px", outline: "none", border: "none" }} type="search" />
                                    </div>
                                </div>
                            </div> */}
                    <div><img src="bg2.png" className='w-100' /></div>
                    <div><img src="bg1.png" className='w-100' /></div>
                    {/* <div><img src="bg2.png" className='w-100' /></div> */}
                </div>

                <div className="mt-4 d-flex flex-column align-items-center">
                    <b className='fs-5 d-flex' style={{ color: "#001529", textAlignLast: "center" }}>"Struggling to find the best school in your city? Don't worry, Alt Admissions is here to guide you. <br />Discover your perfect school with us!"</b>
                    <div onClick={() => nav('/schools')}
                        className="btn btn-primary rounded-5 px-5 py-2 w-25 mt-5 d-flex align-items-center gap-2 justify-content-center" style={{ minWidth: "100px" }}>
                        <b>Let's go</b>
                        <ArrowRightIcon size={24} />
                    </div>
                </div>

                {/* <div className='locGrid gap-4 w-100 px-5'>
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
                        </div> */}
            </div>
        </div >
    )
}

export default Home