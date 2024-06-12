import React from 'react'

function Contect() {
  return (
   
    <section className='bg-color3 pb-14'>
      {/* contect background */}
<div className="bridgeimage w-full h-[300px] md:h-[500px] text-white">
  <div className="absolute w-full h-[300px] md:h-[500px] bg-color2/40">
  <div className=" mt-14 text-center sm:text-start sm:mt-32 sm:ml-48">
  <h2 className=' text-4xl md:text-8xl font-bold'>Contect Us</h2>
  <p className='text-2xl font-semibold mt-2'>Get Intouch</p>
  </div>
  </div>
</div>


{/* section addresh */}
<div className=" w-full xl:*:w-[25%] md:*:w-[50%] *:w-full flex flex-wrap">

<div className="indoreimage h-[400px] sm:h-[500px] text-white ">
<div className="bg-color2/60 pt-20 pl-8 sm:pl-20 w-full h-[400px] sm:h-[500px]">
<p className='text-4xl mb-3 font-semibold'>Indore</p>
<div className="w-[100px] h-[3px] bg-white"></div>
<p className='my-4'> AD Addresh</p>
<p>Phone: 9999-9999 </p>
<p>Email: abhisheksoni.as444@gmail.com</p>
</div>
</div>

<div className="">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117760.13081392786!2d75.79964854501954!3d22.72808943517755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1718095136534!5m2!1sen!2sin" width="100%" height="500"   loading="lazy" ></iframe>
</div>

<div className="agraimage  h-[400px] sm:h-[500px] text-white ">
<div className="bg-color2/60 pt-20 pl-8 sm:pl-20 w-full h-[400px] sm:h-[500px]">
<p className='text-4xl mb-3 font-semibold'>Agra</p>
<div className="w-[100px] h-[3px] bg-white"></div>
<p className='my-4'> AD Addresh</p>
<p>Phone: 9999-9999 </p>
<p>Email: abhisheksoni.as444@gmail.com</p>
</div>
</div>

<div className="">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113579.6388296025!2d77.89761231086283!3d27.176303141870633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718095993127!5m2!1sen!2sin" width="100%" height="500"   loading="lazy" ></iframe>
</div>
</div>

{/* contect from */}
<div className="text-center flex items-center justify-center flex-col py-10 border border-color5 rounded-3xl w-fit md:px-10 px-5 mx-auto my-12 ">
  <h2 className=' text-4xl md:text-5xl font-bold'>Leave us your info</h2>
  <p className='text-lg md:text-2xl font-medium text-color2/50 mt-2'>and we will get back to you.</p>
  <div className="w-[200px] bg-color6 h-[3px] my-3"></div>
  <form className='flex flex-col items-center w-full  gap-5 my-10 max-w-[600px] '>
<input type="text" placeholder='Name' className='py-3 px-5 rounded-lg w-full' />
<input type="text" placeholder='Email' className='py-3 px-5 rounded-lg w-full' />
<input type="text" placeholder='Phone' className='py-3 px-5 rounded-lg w-full' />
<input type="text" placeholder='Tell us a litte about the trip' className='py-3 px-5 rounded-lg w-full' />
<button onClick={()=>window.top(0,0)} className=' bg-color5 text-color1 font-medium rounded-full px-6 py-1.5 text-xl mt-5'>Send</button>
  </form>
</div>

<div className=" *:text-4xl *:mr-5 *:text-color6 hover:*:text-color5 hover:*:cursor-pointer text-center">
<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-youtube"></i>
<i class="fa-solid fa-envelope"></i>
</div>
    </section>
  )
}

export default Contect