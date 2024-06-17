import axios from 'axios';
import { List } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function ToursUpload() {

const [formData,SetFormData] = useState({
  packageName:"",
  price:"",
  schedule:"",
  dayAndNight:"",
  packageLoctionName:"",
  description:"",
})
  const [file, SetFile] = useState(null)
  const [files, SetFiles] = useState(null)
  const [p, Setp] = useState("")
  const [pimg, Setpimg] = useState("14")

// image file
  const handleFileChange = (e) => {
    // const resize = e.target.files[0]
    SetFile(e.target.files[0])
  
  }
  // multiple file 
  const handleMultipleFileChange = (e)=>{
SetFiles(e.target.files)
console.log(files);
  }

  // progress bar
  const config = {
    onUploadProgress: function(progressEvent) {
      let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      // console.log(percentCompleted)
      Setp(percentCompleted)
    }
  }
  const configimg = {
    onUploadProgress: function(progressEvent) {
      let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      // console.log(percentCompleted)
      Setpimg(percentCompleted)
    }
  }

  const handleChange = (e)=>{
    SetFormData({...formData,[e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    
    try {
      // file
      const formDataToSend = new  FormData();
      formDataToSend.append("filedata", file)
      // files
      // for (let i = 0; i < files.length; i++) {
      //  formDataToSend.append(`filedata   ${i+1}`,files[i]) }
      // form
      formDataToSend.append("packageName",formData.packageName)
      formDataToSend.append("price",formData.price)
      formDataToSend.append("schedule",formData.schedule)
      formDataToSend.append("packageLoctionName",formData.packageLoctionName)
      formDataToSend.append("dayAndNight",formData.dayAndNight)
      formDataToSend.append("description",formData.description)
      const dataa =  axios.post(`https://treval-backend.onrender.com/create-tour`, formDataToSend,config)

      
      console.log(p);
    } catch (error) {

    }
   
      e.preventDefault();
  
  }
  return (

    <div className='mb-20'>
      <h2 className='text-4xl font-bold text-color5 my-5 text-center'>New Pakeage Add</h2>
      <form onSubmit={handleSubmit} className=' flex flex-col *:rounded-xl px-5 lg:px-20'>
        <label className='text-xl font-medium ml-3 py-3' >Thumbnail</label>
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center my-4 w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          </div>
          <input type="file" accept='image/*' id="dropzone-file" className='hidden' onChange={handleFileChange} />
        </label>
        {/* <input type="file" accept='image/*' id='img' onChange={handleFileChange} className='h-44 border-2 my-4 p-4' /> */}

        {/* pakeages Name */}
        <div className="flex flex-wrap gap-3 p-1 border-none ">
          <div className=" flex flex-col w-full xl:w-[49.5%]">
            <label className='text-xl font-medium ml-3 py-3' >Pakeages Name</label>
            <input type="text" name='packageName' value={formData.packageName} onChange={handleChange} placeholder='Pakeages Name ' className='rounded-xl w-full border-2 py-4 px-3' />
          </div>
          {/* Price */}
          <div className=" flex flex-col w-full xl:w-[49.5%]">
            <label className='text-xl font-medium ml-3 py-3' >Price</label>
            <input type="text" name='price' value={formData.price} onChange={handleChange} placeholder='Price ' className='rounded-xl w-full border-2 py-4 px-3' />
          </div>
          {/* DAy ANd Night */}
          <div className=" flex flex-col w-full xl:w-[49.5%]">
            <label className='text-xl font-medium ml-3 py-3' >Day and Night</label>
            <input type="text" name='dayAndNight' value={formData.dayAndNight} onChange={handleChange} placeholder='Day and Night ' className='rounded-xl w-full border-2 py-4 px-3' />
          </div>
          {/* Schedule */}
          <div className=" flex flex-col w-full xl:w-[49.5%]">
            <label className='text-xl font-medium ml-3 py-3' >Schedule Start Date</label>
            <input type="date" name='schedule' value={formData.schedule} onChange={handleChange} placeholder='Schedule start Date' className='rounded-xl w-full border-2 py-4 px-3' />
          </div>
          {/* Loction set */}
          <div className=" flex flex-col w-full xl:w-[49.5%]">
            <label className='text-xl font-medium ml-3 py-3' >Loction Set</label>
            <input type="text" name='packageLoctionName' value={formData.packageLoctionName} onChange={handleChange} placeholder='Loction Set ' className='rounded-xl w-full border-2 py-4 px-3' />
          </div>

        </div>
        {/* pakeage description */}
        <label className='text-xl font-medium ml-3 py-3'>Pakeage description </label>
        <textarea type="text"  name='description' value={formData.description} onChange={handleChange} placeholder='Add Details' className='border-2 my-4 p-4 h-[300px]'></textarea>

        {/* More images add */}
        {/* <label className='text-xl font-medium ml-3 py-3' >More Images <span className='text-red-600'>Max 4 added</span></label> */}
        {/* <label htmlFor="dropzone-files" className="flex flex-col items-center justify-center my-4 w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          </div>
          <input type="file" accept='image/*' id="dropzone-files" className='hidden'  onChange={handleMultipleFileChange} multiple />
        </label> */}

        {/* button */}
        <button type='submit' className='rounded-full p-4 bg-color5 text-white w-full max-w-[250px] mx-auto'>Submit</button>

      </form>


      <div className="text-xl font-bold">
        {/* <p> Imgdata : {pimg}</p> */}
        <p> data : {p}</p>
      </div>
            {/* <div className="bg-color3 max-w-full h-[5px] rounded-full mx-10">
              <div className={` h-full bg-color6 rounded-full`}></div>
            </div> */}
    </div> 
  )
}

export default ToursUpload