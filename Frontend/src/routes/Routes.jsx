import React from 'react'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import RegisterComplaint from '../pages/RegisterComplaint'
import ComplaintDetails from '../pages/RegisterComplaint/ComplaintDetails'
import Explore from '../pages/Explore'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import Contact from '../pages/Contact'
import About from '../pages/About'

import { Routes, Route } from "react-router-dom";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/register' element={<RegisterComplaint />} />
            <Route path='/complaint/:id' element={<ComplaintDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />

        </Routes>
    )
}

export default Routers