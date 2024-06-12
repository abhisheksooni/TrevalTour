import React from 'react'
import { MapPin } from 'lucide-react';
import ReactStars from 'react-stars';
function DetailTour({ tripName, daysNight, locaion, image }) {

const img = "https://static.toiimg.com/thumb/msid-92879435,width-748,height-499,resizemode=4,imgsize-234324/.jpg"


    return (
        <main className='mx-auto max-w-[1500px] w-full px-5 bg-color3'>
            {/* Tour Info */}
            <section className='mx-10 mb-8 flex items-center justify-between'>
                <div className="">
                <h2 className='text-7xl font-semibold py-3 '>Bali</h2>
                <p className='flex gap-5 text-xl mb-4'><span><i class="fa-regular text-color5 fa-clock"></i> 7 Day 6 Night</span> <span className='flex items-center gap-1'><MapPin color='#5659F5' size={18} /> Bali, Indonesia</span></p>
                </div>
                <div className=" text-xl ">
        <p className='font-semibold text-2xl'>155+ </p>
        <span className='font-medium'>Trips Complete</span>
                <div className=" flex items-center gap-3 mt-3">
                
                    <ReactStars className='flex mb-1' value={4} count={5} size={24} color2={"#ffd700"} />
                    <span className=' text-color2/50'> ( 3 Reviews ) </span>
                </div>
                </div>
            </section>
            {/* images section */}
            <section className='flex justify-center w-[100%] h-[440px] gap-4 '>
                <img src="https://static.toiimg.com/thumb/msid-92879435,width-748,height-499,resizemode=4,imgsize-234324/.jpg" className='w-[70%] rounded-3xl' alt="" />
                <div className=" flex flex-wrap gap-4 w-[30%] *:w-[48%] *:rounded-3xl">
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                </div>
            </section>
            {/* detail section */}
            <section className=' flex '>
        <div className="">

        </div>
        <div className="">Price box</div>
            </section>
        </main>
    )
}

export default DetailTour