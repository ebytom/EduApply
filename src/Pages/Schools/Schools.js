import React, { useState } from 'react'
import FilterComp from '../../Components/FilterComp/FilterComp'
import SchoolCard from '../../Components/SchoolCard/SchoolCard'
import { SearchIcon } from '@primer/octicons-react'
import { useNavigate } from 'react-router-dom'

const Schools = () => {

    const [searchval, setsearchval] = useState("")
    const [tempsearchval, setTempsearchval] = useState("")
    const [locationSelected, setlocationSelected] = useState("")
    const [searchCity, setsearchCity] = useState("")

    const nav = useNavigate()

    const [school, setSchool] = useState([
        {
            "schoolname": "National Public School",
            "city": "Bangalore",
            "board": "Public",
            "cost": 150000,
            "imageUrl": "https://npseast.com/img/homepage/NVT_School_View_04.jpg"
        },
        {
            "schoolname": "New Horizon Public School",
            "city": "Bangalore",
            "board": "Public",
            "cost": 125000,
            "imageUrl": "https://www.galaxyeduworld.com/storage/college_page/5db931acac466_1.jpg"
        },
        {
            "schoolname": "Delhi Public School",
            "city": "Bangalore",
            "board": "Public",
            "cost": 135000,
            "imageUrl": "https://boardingschoolsofindia.com/wp-content/uploads/2018/02/Delhi-Public-School-New-Delhi.jpg"
        },
        {
            "schoolname": "The Deens Academy",
            "city": "Bangalore",
            "board": "Public",
            "cost": 145000,
            "imageUrl": "https://www.deenscollege.com/wp-content/uploads/2022/06/pulatest.jpg"
        },
        {
            "schoolname": "Christ Academy",
            "city": "Bangalore",
            "board": "Public",
            "cost": 95000,
            "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipNI4r45_q0b9WKThc1AZYX3pl_0-HYRbj7206JA=w1080-k-no"
        },
        {
            "schoolname": "Iris Florets World School",
            "city": "Hyderabad",
            "board": "Public",
            "cost": 135000,
            "imageUrl": "https://www.irisfloretsworldschool.com/wp-content/uploads/2023/05/Iris-Florets-Best-CBSE-School-in-Gajularamaram-Hyderabad-building.jpg"
        },
        {
            "schoolname": "Dhatrak Model School",
            "city": "Hyderabad",
            "board": "Public",
            "cost": 125000,
            "imageUrl": "https://images.jdmagicbox.com/comp/hyderabad/g3/040pxx40.xx40.170310152914.z7g3/catalogue/dhatrak-model-school-suchitra-cross-road-hyderabad-schools-e69hfmf9z8.jpg"
        },
        {
            "schoolname": "St Peter's High School",
            "city": "Hyderabad",
            "board": "Public",
            "cost": 115000,
            "imageUrl": "https://stpetersschoolbangalore.com/assets/img/new-img/st-peters-cover.png"
        },
        {
            "schoolname": "Sri Sadeesha School",
            "city": "Hyderabad",
            "board": "Public",
            "cost": 110000,
            "imageUrl": "https://images.jdmagicbox.com/comp/hyderabad/w5/040pxx40.xx40.161118120237.j4w5/catalogue/the-creek-planet-school-neptune-campus-kukatpally-hyderabad-schools-0kl0rmkvuf.jpg?clr=#3d3329"
        },
        {
            "schoolname": "Chinmaya Vidyalaya",
            "city": "Chennai",
            "board": "Public",
            "cost": 140000,
            "imageUrl": "https://www.chinmayavaduthala.edu.in/images/School-View.jpg"
        },
        {
            "schoolname": "KRM Public School",
            "city": "Chennai",
            "board": "Public",
            "cost": 125000,
            "imageUrl": "https://yellowslate.com/blog/wp-content/uploads/2020/02/2022-03-22.jpg"
        },
        {
            "schoolname": "Sishya School",
            "city": "Chennai",
            "board": "Public",
            "cost": 115000,
            "imageUrl": "https://yellowslate.com/blog/wp-content/uploads/2020/02/DSC05666.jpg"
        },
        {
            "schoolname": "Bharatiya Vidya Bhavan School",
            "city": "Chennai",
            "board": "Public",
            "cost": 110000,
            "imageUrl": "https://yellowslate.com/blog/wp-content/uploads/2020/02/2017-12-10.jpg"
        }])

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
                    <div onClick={() => nav('/compare')} className='btn btn-primary p-2'>
                        <b>Compare Schools</b>
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
