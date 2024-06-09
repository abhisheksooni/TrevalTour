import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
import { EllipsisVertical, X } from 'lucide-react';
function Navbar() {

 const [MenuShow,SetMenuShow] = useState(false)
  return (
    <>
    
   
     {/* md screen on */}
    <nav className=' hidden md:flex gap-5 bg-color4 items-center justify-between px-[10vw] py-6'>
      <NavLink to={'/'} className=" text-2xl font-medium flex">  <span className='text-color6 font-bold'>Treval</span>Tour</NavLink>
      <ul className=' flex gap-7 text-lg  font-medium'>
        <li><NavLink to={'/'} onClick={()=>window.top(0,0)} className={({isActive})=>`${isActive? 'text-color5': ''} hover:text-color6`}>Home</NavLink></li>
        <li><NavLink to={'/about'} onClick={()=>window.top(0,0)} className={({isActive})=>`${isActive? 'text-color5': ''} hover:text-color6`}>About Us</NavLink></li>
        <li><NavLink to={'/packeges'} onClick={()=>window.top(0,0)} className={({isActive})=>`${isActive? 'text-color5': ''} hover:text-color6`}>Packeges</NavLink></li>  
        <li><NavLink to={'/contect'} onClick={()=>window.top(0,0)} className={({isActive})=>`${isActive? 'text-color5': ''} hover:text-color6`}>Contect Us</NavLink></li>  
      </ul>
      <button className=' bg-color5 hover:bg-color6 text-color1 font-medium rounded-full px-6 py-1.5 text-xl'>Register Now</button>
    </nav>

    {/*  mobile Navbar */}
    <nav className=' '>
      <div className={` ${MenuShow?"hidden":"flex"} md:hidden py-4  px-4 justify-between`}>
      <NavLink to={'/'} className=" text-2xl font-medium">Treval Tour</NavLink>
    <button onClick={()=>SetMenuShow(true)} >< EllipsisVertical color='#5356F6'/></button>
      </div>
      <ul className={`${MenuShow?"gred":"hidden"} text-xl *:mb-3 font-medium bg-color1 text-center pt-10 relative w-full px-4 py-4`}>
      <button onClick={()=>SetMenuShow(false)} className=' absolute top-4 right-[8vw]'>< X color='#5356F6' size={30}/></button>
        <li><NavLink to={'/'} onClick={()=>window.top(0,0)} className={({isActive})=>`${isActive? 'text-color5': ''} hover:text-color5`}>Home</NavLink></li>
        <li><NavLink to={'/about'} onClick={()=>window.top(0,0)} className={({isActive})=>`${isActive? 'text-color5': ''} hover:text-color5`}>About Us</NavLink></li>
        <li><NavLink to={'/packeges'} onClick={()=>window.top(0,0)} className={({isActive})=>`${isActive? 'text-color5': ''} hover:text-color5`}>Packeges</NavLink></li>  
        <li><NavLink to={'/contect'} onClick={()=>window.top(0,0)} className={({isActive})=>`${isActive? 'text-color5': ''} hover:text-color5`}>Contect Us</NavLink></li>  
      <button onClick={()=>window.top(0,0)} className=' bg-color5 text-color1 font-medium rounded-full px-6 py-1.5 text-xl mt-5'>Register Now</button>
      </ul>
    </nav>

    </>
  )
}

export default Navbar