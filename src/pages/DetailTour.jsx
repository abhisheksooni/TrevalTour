import React from 'react'
import { MapPin } from 'lucide-react';
import ReactStars from 'react-stars';
import { NavLink } from 'react-router-dom';
function DetailTour({ tripName, daysNight, locaion, image, price, schedule }) {

    const img = "https://static.toiimg.com/thumb/msid-92879435,width-748,height-499,resizemode=4,imgsize-234324/.jpg"


    return (
        <main className='mx-auto max-w-[1550px] w-full px-5 bg-color3'>
            {/* Tour Info */}
            <section className='md:mx-10 mb-8 flex flex-wrap items-center justify-between'>
                <div className="">
                    <h2 className='text-7xl font-semibold py-3 '>Bali</h2>
                    <p className='flex gap-5 text-xl mb-4'><span><i class="fa-regular text-color5 fa-clock"></i> 7 Day 6 Night</span> <span className='flex items-center gap-1'><MapPin color='#5659F5' size={20} /> Bali, Indonesia</span></p>
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
            <section className='flex flex-col items-center lg:flex-row justify-center w-[100%] lg:max-h-[560px] gap-4 '>
                <img src="https://static.toiimg.com/thumb/msid-92879435,width-748,height-499,resizemode=4,imgsize-234324/.jpg" className='  rounded-3xl ' alt="" />
                <div className=" flex flex-wrap gap-4 w-full justify-center *:max-w-[47%] lg:*:max-w-[90%] xl:*:max-w-[47%] *:h-auto *:rounded-3xl">
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                </div>
            </section>
            {/* detail section */}
            <section className=' flex flex-wrap py-8 lg:px-6 lg:justify-between'>
                 {/* detail  */}
                <div className="lg:max-w-[70%] ">
                    <p className='text-3xl font-semibold mb-1.5 '>Details</p>
                    <div className="w-[100px] h-[3px] bg-color6 rounded-full"></div>
                    <p className=' my-5 text-xl'>Leave your guidebooks at home and dive into the local cultures that make each destination so special. We’ll connect you with our exclusive experiences. Each trip is carefully crafted to let enjoy your vacation.

                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.</p>
                </div>
                 {/* Loctions*/}
                 <div className="">

                 </div>
                {/* Book */}
                
                    <div className=" w-full md:max-w-[350px] font-medium border-2 border-color2/40 py-4 px-6 rounded-3xl">
                    
                    <div className="">
                    <span className=' flex items-center gap-2 text-xl mt-3 '><i class="fa-regular text-color5 fa-clock "></i> 7 Day 6 Night</span>
                    <span className='flex items-center gap-1 mt-2  text-color2/90'><MapPin color='#5659F5' size={22} /> Bali, Indonesia</span>
                    </div>
                        
                        <div className="ml-7 mt-7 mb-5">
                            <p className='text-color2/60 leading-none mb-2'>Start From</p>
                            <p className='text-2xl font-semibold leading-none'>Rs. {price ? price : "00"}</p>
                            <p className='text-color2/60 leading-none mb-2 mt-2'>Schedule Start <span className='text-color5 text-xl'>{schedule ? schedule : "11-Jun-2024"}</span></p>
                        
                        </div>
                        
                        <NavLink to={"/bookingform"} className=' text-xl bg-color6 text-white px-5 py-2 rounded-full  w-full '>Continue</NavLink>
                        <div className="mb-4"></div>
                    </div>
                
            </section>
        </main>
    )
}

export default DetailTour