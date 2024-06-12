import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Facebook, Instagram, X } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <section className=' flex flex-col md:flex-row  md:justify-evenly my-4  *:mb-12 px-10'>
 <NavLink to={'/'} onClick={()=>window.scroll({top:0,behavior:'smooth'})} className="  text-2xl font-medium flex">  <span className='text-color6 font-bold'>Treval</span>Tour</NavLink>
 <ul>
  <li className='text-2xl font-semibold mb-4'>Contect</li>
  <li>Number - 8888-8888</li>
  <li>Email - abhisheksoni.as444@gmail.com</li>
  <div className=" flex hover:*:cursor-pointer mt-3 gap-3">
    <li><Facebook/></li>
    <li><X/></li>
    <li><Instagram/></li>
  </div>
 </ul>
 <ul className='max-w-[300px]'>
 <li className='text-2xl font-semibold mb-4'>Pay Safely with Us</li>
  <li>The Payment is Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
  <div className="flex gap-3 text-2xl mt-3">
    <li><i  className="fa-brands fa-cc-paypal"></i></li>
    <li><i  className="fa-brands fa-cc-visa"></i></li>
    <li><i  className="fa-brands fa-cc-mastercard"></i></li>
    <li><i  className="fa-brands fa-cc-amex"></i></li>
 
  </div>
 </ul>
    </section>
  )
}

export default Footer