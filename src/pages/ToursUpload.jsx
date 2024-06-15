import axios from 'axios';
import React, { useState } from 'react'

function ToursUpload() {


  const [file, SetFile] = useState(null)


  const handleOnChange = (e) => {
    SetFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("filedata", file)

      const dataa = axios.post(`http://localhost:3002/upload`, data)

      // console.log(dataa);
    } catch (error) {

    }

  }
  return (
    <div className='mb-20'>
      <h2 className='text-4xl font-bold text-color5 my-5 text-center'>New Pakeage Add</h2>
      <form onSubmit={handleSubmit} className=' flex flex-col *:rounded-xl px-5 lg:px-20'>
      <label className='text-xl font-medium ml-3 py-3' >Thumbnail</label>
        <label  htmlFor="dropzone-file" className="flex flex-col items-center justify-center my-4 w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor"  strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          </div>
          <input type="file" accept='image/*' id="dropzone-file" className='hidden' onChange={handleOnChange} />
        </label>
        {/* <input type="file" accept='image/*' id='img' onChange={handleOnChange} className='h-44 border-2 my-4 p-4' /> */}

        <div className="flex flex-wrap gap-3 p-1 border-none ">
          <div className=" flex flex-col w-full xl:w-[49.5%]">
          <label className='text-xl font-medium ml-3 py-3' >Pakeages Name</label>
        <input type="text" placeholder='Pakeages Name '  className='rounded-xl w-full border-2 py-4 px-3' />
          </div>
          <div className=" flex flex-col w-full xl:w-[49.5%]">
          <label className='text-xl font-medium ml-3 py-3' >Price</label>
        <input type="text" placeholder='Price '  className='rounded-xl w-full border-2 py-4 px-3' />
          </div>
          <div className=" flex flex-col w-full xl:w-[49.5%]">
          <label className='text-xl font-medium ml-3 py-3' >Day and Night</label>
        <input type="text" placeholder='Day and Night '  className='rounded-xl w-full border-2 py-4 px-3' />
          </div>
          <div className=" flex flex-col w-full xl:w-[49.5%]">
          <label className='text-xl font-medium ml-3 py-3' >Schedule</label>
        <input type="text" placeholder='Schedule '  className='rounded-xl w-full border-2 py-4 px-3' />
          </div>
          <div className=" flex flex-col w-full xl:w-[49.5%]">
          <label className='text-xl font-medium ml-3 py-3' >Loction Set</label>
        <input type="text" placeholder='Loction Set '  className='rounded-xl w-full border-2 py-4 px-3' />
          </div>
       
        </div>
        <label  className='text-xl font-medium ml-3 py-3'>Pakeage Details </label>
        <textarea type="text" placeholder='Add Details' className='border-2 my-4 p-4 h-[300px]'></textarea>
        <label className='text-xl font-medium ml-3 py-3' >More Images <span className='text-red-600'>Max 4 added</span></label>
        <label  htmlFor="dropzone-file" className="flex flex-col items-center justify-center my-4 w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          </div>
          <input type="file" accept='image/*' id="dropzone-file" className='hidden' onChange={handleOnChange} />
        </label>
        <button type='submit' className='rounded-full p-4 bg-color5 text-white w-full max-w-[250px] mx-auto'>Submit</button>
        
      </form>
    </div>
  )
}

export default ToursUpload