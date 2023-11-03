import { Button, Modal } from 'antd';
import React, { useState } from 'react'

const AddChild = ({ open, setOpen }) => {


    const [loading, setLoading] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setLoading(true);

        const data = {
            name: childName,
            gender: gender,
            age: age,
            dob: dateOfBirth
        }

        // Retrieve the existing children data from localStorage and parse it
        const storedChildren = JSON.parse(localStorage.getItem('children')) || [];

        // Push the new data into the existing array
        storedChildren.push(data);

        // Store the updated children data back in localStorage
        localStorage.setItem('children', JSON.stringify(storedChildren));

        setOpen(false);
        setLoading(false)
        window.location.reload()
    };

    const handleCancel = () => {
        setOpen(false);
    };



    const [childName, setChildName] = useState('');
    const [gender, setGender] = useState('Male');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [age, setAge] = useState('');
    const [religion, setReligion] = useState('');
    const [aadhaarNumber, setAadhaarNumber] = useState('');
    const [category, setCategory] = useState('GEN');
    const [address, setAddress] = useState('');

    const handleChildNameChange = (e) => {
        setChildName(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleDateOfBirthChange = (e) => {
        setDateOfBirth(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleReligionChange = (e) => {
        setReligion(e.target.value);
    };

    const handleAadhaarNumberChange = (e) => {
        setAadhaarNumber(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    return (
        <Modal
            open={open}
            title="PARTICULARS OF THE CHILD"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                    Submit
                </Button>
            ]}
            width={1000}
        >
            <div className="my-3">
                <div className="d-flex gap-5 w-100 my-3">
                    <div className="w-75">
                        <div className="d-flex gap-4 justify-content-between my-2">
                            <b className="text-nowrap w-50">Child's Name<span className="text-danger">*</span></b>
                            <input className="w-100" value={childName} onChange={handleChildNameChange} />
                        </div>
                        <div className="d-flex gap-4 justify-content-between my-2">
                            <b className="text-nowrap w-50">Gender<span className="text-danger">*</span></b>
                            <select className="w-100" value={gender} onChange={handleGenderChange}>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="d-flex gap-4 justify-content-between my-2">
                            <b className="text-nowrap w-50">Date of Birth<span className="text-danger">*</span></b>
                            <input className="w-100" type="date" value={dateOfBirth} onChange={handleDateOfBirthChange} />
                        </div>
                        <div className="d-flex gap-4 justify-content-between my-2">
                            <b className="text-nowrap w-50">Age as on 1st April 2023<span className="text-danger">*</span></b>
                            <input className="w-100" value={age} onChange={handleAgeChange} />
                        </div>
                        <div className="d-flex gap-4 justify-content-between my-2">
                            <b className="text-nowrap w-50">Religion<span className="text-danger">*</span></b>
                            <input className="w-100" value={religion} onChange={handleReligionChange} />
                        </div>
                        <div className="d-flex gap-4 justify-content-between my-2">
                            <b className="text-nowrap w-50">Aadhaar Number<span className="text-danger">*</span></b>
                            <input className="w-100" value={aadhaarNumber} onChange={handleAadhaarNumberChange} />
                        </div>
                        <div className="d-flex gap-4 justify-content-between my-2">
                            <b className="text-nowrap w-50">Category<span className="text-danger">*</span></b>
                            <div className="d-flex gap-2 fw-bold">
                                <input
                                    className="w-50"
                                    type="radio"
                                    value="GEN"
                                    checked={category === "GEN"}
                                    onChange={handleCategoryChange}
                                /> GEN
                            </div>
                            <div className="d-flex gap-2 fw-bold">
                                <input
                                    className="w-50"
                                    type="radio"
                                    value="SC"
                                    checked={category === "SC"}
                                    onChange={handleCategoryChange}
                                /> SC
                            </div>
                            <div className="d-flex gap-2 fw-bold">
                                <input
                                    className="w-50"
                                    type="radio"
                                    value="ST"
                                    checked={category === "ST"}
                                    onChange={handleCategoryChange}
                                /> ST
                            </div>
                            <div className="d-flex gap-2 fw-bold">
                                <input
                                    className="w-50"
                                    type="radio"
                                    value="OBC"
                                    checked={category === "OBC"}
                                    onChange={handleCategoryChange}
                                /> OBC
                            </div>
                        </div>
                        <div className="d-flex gap-4 justify-content-between my-2">
                            <b className="text-nowrap w-50">Residential Address<span className="text-danger">*</span></b>
                            <textarea className="w-100" value={address} onChange={handleAddressChange} />
                        </div>
                    </div>
                    <div className="w-25">
                        <div className="gap-4 text-white justify-content-between bg-secondary rounded p-3 my-2">
                            <b class="text-nowrap w-25 mb-2">Photograph<span className="text-danger">*</span></b>
                            <input className="w-100 mt-2" type="file" />
                        </div>
                        <div className="gap-4 text-white justify-content-between bg-secondary rounded p-3 my-2">
                            <b class="text-nowrap w-25 mb-2">Birth Certificate<span className="text-danger">*</span></b>
                            <input className="w-100  mt-2" type="file" />
                        </div>
                        <div className="gap-4 text-white justify-content-between bg-secondary rounded p-3 my-2">
                            <b class="text-nowrap w-25 mb-2">Address Proof<span className="text-danger">*</span></b>
                            <input className="w-100  mt-2" type="file" />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default AddChild