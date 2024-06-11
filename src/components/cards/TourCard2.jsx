import React from 'react'
import star from '../../Images/star1.png'
function TourCard2({nameadd="add name",images="https://media.istockphoto.com/id/644581682/photo/autumn-landscape-and-snow-mountains-in-beautiful-cumulus-clouds.jpg?s=612x612&w=0&k=20&c=vfAINL3BFJfjnOgWYUBbyUHxbZ-nU172BvebFHzvIUA="}) {
  return (
    <>
    <div className="max-w-[420px] min-w-[330px] sm:min-w-[350px] relative w-full transition-all duration-100 hover:scale-[0.98] ">
      <div className="absolute flex justify-between w-full z-30">
        <div className="  bg-color2/20  backdrop-blur-md rounded-xl px-2 m-3"><span className='text-color4'>7 Day</span></div>
        <div className="flex items-center bg-color2/25 backdrop-blur-md rounded-xl px-2 m-3 gap-[5px]"> <img src={star} className='w-[18px] h-[18px]' alt="" /><span className='text-color4'>4.5</span></div>
      </div>
      <div className="absolute bg-color2/30 w-full h-full hover:bg-color2/0 rounded-3xl transition-all duration-150 z-20 "></div>
      <div className="absolute bottom-10 text-center w-full text-2xl font-semibold text-white">
    <span>{nameadd}</span>
      </div>
    <img className='rounded-3xl' src={images} alt="" />

    </div>
    </>
  )
}

export default TourCard2