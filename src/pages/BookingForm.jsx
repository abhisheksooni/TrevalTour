import React from 'react'

function BookingForm({tripName, locaion, price, schedule}) {
  return (
    <main className=' mx-auto flex max-w-[1900px] w-full px-5 bg-color3'>
      <div className="max-w-[700px] m-5">
        <img src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='rounded-2xl' alt="" />
      </div>
      <div className=" ml-10 px-8 my-auto">
      <h2 className='text-5xl font-semibold mb-6'>Love to hear from you, <br /> get in touch</h2>
      <p className='text-xl mb-6'>You can reach us anytime wis <span className='text-color6'>abhisheksoni.as444@gmail.com</span></p>
      <form>
        <label htmlFor="fname" className='ml-2'>Full Name</label>
        <br />
      <input type="text"  placeholder='Full Name' className='w-full mt-2 p-3 mb-5'/>
      <br />
        <label htmlFor="email" className='ml-2'>Email</label>
        <br />
      <input type="email"  placeholder='Your Email' className='w-full mt-2 p-3 mb-5'/>
      <br />
        <label htmlFor="fnumber" className='ml-2'>Number</label>
        <br />
      <input type="text"  placeholder='Your Number' className='w-full mt-2 p-3'/>
      <br />
        
     <button className=' text-white bg-color6 px-14 py-3 rounded-full mt-8 ml-1'>Send Message</button>
      </form>
      </div>
    </main>
  )
}

export default BookingForm