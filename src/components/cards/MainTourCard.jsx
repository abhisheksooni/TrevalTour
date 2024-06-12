import { MapPin, Star } from 'lucide-react'
import React from 'react'

function MainTourCard({image,tourName,price,star,mapLoction}) {
  return (
    <div className="max-w-[400px] min-w-[330px] sm:min-w-[350px] w-full rounded-3xl transition-all duration-100 hover:scale-[0.98] cursor-pointer">
        <img className='rounded-t-3xl' src={image?image:"https://images.unsplash.com/photo-1717781617540-9f31ba241a4e?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" />
        <div className="px-2 py-1 mb-1.5">
        <p className='text-2xl font-semibold mb-1.5'>{tourName?tourName:"Add Tour Name"}</p>
        <p className='flex items-center gap-1 text-sm text-color2/60 mb-1.5'><MapPin size={18}/>{mapLoction?mapLoction:"Add Tour mapLoction"}</p>
        {/* <p className=''><Star/>{star?star:"4.0"}</p> */}
        <p className='text-color2/60 text-sm leading-none mb-1'>Start From</p>
        <p className='text-[22px] text-color5 font-semibold leading-none'>Rs. {price?price:"00"}</p>
        </div>
    </div>
  )
}

export default MainTourCard