import React, { useEffect } from 'react'
import { MapPin, Star } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function AdminPackageCard({image,price,tourName,mapLoction,days,NavLinkAdd}) {

    const deleteHendal = async() => {
        try {
            console.log("ckick fn");
          await  axios.delete(`https://treval-backend.onrender.com/delete/${NavLinkAdd}`)
          await console.log("delete don");
        } catch (error) {
            console.log(error);
        }

      } 
      const EditHendal = ()=>{

      }
      useEffect(()=>{
        
      },[])
    
  return (
    <>
    <div className={`sm:w-[45%] lg:max-w-[435px] min-w-[330px] sm:min-w-[350px] w-full`} >
      
      <div className="  rounded-3xl transition-all duration-100 hover:scale-[0.99] cursor-pointer w-full">
          <div className="relative w-full">
          <div className=" absolute bg-color2/20  backdrop-blur-sm rounded-xl px-3 py-0.5 m-2.5"><span className='text-color4'>{days}</span></div>
      <img className='rounded-3xl sm:h-[315px] w-full h-full' src={image} alt="" />
          </div>
  
      <div className="px-2 py-1 mb-1.5 pl-3">
      <p className='text-2xl font-semibold mb-1.5'>{tourName?tourName:"Add Tour Name"}</p>
      <p className='flex items-center gap-1 text-sm text-color2/60 mb-1.5'><MapPin size={18}/>{mapLoction?mapLoction:"Add Tour mapLoction"}</p>
      <p className='text-color2/60 flex items-center gap-1 mb-2'>{days}</p>
      <p className='text-color2/60 text-sm leading-none mb-1'>Start From</p>
      <p className='text-[22px] text-color5 font-bold leading-none'>Rs. {price?price:"00"}</p>
      </div>
  </div>
  <div className=" flex gap-2">

      <button onClick={EditHendal} className=' bg-color6 px-5 w-full py-1.5 text-xl rounded-full text-white font-semibold transition-all duration-100 hover:scale-[1.03] '> <p>Edit </p></button>
      <button onClick={deleteHendal} className=' bg-red-500 px-5 py-1.5 text-xl rounded-full text-white font-semibold transition-all duration-100 hover:scale-[1.03]  w-[40%]'><i className="fa-regular fa-trash-can "></i></button>
  </div>
  </div>
    </>
  )
}



export default AdminPackageCard