import React, { useContext } from 'react'
import { UserContext } from '../../../App'

const Personal = () => {

    const { user, setUser } = useContext(UserContext)

    const logout = () => {
        if (window.confirm("Are you sure ?")) {
            localStorage.removeItem('signedUser')
            setUser(null)
        }
    }

    return (
        <section className="w-100 rounded" style={{ backgroundColor: "#eee" }}>
            <div class="container py-5">

                <div class="row">
                    <div class="col-lg-4">
                        <div class="card mb-4 py-3">
                            <div class="card-body text-center">
                                <img src="https://th.bing.com/th/id/OIP._6kSqsTmX5o4yeSjGnw48AHaLH?pid=ImgDet&rs=1" alt="avatar"
                                    class="rounded-circle img-fluid" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                                <h5 class="my-3">{user?.name}</h5>
                                <p class="text-muted mb-1">Parent</p>
                                <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                {/* <div class="d-flex justify-content-center mb-2">
                      <button type="button" class="btn btn-primary">Follow</button>
                      <button type="button" class="btn btn-outline-primary ms-1">Message</button>
                    </div> */}
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-8">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Full Name</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{user?.name}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Email</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{user?.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Phone</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{user?.mob}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Mobile</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{user?.mob}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Address</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn btn-danger w-100" onClick={logout}>Sign Out</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Personal