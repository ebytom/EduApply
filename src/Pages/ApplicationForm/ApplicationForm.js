import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import FormSubmission from '../../Components/FormSubmission/FormSubmission';
import { PersonAddIcon } from '@primer/octicons-react';
import ChooseChild from '../../Components/ChooseChild/ChooseChild';

const ApplicationForm = () => {

    const loc = useLocation()
    const [open, setOpen] = useState(false);

    const [children, setChildren] = useState([])

    const [openChild, setOpenChild] = useState(false);

    return (
        <div className="p-3">
            <div className='bg-dark rounded p-3 d-flex text-white align-items-center justify-content-between'>
                <div className='text-white fs-5'><b>Online Application Form for Admission to {loc.state?.application?.class}</b></div>
                <div>{loc.state?.school.schoolname}, {loc.state?.school.city}</div>
            </div>
            <div className="p-3">
                <div>
                    <b>PARTICULARS OF THE APPLICATION (Father/ Mother/ Legal Guardian to Apply)</b>
                    <div className="d-flex gap-5 w-100 my-3">
                        <div className="w-100">
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Applicant's Name<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Contact Number<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                        </div>
                        <div className="w-100">
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Email Id<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <i>(for communication where Registration No. will be sent)</i>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <b>PARTICULARS OF THE CHILD</b>
                    <div className="mt-3 d-flex gap-3">
                        {
                            console.log(children)
                        }
                        {
                            children?.map(child => {
                                return (
                                    <div className="d-flex flex-column btn border border-black align-items-center justify-content-center bg-light rounded"
                                        style={{ height: "120px", width: "120px" }}>
                                        {
                                            child.gender === 'Male' ?
                                                <img src='/male.jpg' height="70px" />
                                                :
                                                <img src='/female.jpg' height="70px" />
                                        }
                                        <b>{child.name}, {child.age}</b>
                                        <p className='p-0 m-0' style={{ fontSize: "13px" }}>{child.dob}</p>
                                    </div>
                                )
                            })
                        }
                        <div className="d-flex btn border border-black align-items-center justify-content-center bg-light rounded"
                            onClick={() => setOpenChild(true)} style={{ height: "120px", width: "120px" }}>
                            <PersonAddIcon size={42} />
                        </div>
                    </div>
                    {/* <div className="d-flex gap-5 w-100 my-3">
                        <div className="w-100">
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Child's Name<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Gender<span className="text-danger">*</span></b>
                                <select className="w-100">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Date of Birth<span className="text-danger">*</span></b>
                                <input className="w-100" type="date" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Age as on 1st April 2023<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Religion<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Aadhaar Number<span className="text-danger">*</span></b>
                                <input className="w-100" type="date" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Category<span className="text-danger">*</span></b>
                                <div className="d-flex gap-2 fw-bold"><input className="w-50" type="radio" /> GEN</div>
                                <div className="d-flex gap-2 fw-bold"><input className="w-50" type="radio" /> SC</div>
                                <div className="d-flex gap-2 fw-bold"><input className="w-50" type="radio" /> ST</div>
                                <div className="d-flex gap-2 fw-bold"><input className="w-50" type="radio" /> OBC</div>
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Residential Address<span className="text-danger">*</span></b>
                                <textarea className="w-100" />
                            </div>
                        </div>
                        <div className="w-100">
                            <div className="d-flex gap-4 text-white justify-content-between bg-primary rounded p-3 my-2">
                                <b class="text-nowrap w-25">Photograph<span className="text-danger">*</span></b>
                                <input className="w-100" type="file" />
                            </div>
                            <div className="d-flex gap-4 text-white justify-content-between bg-primary rounded p-3 my-2">
                                <b class="text-nowrap w-25">Birth Certificate<span className="text-danger">*</span></b>
                                <input className="w-100" type="file" />
                            </div>
                            <div className="d-flex gap-4 text-white justify-content-between bg-primary rounded p-3 my-2">
                                <b class="text-nowrap w-25">Address Proof<span className="text-danger">*</span></b>
                                <input className="w-100" type="file" />
                            </div>
                        </div>
                    </div> */}
                </div>
                <hr />
                <div>
                    <b>PARTICULARS OF SIBLINGS STUDYING IN SCHOOL (Cousins will not be considered as siblings)</b>
                    <div className="d-flex gap-5 w-100 my-3">
                        <div className="w-100">
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Name</b>
                                <input className="w-100" />
                            </div>
                        </div>
                        <div className="w-100">
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Admission No.</b>
                                <input className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <b>PARTICULARS OF THE PARENTS</b>
                    <div className="d-flex gap-5 w-100 my-3">
                        <div className="w-100">
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Father's Name<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Mobile Number<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Email Address<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Qualification<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Organization<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Annual Income<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">PAN Card No.<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 text-white justify-content-between bg-primary rounded p-3 my-2">
                                <b class="text-nowrap w-25">Identity Proof<span className="text-danger">*</span></b>
                                <input className="w-100" type="file" />
                            </div>
                        </div>
                        <div className="w-100">
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Mother's Name<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Mobile Number<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Email Address<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Qualification<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Organization<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Annual Income<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">PAN Card No.<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 text-white justify-content-between bg-primary rounded p-3 my-2">
                                <b class="text-nowrap w-25">Identity Proof<span className="text-danger">*</span></b>
                                <input className="w-100" type="file" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <b>PARTICULARS OF LEGAL GUARDIAN, IF APPLICABLE (Document proof required)</b>
                    <div className="d-flex gap-5 w-100 my-3">
                        <div className="w-100">
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Name<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Mobile Number<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Email Address<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Qualification<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Organization<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">Annual Income<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50">PAN Card No.<span className="text-danger">*</span></b>
                                <input className="w-100" />
                            </div>
                            <div className="d-flex gap-4 text-white justify-content-between bg-primary rounded p-3 my-2">
                                <b class="text-nowrap w-25">Identity Proof<span className="text-danger">*</span></b>
                                <input className="w-100" type="file" />
                            </div>
                        </div>
                        <div className="w-100">
                            <i><b>Please Note:</b></i><br />
                            <i>1. Only aadhaar card/ voter ID will be considered as a valid proof of the parent/ legal guardian.</i><br />
                            <i>2. File size should not be more than 1MB, and only JPEG, GIF, PNG and PDF formats are allowed.</i><b />
                            <div className="gap-4 justify-content-between my-2">
                                <b class="text-nowrap w-50 mt-5">Any Other detail</b><br />
                                <textarea className="w-100 mt-2" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <b>Certificate</b>
                    <div className="d-flex w-100 my-3 text-wrap">
                        <input className="me-3" type="checkbox" />
                        <i>I hereby state that the informaton provided by me is true and that the onus of any false/incorrect information dhall rest entirely on me.
                            I fully understand that on accepting the Registration Form of my ward, the school is not in any way bound to grant admission as the admission is purely based on the availability of seats.
                            I also understand that the decision of the Principal regarding admission will be final and binding on me.</i>

                    </div>
                </div>
                <hr />
                <div className="d-flex w-100 justify-content-center">
                    <div className='btn btn-success p-3 px-5 fw-bold' onClick={() => setOpen(true)}>Submit Application</div>
                </div>
            </div>
            <FormSubmission setOpen={setOpen} open={open} school={loc.state.school} application={loc.state.application} />
            <ChooseChild setOpenChild={setOpenChild} openChild={openChild} setChildren={setChildren} children={children} />
        </div>
    )
}

export default ApplicationForm