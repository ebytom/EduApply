import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'

const Login = () => {

    const { user, setUser } = useContext(UserContext)

    const [login, setlogin] = useState(true)

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [mob, setmob] = useState("")
    const [pass, setpass] = useState("")

    useEffect(() => {
        if (localStorage.getItem("signedUser")) {
            console.log(localStorage.getItem("signedUser"));
            setUser(JSON.parse(localStorage.getItem("signedUser")))
        }
    }, [])


    const signUp = () => {
        const userDetails = {
            name: name,
            email: email,
            mob: mob,
            pass: pass
        }
        if (name && email && pass && mob) {
            localStorage.setItem(email, JSON.stringify(userDetails))
            window.confirm('Signed Up Successfully') &&
                setlogin(true)
        }
        else {
            window.alert("Feilds are missing!!")
        }
    }

    const Login = () => {
        if (localStorage.getItem(email)) {
            const storedUser = JSON.parse(localStorage.getItem(email))
            console.log(storedUser);
            if (storedUser.pass === pass) {
                localStorage.setItem("signedUser", JSON.stringify(storedUser))
                setUser(storedUser)
            }
            else {
                window.alert("Invalid Credentials!!")
            }
        }
        else {
            window.alert("Invalid Credentials!!")
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <section class=" w-75 p-2 p-md-2 p-xl-3">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 bsb-tpl-bg-platinum rounded border border-black text-white" style={{ backgroundColor: "#a7d1d7" }}>
                            <div class="d-flex flex-column justify-content-between h-100 p-3 p-md-4 p-xl-5">
                                <h3 class="m-0 fw-bold  text-black">Welcome!</h3>
                                <img class="img-fluid rounded mx-auto my-4 w-100" loading="lazy" src="altAdmission.jpg" />
                                {
                                    login ?
                                        <p class="mb-0 fw-bold text-black">Not a member yet? <a onClick={() => setlogin(false)} class="link-secondary text-decoration-none text-danger fw-bold btn">Register now</a></p>
                                        :
                                        <p class="mb-0 fw-bold text-black">Already a member yet? <a onClick={() => setlogin(true)} class="link-secondary text-decoration-none text-danger fw-bold btn">Login now</a></p>
                                }
                            </div>
                        </div>
                        <div class="col-12 col-md-6 bsb-tpl-bg-lotion border border-1 rounded border-black">
                            {
                                login ?
                                    <div class="p-3 p-md-4 p-xl-5">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="mb-5">
                                                    <h3>Log in</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <form action="#!">
                                            <div class="row gy-3 gy-md-4 overflow-hidden">
                                                <div class="col-12">
                                                    <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                                                    <input type="email" onChange={e => setemail(e.target.value)} class="form-control" name="email" id="email" placeholder="name@example.com" required />
                                                </div>
                                                <div class="col-12">
                                                    <label for="password" class="form-label">Password <span class="text-danger">*</span></label>
                                                    <input type="password" onChange={e => setpass(e.target.value)} class="form-control" name="password" id="password" required />
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" />
                                                        <label class="form-check-label text-secondary" for="remember_me">
                                                            Keep me logged in
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button class="btn bsb-btn-xl btn-primary" type="submit" onClick={Login}>Log in now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="row">
                                            <div class="col-12">
                                                <hr class="mt-2 mb-4 border-secondary-subtle" />
                                                <div class="text-end">
                                                    <a href="#!" class="link-secondary text-decoration-none">Forgot password</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <p class="mt-0 mb-4">Or sign in with</p>
                                                <div class="d-flex gap-3 flex-column flex-xl-row">
                                                    <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                        </svg>
                                                        <span class="ms-2 fs-6">Google</span>
                                                    </a>
                                                    <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                        </svg>
                                                        <span class="ms-2 fs-6">Facebook</span>
                                                    </a>
                                                    <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                        </svg>
                                                        <span class="ms-2 fs-6">Twitter</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div class="p-3 p-md-4 p-xl-5">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="mb-5">
                                                    <h3>Sign Up</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <form action="#!">
                                            <div class="row gy-3 gy-md-4 overflow-hidden">
                                                <div class="col-12">
                                                    <label for="email" class="form-label">Full Name <span class="text-danger">*</span></label>
                                                    <input onChange={e => setname(e.target.value)} class="form-control" placeholder="" required />
                                                </div>
                                                <div class="col-12">
                                                    <label for="email" class="form-label">Mobile <span class="text-danger">*</span></label>
                                                    <input onChange={e => setmob(e.target.value)} class="form-control" placeholder="1234567890" required />
                                                </div>
                                                <div class="col-12">
                                                    <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                                                    <input type="email" onChange={e => setemail(e.target.value)} class="form-control" name="email" id="email" placeholder="name@example.com" required />
                                                </div>
                                                <div class="col-12">
                                                    <label for="password" class="form-label">Password <span class="text-danger">*</span></label>
                                                    <input type="password" onChange={e => setpass(e.target.value)} class="form-control" name="password" id="password" required />
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button onClick={signUp} class="btn bsb-btn-xl btn-primary" type="submit">Sign up now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                            }

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login