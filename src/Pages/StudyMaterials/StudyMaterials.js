import React from 'react'
import VideoThumbnail from 'react-video-thumbnail'

const StudyMaterials = () => {
    return (
        <div className="p-4">
            <b className="fs-4">StudyMaterials</b>
            <div className="mt-3">
                <div className="p-2 px-4 rounded h-100 w-100" style={{ backgroundColor: "#001529" }}>
                    <b className="text-white">Class 1</b>
                </div>
                <div>
                    <div className="my-2 rounded d-flex gap-2">
                        <iframe
                            width='100%'
                            height='200px'
                            src="https://www.youtube.com/embed/CwwrCBJDulY"
                            frameBorder='0'
                            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            className='rounded'
                        ></iframe>

                        <iframe
                            width='100%'
                            height='200px'
                            src="https://www.youtube.com/embed/FbRl8rD4fGI"
                            frameBorder='0'
                            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            className='rounded'
                        ></iframe>

                        <iframe
                            width='100%'
                            height='200px'
                            src="https://www.youtube.com/embed/-RCRoGjAfOM"
                            frameBorder='0'
                            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            className='rounded'
                        ></iframe>

                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="p-2 px-4 rounded h-100 w-100" style={{ backgroundColor: "#001529" }}>
                    <b className="text-white">Class 2</b>
                </div>
                <div className="my-2 rounded d-flex gap-2">
                    <iframe
                        width='100%'
                        height='200px'
                        src="https://www.youtube.com/embed/CwwrCBJDulY"
                        frameBorder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        className='rounded'
                    ></iframe>

                    <iframe
                        width='100%'
                        height='200px'
                        src="https://www.youtube.com/embed/FbRl8rD4fGI"
                        frameBorder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        className='rounded'
                    ></iframe>

                    <iframe
                        width='100%'
                        height='200px'
                        src="https://www.youtube.com/embed/-RCRoGjAfOM"
                        frameBorder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        className='rounded'
                    ></iframe>

                </div>
            </div>
            <div className="mt-5">
                <div className="p-2 px-4 rounded h-100 w-100" style={{ backgroundColor: "#001529" }}>
                    <b className="text-white">Class 3</b>
                </div>
                <div className="my-2 rounded d-flex gap-2">
                    <iframe
                        width='100%'
                        height='200px'
                        src="https://www.youtube.com/embed/CwwrCBJDulY"
                        frameBorder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        className='rounded'
                    ></iframe>

                    <iframe
                        width='100%'
                        height='200px'
                        src="https://www.youtube.com/embed/FbRl8rD4fGI"
                        frameBorder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        className='rounded'
                    ></iframe>

                    <iframe
                        width='100%'
                        height='200px'
                        src="https://www.youtube.com/embed/-RCRoGjAfOM"
                        frameBorder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        className='rounded'
                    ></iframe>

                </div>
            </div>
        </div >
    )
}

export default StudyMaterials