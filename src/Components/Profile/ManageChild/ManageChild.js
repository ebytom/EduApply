import React, { useState } from 'react'
import AddChild from '../../AddChild/AddChild'
import { PersonAddIcon } from '@primer/octicons-react'

const ManageChild = () => {

  const [open, setOpen] = useState(false)
  const [children, setchildren] = useState(JSON.parse(localStorage.getItem("children")) || [])

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', // 3 columns of equal width
    gridGap: '10px', // Gap between grid items
  };

  return (
    <div className="p-3 w-100 rounded" style={{ backgroundColor: "#eee" }}>
      <h5 className='fw-bold'>Manage Child</h5>
      <div className="mt-4 childGrid" style={gridContainerStyle}>
        {
          children?.map(child => {
            return (
              <div className="d-flex flex-column btn border border-black align-items-center justify-content-center bg-light rounded"
                style={{ height: "150px", width: "150px" }}>
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
          onClick={() => setOpen(true)} style={{ height: "150px", width: "150px" }}>
          <PersonAddIcon size={42} />
        </div>
      </div>
      <AddChild open={open} setOpen={setOpen} />
    </div >
  )
}

export default ManageChild