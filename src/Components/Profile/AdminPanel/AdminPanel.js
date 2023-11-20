import { ArrowRightIcon } from '@primer/octicons-react';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../App';

const AdminPanel = () => {

    const [applications, setapplications] = useState([])
    useEffect(() => {
        const storedApplications = JSON.parse(localStorage.getItem("applications"));

        if (storedApplications) {
            setapplications(storedApplications);
        }
    }, [])

    const { user } = useContext(UserContext)


    var track = ""
    const [open, setOpen] = useState(false)


    const openTrack = (trackId) => {
        track = String(trackId)
        setOpen(track)
    }

    return (
        <div className="p-3 w-100 rounded p-1" style={{ backgroundColor: "#eee", overflow: "auto" }}>
            {
                user.email === "admin@mail.com" ?
                    (
                        applications.length === 0 ?
                            <b className="text-secondary">No Applications Found</b>
                            :
                            applications?.map(app => {
                                return (
                                    <div className='p-3 d-flex align-items-center justify-content-between bg-light w-100 rounded border border-2 my-2'>
                                        < div className='d-flex align-items-center justify-content-between w-100'>
                                            <b>#{app?.timeStamp}</b>
                                            <div className='d-flex align-items-center w-50 justify-content-between'>
                                                <b>{app?.school?.schoolname}, {app?.school?.city}</b>
                                                <div className='ms-3 bg-secondary text-white rounded px-2'>{app?.course?.class}</div>
                                            </div>
                                            <div>
                                                <b>{new Date(app?.timeStamp).toLocaleDateString()}</b>
                                            </div>
                                            <div className='ms-3 bg-danger text-white rounded px-2'>Pending</div>

                                            {/* <div className="bg-light rounded btn p-0" onClick={() => openTrack(app?.timeStamp)}><ArrowRightIcon /></div>
                                     */}
                                        </div>
                                    </div>
                                )
                            })
                    )
                    :
                    <div>
                        <h5 className="text-danger fw-bold">You Don't have access to this page!</h5>
                    </div>
            }
        </div >
    )
}

export default AdminPanel