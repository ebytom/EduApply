import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { UserContext } from '../App'
import Home from '../Pages/Home/Home'
import Header from '../Components/Header/Header'
import Profile from '../Pages/Profile/Profile'
import Login from '../Pages/Login/Login'
import Apply from '../Pages/Apply/Apply'
import ApplicationForm from '../Pages/ApplicationForm/ApplicationForm'
import About from '../Pages/About/About'
import QuestionBank from '../Pages/QuestionBank/QuestionBank'
import StudyMaterials from '../Pages/StudyMaterials/StudyMaterials'
import Schools from '../Pages/Schools/Schools'

const Routes = () => {

    const { user } = useContext(UserContext)

    return (
        <div className='flex-column w-100'>
            <BrowserRouter>
                <Header />
                {
                    user ?
                        <Switch>
                            <Route path="/home" element={<Home />} />
                            <Route path="/admission" element={<Home />} />
                            <Route path="/tracker" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/profile/*" element={<Profile />} />
                            <Route path="/apply" element={<Apply />} />
                            <Route path="/questionBank" element={<QuestionBank />} />
                            <Route path="/studyMaterials" element={<StudyMaterials />} />
                            <Route path="/applicationForm" element={<ApplicationForm />} />
                            <Route path="/schools" element={<Schools />} />
                            <Route path="/*" element={<Home />} />
                        </Switch>
                        :
                        <Switch>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/schools" element={<Schools />} />
                            <Route path="/admission" element={<Home />} />
                            <Route path="/tracker" element={<Home />} />
                            <Route path="/questionBank" element={<QuestionBank />} />
                            <Route path="/studyMaterials" element={<StudyMaterials />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/*" element={<Login />} />
                        </Switch>
                }
            </BrowserRouter>
        </div>
    )
}

export default Routes