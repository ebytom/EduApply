import { InboxIcon, PersonAddIcon, PersonFillIcon, PersonIcon } from '@primer/octicons-react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'
import Track from '../Track/Track'

const Header = () => {

    const nav = useNavigate()

    const { user } = useContext(UserContext)

    const [open, setOpen] = useState(false);


    return (
        <div className='d-flex w-100 p-2 px-4 justify-content-between border border-black' style={{ height: "80px", width: "100vw", borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px", background: "#b4d0d4" }}>
            <div className='d-flex align-items-center'>
                <img src='/altAdmission.jpg' className='rounded-3' height={"60px"} />
                {/* <select className='ms-3 rounded-3 text-black bg-white' style={{ width: "150px", height: "50px" }}>
                    <option><b>📌 Select City</b></option>
                    <option>Bangalore</option>
                    <option>Kochi</option>
                    <option>Hyderabad</option>
                    <option>Chennai</option>
                </select> */}
            </div>
            {/* <div className='d-flex gap-3 p-2 rounded-3' style={{ border: "2px solid white" }}>
                <div className='btn btn-success rounded-2 d-flex justify-content-center align-items-center'><b>Explore Schools</b></div>
                <div className='btn btn-success rounded-2 d-flex justify-content-center align-items-center'><b>Admission</b></div>
                <div className='btn btn-success rounded-2 d-flex justify-content-center align-items-center'><b>Tracker</b></div>
                <div className='btn btn-success rounded-2 d-flex justify-content-center align-items-center'><b>About Us</b></div>
            </div> */}
            <div className='d-flex gap-3 p-2 text-black rounded-3'>
                <div className='btn btn-black text-black rounded-2 d-flex justify-content-center align-items-center'
                    onClick={() => nav("/")} style={window.location.pathname === "/" ? { background: "white" } : {}}><b>Explore Schools</b></div>
                <div className='btn btn-black text-black rounded-2 d-flex justify-content-center align-items-center'
                    onClick={() => setOpen(true)} style={window.location.pathname === "/admission" ? { background: "white" } : {}}><b>Admission Tracker</b></div>
                <div className='btn btn-black text-black rounded-2 d-flex justify-content-center align-items-center'
                    onClick={() => nav("/about")} style={window.location.pathname === "/about" ? { background: "white" } : {}}><b>About Us</b></div>
            </div>
            <div className='d-flex text-white align-items-center gap-3'>
                {/* <div className='btn btn-danger p-2 rounded-5'><InboxIcon fill='white' size={26} /></div> */}
                {
                    user ?
                        <div className='d-flex gap-2 rounded-3 align-items-center'>
                            <div className='d-flex align-items-center btn gap-2' style={{ background: "#000" }} onClick={() => nav("/profile")}><PersonIcon fill='#fff' size={22} /> <b className='text-white'>Profile</b></div>
                        </div>
                        :
                        <div className='d-flex gap-2 rounded-3 align-items-center'>
                            <div className='d-flex align-items-center btn gap-2 border border-white' style={{ background: "#000" }} onClick={() => nav("/login")} ><PersonIcon fill='#fff' size={22} /> <b className='text-white'>Login</b></div>
                            <div className='d-flex align-items-center btn gap-2 border border-white' style={{ background: "#000" }}><PersonAddIcon fill='#fff' size={22} /><b className='text-white'>Register</b></div>
                        </div>
                }

            </div>
            <Track open={open} setOpen={setOpen} />
        </div>
    )
}

export default Header