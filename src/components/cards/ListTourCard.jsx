import React from 'react'
import { MapPin, Star } from 'lucide-react'
import { NavLink } from 'react-router-dom'
function ListTourCard({NavLinkUrl, image,tourName,price,reting,mapLoction}) {
  return (
    <NavLink to={NavLinkUrl?NavLinkUrl:"/detailtour"} >
    <div className="sm:w-[45%] lg:max-w-[435px] min-w-[330px] sm:min-w-[350px] w-full rounded-3xl transition-all duration-100 hover:scale-[0.98] cursor-pointer">
        <div className="relative">
        <div className=" absolute bg-color2/20  backdrop-blur-md rounded-xl px-3 py-0.5 m-3"><span className='text-color4'>7 Day</span></div>
    <img className='rounded-3xl sm:h-[315px]' src={image?image:"https://images.unsplash.com/photo-1717781617540-9f31ba241a4e?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" />
        </div>

    <div className="px-2 py-1 mb-1.5 pl-3">
    <p className='text-2xl font-semibold mb-1.5'>{tourName?tourName:"Add Tour Name"}</p>
    <p className='flex items-center gap-1 text-sm text-color2/60 mb-1.5'><MapPin size={18}/>{mapLoction?mapLoction:"Add Tour mapLoction"}</p>
    <p className='text-color2/60 flex items-center gap-1 mb-2'><Star size={18}/>{reting?reting:"4.3"}</p>
    <p className='text-color2/60 text-sm leading-none mb-1'>Start From</p>
    <p className='text-[22px] text-color5 font-bold leading-none'>Rs. {price?price:"00"}</p>
    </div>
</div>
</NavLink>
  )
}

export default ListTourCard