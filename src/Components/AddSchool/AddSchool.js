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