import React, { useEffect, useRef } from 'react'
import Navbar from '../components/navbar/Navbar'
import '../App.css'
import TourCard from '../components/cards/TourCard'
import { NavLink } from 'react-router-dom'
import { MoveRight, Send,Earth, Headset, CirclePercent } from 'lucide-react'
import MainTourCard from '../components/cards/MainTourCard'
import TourCard2 from '../components/cards/TourCard2'
import ReviewsCard from '../components/ReviewsCard'

import {ad2, im1, im11, im12, im13, im14, im2, im3, im4} from '../Images/ImagesExport.js'


function Home() {

  return (
  <main  className=' mx-auto max-w-[1900px] w-full px-5 bg-color3'>
    
    {/* 1 section */}
    <section className='md:px-16  flex flex-wrap justify-between py-14'>
<div className="font-bold text-7xl max-w-[600px] mb-12 md:mb-0">
<h1>Explore<span className='text-color5'> Diversity</span></h1>
<h1 className='flex'>Around The World </h1>
<p className='font-normal text-lg  mt-4 leading-6 text-color2/70 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus, impedit voluptatibus earum voluptatem delectus ad sed aperiam, nemo ratione, vero sint unde esse veritatis. Quidem minima pariatur nam vel!</p>
</div>
<div className="font-semibold text-3xl my-auto *:mb-4">
  <div className="">
  <p>500k+</p>
  <p className='text-xl'>Totel Booking</p>
  </div>
  <div className="">
  <p>4.7</p>
  <p className='text-xl'>Envint Reting</p>
  </div>
</div>
    </section>
    {/* 2 section image add*/}
    <section className=' w-full h-[500px] overflow-y-hidden'>
      <div className="images2 w-full h-full rounded-3xl"></div>
      {/* <div className="   rounded-3xl">
        <video src={video}  autoPlay muted loop id='videohome' className='w-[150%] rounded-3xl' >
        
        </video>
      </div> */}
    </section>
    {/* 3 section */}
    <section className='my-10'>
      <div className=" flex flex-wrap justify-between items-center md:px-14  md:my-14 ">
        <div className=" max-w-[600px] text-4xl md:text-5xl font-bold leading-[40px] md:leading-[55px] mb-5">
          <p>We Are The Best Treval Agent 
with More Than 12 Years of 
Experience.</p>
        </div>
        <div className="max-w-[600px] text-center mb-10 md:mb-0 md:text-start">
        <p className='text-color2/70'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quo enim mollitia consequuntur eveniet suscipit libero, eum et recusandae ipsa veniam doloremque, sint in pariatur dignissimos omnis.</p>
        </div>
      </div>
      {/* 2 images section */}
      <div className=" flex flex-wrap max-w-[100%] w-full gap-8 *:rounded-3xl transition-all  hover:*:scale-[0.99] duration-300 ease-in justify-center h-[500px]">
        <div className="images22 w-full md:w-[65%]"></div>
        <div className="images222 w-full md:w-[30%]"></div>
      </div>
    </section>
    {/* Top Destionations section */}
    <section className=' my-16'>
      <div className="max-w-[600px] mx-auto flex md:items-center flex-col text-center">
<span className=' text-4xl md:text-5xl font-bold'>Top <span className='text-color5'>Destionations</span></span>
<p  className='my-6 text-lg leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum expedita voluptatum consecteturro.</p>
      </div>
      {/* tours add */}
      <section  className='flex my-10 gap-4 md:gap-6 justify-start  lg:justify-center w-full md:px-10 overflow-x-scroll'>
<TourCard images={im1} nameadd='Agra'/>
<TourCard images={im2} nameadd='Ladakh'/>
<TourCard images={im3} nameadd='Sikkim'/>
<TourCard images={im4} nameadd='Lakshadweep'/>



      </section>
      <section className='flex my-10 gap-4 md:gap-6 justify-start  lg:justify-center w-full md:px-10 overflow-x-scroll'>
<TourCard2 images={im11} nameadd='Goa'/>
<TourCard2 images={im12} nameadd='kashmir'/>
<TourCard2 images={im13} nameadd='Nepal'/>
<TourCard2 images={im14} nameadd='Bhutan'/>

      </section>
      {/* <NavLink className={`flex gap-5 bg-color3 rounded-full px-4 py-1 w-fit my-5 mx-auto`}>All Destionations <MoveRight color='#5659F5'/></NavLink> */}
    </section>
    {/* Freshly Added section */}
    {/* <section className='my-16'>
<div className="text-center">
<span className=' text-4xl md:text-5xl font-bold'>Freshly <span className='text-color5'>Added</span></span>
</div>

<div className="flex my-10 gap-4 w-full md:gap-8 justify-start md:flex-wrap md:justify-center md:px-10 overflow-x-scroll">
  <MainTourCard/>
  <MainTourCard/>
  <MainTourCard/>
  <MainTourCard/>
</div>
<NavLink className={`flex gap-5 bg-color3 rounded-full px-4 py-1 w-fit my-5 mx-auto`}>All New Tour <MoveRight color='#5659F5'/></NavLink>
    </section> */}
    {/* Add sections */}
    <section className='  w-full flex lg:flex-row flex-col my-16 p-5 gap-5 '>
      <div className=" addimage relative w-full h-[450px] md:h-[400px] rounded-3xl ">
<div className="absolute w-full *:mb-7 text-xl font-medium h-full bg-color2/40 rounded-3xl p-5 md:px-10 md:py-14 text-color1">
<p className='text-5xl'>Discover Special Deals!</p>
<p className='text-2xl max-w-[500px] '>Make sure to check out these special promotions</p>
<br />
<NavLink className={`bg-color5 text-xl text-color1 px-7 py-3 font-semibold rounded-full  hover:bg-color6`}>See Tours</NavLink>
</div>
      </div >
      {/* card 2 */}
      <div className={`w-full addimage2 h-[500px] md:h-[400px] rounded-3xl `}>
        {/* <img src={ad2} alt="" className='h-[450px] md:h-[400px] rounded-3xl w-full'  /> */}
      </div>
    </section>

    {/* reviews */}
    <section className=' w-full my-16'>
      <div className="text-center my-8 ">
        <p className='text-4xl md:text-5xl font-semibold max-w-[600px] mx-auto'> What oue Customers are saying about us </p>
      </div>
      <div className="flex  lg:flex-wrap  justify-start lg:justify-center gap-8 overflow-x-scroll">
<ReviewsCard/>
<ReviewsCard/>
<ReviewsCard/>
      </div>
    </section>

    {/* suppert section */}
    <section  className=' flex w-full md:py-14 flex-wrap *:mb-10 *:max-w-[400px] *:gap-3 justify-center'>
<div className=" flex">
  <Earth color='#5659F5' size={70}/>
  <div className="">
  <p className=' text-2xl font-semibold'>700 Destinations</p>
  <p className=' text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.!</p>
  </div>
</div>
<div className=" flex">
  <CirclePercent color='#5659F5' size={70}/>
  <div className="">
  <p className=' text-2xl font-semibold'>Best Price Guratee</p>
  <p className=' text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.!</p>
  </div>
</div>
<div className=" flex">
  <Headset color='#5659F5' size={70}/>
  <div className="">
  <p className=' text-2xl font-semibold'>Top Notch Support</p>
  <p className=' text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.!</p>
  </div>
</div>

    </section>
  </main>
  )
}
 
export default Home