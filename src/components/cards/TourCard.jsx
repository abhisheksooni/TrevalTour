import React, { useEffect, useRef } from 'react'
import star from '../../Images/star1.png'
function TourCard({nameadd="add name",images="https://images.unsplash.com/photo-1504870712357-65ea720d6078?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}) {


 



  return (
    <>
    <div  className="max-w-[420px] min-w-[330px] sm:min-w-[350px] relative w-full transition-all duration-100  cursor-pointer" >
      {/* <div className="absolute flex justify-between w-full z-30">
        <div className="  bg-color2/20  backdrop-blur-md rounded-xl px-2 m-3"><span className='text-color4'>7 Day</span></div>
        <div className="flex items-center bg-color2/25 backdrop-blur-md rounded-xl px-2 m-3 gap-[5px]"> <img src={star} className='w-[18px] h-[18px]' alt="" /><span className='text-color4'>4.5</span></div>
      </div> */}
      <div className="absolute bg-color2/30 w-full h-full hover:bg-color2/0 rounded-3xl transition-all duration-150 z-20 "></div>
      <div className="absolute bottom-6 text-center w-full text-2xl font-semibold text-white">
    {/* <span>{nameadd}</span> */}
      <div className=" relative bg-color2/10 rounded-full w-fit backdrop-blur-sm mx-auto px-8 py-1 m-3 z-30"><span className='text-color4'>{nameadd}</span></div>
      </div>
    <img className='rounded-3xl  w-full h-full' src={images} alt="" />

    </div>
    </>
  )
}

export default TourCard