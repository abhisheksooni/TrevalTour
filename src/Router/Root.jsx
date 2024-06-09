import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
function Root() {
    return (
        <div className="">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root