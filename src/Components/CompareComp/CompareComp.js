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