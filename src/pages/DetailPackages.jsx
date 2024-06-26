import React, { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react';
import ReactStars from 'react-stars';
import { NavLink, useParams } from 'react-router-dom';
import { ad1 } from '../Images/ImagesExport';
function DetailPackages({ tripName, daysNight, locaion, image, price, schedule }) {
    const [Tour, SetTour] = useState({})
    const [loding,SetLoding] = useState(false)
    const { id } = useParams()


    useEffect(() => {
        SetLoding(true)
        const data = async () => {

            const res = await fetch(`https://treval-backend.onrender.com/getOne/${id}`)
            const result = await res.json()
            SetLoding(false)
            SetTour(result)
        }
        data()

    }, [])

  
    return (
        <>
        
        {loding? <div className="w-full h-[86vh] flex justify-center items-center bg-color3"> 
            <div class="loader"></div>
          </div>  :null}
        <main className='mx-auto max-w-[1550px] w-full px-5 lg:flex gap-4 mt-5'>

            <section className='w-full lg:w-[70%]'>
                {/* images section */}
                <section className='flex flex-col items-center xl:flex-row justify-center w-full  gap-4 '>
                    <img src={Tour.thumbnail} className='rounded-3xl w-full ' alt="" />

                </section>
                {/* Tour Info */}
                <section className='md:mx-4 md:mr-10 my-2 flex flex-wrap items-center justify-between'>
                    <div className="">
                        <h2 className='text-7xl font-semibold py-3 '>{Tour.packageName}</h2>
                        <p className='flex gap-5 text-lg md:text-xl mb-4'><span><i class="fa-regular text-color5 fa-clock"></i> 7 Day 6 Night</span> <span className='flex items-center gap-1'><MapPin color='#5659F5' size={20} />{Tour.packageLoctionName}</span></p>
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

                {/* detail section */}
                <section className=' flex flex-wrap py-4 lg:px-6 lg:justify-between'>
                    {/* detail  */}
                    <div className="lg:max-w-[70%]s ">
                        <p className='text-3xl font-semibold mb-1.5 '>Details</p>
                        <div className="w-[100px] h-[3px] bg-color6 rounded-full"></div>
                        <p className=' my-5 text-xl'>{Tour.description}</p>
                    </div>
                    {/* Loctions*/}
                    <div className="">

                    </div>



                </section>
            </section>

            {/* Book */}
            <section className='w-fit md:w-[28%] *:mb-4 *:rounded-xl'>
                <div className=" w-full font-medium border-2 border-color2/40 py-4 px-6 rounded-3xl">

                    <div className="">
                        <span className=' flex items-center gap-2 text-xl mt-3 '><i class="fa-regular text-color5 fa-clock "></i>{Tour.dayAndNight}</span>
                        <span className='flex items-center gap-1 mt-2  text-color2/90'><MapPin color='#5659F5' size={22} />{Tour.packageLoctionName}</span>

                        <p className='text-color2/60 leading-none  mt-2'>Schedule Start <span className='text-color5 text-xl'>{Tour.schedule}</span></p>
                    </div>

                    <div className="ml-7 mt-7 mb-5">
                        <p className='text-color2/60 leading-none mb-2'>Start From</p>
                        <p className='text-2xl font-semibold leading-none'>Rs. {Tour.price}</p>

                    </div>


                    <NavLink to={"/bookingform"} className=' text-xl bg-color6 text-white px-5 py-2 rounded-full  w-full '>Continue</NavLink>
                    <div className="mb-4"></div>
                </div>
                
                <img src={ad1} alt=""  className=''/>
               
                
            </section>
        </main>
        </>
    )
}

export default DetailPackages