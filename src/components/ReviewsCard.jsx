import React from 'react'
import ReactStars from 'react-stars'

function ReviewsCard() {
  return (
   
    <div className="  max-w-[450px] min-w-[330px] sm:min-w-[400px]  p-8 bg-color6/60 rounded-2xl transition-all duration-100 cursor-pointer hover:scale-[0.98]">
        <div className=" flex">
        <img  className='rounded-full max-w-[50px] max-h-[50px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5aCMO24e6ZTz7_TTUdoqiclVyuhAzV0kFw&s" alt="" />
        <div className=" flex ml-4 justify-between w-full">
            <div className="">
                <p className=' font-semibold'>Name</p>
                <p className='text-color2/60'>Name</p>
            </div>
            
            <ReactStars className='flex' value={3.5} count={5} size={24} color2={"#ffd700"} />
        </div>
        </div>
        <div className="ml-16">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium fuga iusto corporis dignissimos! Pariatur </p>
        </div>
    </div>
  )
}

export default ReviewsCard