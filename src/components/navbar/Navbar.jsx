import React, { useRef, useState } from 'react'
import { NavLink } from "react-router-dom";
import { EllipsisVertical, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function Navbar() {

  const [MenuShow, SetMenuShow] = useState(false)
gsap.registerPlugin(useGSAP)
const container = useRef();
// useGSAP(() => {
//   // gsap code here...
//   gsap.to(".box", {x: 100}); // <-- automatically reverted

// }, { scope: container }); // <-- easily add a scope for selector text (optional)



  return (
    <>


      {/* md screen on */}
      <nav className=' hidden lg:flex gap-5  items-center justify-between px-[7vw] py-6 sticky top-0 z-50 bg-color4/60 backdrop-blur-md'>
        <NavLink to={"/"} className=" text-2xl font-medium flex">  <span className='text-color6 font-bold'>Treval</span>Tour</NavLink>
        <ul className=' flex gap-7 text-lg  font-medium'>
          <li><NavLink to={"/"} onClick={() => window.top(0, 0)} className={({ isActive }) => `${isActive ? 'text-color5' : ''} hover:text-color6`}>Home</NavLink></li>
          <li><NavLink to={"about"} onClick={() => window.top(0, 0)} className={({ isActive }) => `${isActive ? 'text-color5' : ''} hover:text-color6`}>About Us</NavLink></li>
          <li><NavLink to={"packeges"} onClick={() => window.top(0, 0)} className={({ isActive }) => `${isActive ? 'text-color5' : ''} hover:text-color6`}>Packages</NavLink></li>
          <li><NavLink to={"contect"} onClick={() => window.top(0, 0)} className={({ isActive }) => `${isActive ? 'text-color5' : ''} hover:text-color6`}>Contect Us</NavLink></li>
        </ul>
        <NavLink to={"singup"}>SingUp</NavLink>
        

        <NavLink to={"admin/editpackages"}>Admin</NavLink>
        <button className=' bg-color5 hover:bg-color6 text-color1 font-medium rounded-full px-6 py-1.5 text-xl'><NavLink to={"signin"}><i className="fa-regular fa-user"></i>  Login</NavLink></button>
      </nav>

      {/*  mobile Navbar */}
      <nav className='sticky top-0 z-50 bg-color4/60 backdrop-blur-lg transition-all'>
        <div className={` ${MenuShow ? "hidden" : "flex"} lg:hidden py-4  px-4 justify-between`}>
          <NavLink to={"/"} className=" text-2xl font-medium">Treval Tour</NavLink>
          <button onClick={() => SetMenuShow(true)} >< EllipsisVertical color='#5356F6' /></button>
        </div>
        <ul className={`${MenuShow ? "gred duration-700 h-fit" : "hidden h-0"} text-xl *:mb-3 font-medium text-center pt-10 relative w-full px-4 py-4 bg-color4/60 backdrop-blur-lg transition-all ease-in-out `}>
          <button onClick={() => SetMenuShow(false)} className=' absolute top-4 right-[8vw]'>< X color='#5356F6' size={30} /></button>
          <li><NavLink to={"/"} onClick={() => window.top(0, 0)} className={({ isActive }) => `${isActive ? 'text-color5' : ''} hover:text-color5`}>Home</NavLink></li>
          <li><NavLink to={"about"} onClick={() => window.top(0, 0)} className={({ isActive }) => `${isActive ? 'text-color5' : ''} hover:text-color5`}>About Us</NavLink></li>
          <li><NavLink to={"packeges"} onClick={() => window.top(0, 0)} className={({ isActive }) => `${isActive ? 'text-color5' : ''} hover:text-color5`}>Packages</NavLink></li>
          <li><NavLink to={"contect"} onClick={() => window.top(0, 0)} className={({ isActive }) => `${isActive ? 'text-color5' : ''} hover:text-color5`}>Contect Us</NavLink></li>
          <button onClick={() => window.top(0, 0)} className=' bg-color5 text-color1 font-medium rounded-full px-6 py-1.5 text-xl mt-5'>Register Now</button>
        </ul>
      </nav>

    </>
  )
}

export default Navbar