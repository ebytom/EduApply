import { DeviceMobileIcon, FeedPersonIcon, GraphIcon, PeopleIcon, QuestionIcon, TableIcon } from '@primer/octicons-react'
import React from 'react'

const About = () => {
    return (
        <div className="p-4">
            <b className="fs-4">About Us</b>
            <div className="mt-3"><p>Welcome to altAdmission, your trusted platform for applying to different classes in various educational institutions and tracking your applications with ease.</p></div>
            <div class="about-us-section d-flex gap-4 w-100 mt-4">
                <div className="p-3 rounded w-25" style={{ backgroundColor: "#a7d1d7" }}>
                    <div className="d-flex gap-2 align-items-center">
                        <TableIcon size={30} />
                        <h2>Our Mission</h2>
                    </div>
                    <p>At altAdmission, our mission is to simplify the application process for students, parents, and educational institutions. We believe in making the journey towards education more accessible, efficient, and enjoyable.</p>
                </div>
                <div className="p-3 rounded w-25" style={{ backgroundColor: "#a7d1d7" }}>
                    <div className="d-flex gap-2 align-items-center">
                        <QuestionIcon size={30} />
                        <h2>AltAdmission?</h2>
                    </div>
                    <p>altAdmission is designed to streamline the application process, making it simpler and more convenient for everyone involved. With our user-friendly interface and powerful features, we aim to provide a seamless experience for applicants and educational institutions alike.</p>
                </div>
                <div className="p-3 rounded w-25" style={{ backgroundColor: "#a7d1d7" }}>
                    <div className="d-flex gap-2 align-items-center">
                        <PeopleIcon size={30} />
                        <h2>Our Team</h2>
                    </div>
                    <p>altAdmission is powered by a dedicated team of professionals who are passionate about education and technology. We are committed to delivering a top-notch user experience and continuously improving our platform to meet the evolving needs of our users.</p>
                </div>
                <div className="p-3 rounded w-25" style={{ backgroundColor: "#a7d1d7" }}>
                    <div className="d-flex gap-2 align-items-center">
                        <DeviceMobileIcon size={30} />
                        <h2 className="text-nowrap">Contact Us</h2>
                    </div>
                    <p>If you have any questions, suggestions, or need assistance, please feel free to contact us. We are here to help!</p>
                </div>

            </div>
        </div>
    )
}

export default About