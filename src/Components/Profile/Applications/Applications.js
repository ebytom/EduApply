import { ArrowRightIcon } from '@primer/octicons-react';
import React, { useEffect, useState } from 'react'
import Track from '../../Track/Track';

const Applications = () => {

    const [applications, setapplications] = useState([])
    useEffect(() => {
        const storedApplications = JSON.parse(localStorage.getItem("applications"));

        if (storedApplications) {
            setapplications(storedApplications);
        }
    }, [])

    const [open, setOpen] = useState(false)

    var track = ""

    const openTrack = (trackId) => {
        track= String(trackId)
        setOpen(track)
    }

    return (
        <div className="p-3 w-100 rounded p-1" style={{ backgroundColor: "#eee", overflow: "auto" }}>
            {
                applications.length === 0 ?
                    <b className="text-secondary">No Applications Found</b>
                    :
                    applications?.map(app => {
                        return (
                            <div className='p-3 d-flex align-items-center justify-content-between bg-light w-100 rounded border border-2 my-2'>
                                <div className='d-flex align-items-center justify-content-between w-100'>
                                    <b>#{app?.timeStamp}</b>
                                    <div className='d-flex align-items-center w-50 justify-content-between'>
                                        <b>{app?.school?.schoolname}, {app?.school?.city}</b>
                                        <div className='ms-3 bg-secondary text-white rounded px-2'>{app?.course?.class}</div>
                                    </div>
                                    <div>
                                        <b>{new Date(app?.timeStamp).toLocaleDateString()}</b>
                                    </div>
                                    <div className="bg-light rounded btn p-0" onClick={() => openTrack(app?.timeStamp)}><ArrowRightIcon /></div>
                                </div>
                            </div>
                        )
                    })
            }
            <Track open={open} setOpen={setOpen} appId={track}/>
        </div>
    )
}

export default Applications