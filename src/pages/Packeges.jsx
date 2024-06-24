import React, { useEffect, useState } from 'react'
import ListTourCard from '../components/cards/ListTourCard'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import { useParams } from "react-router-dom"
import '../App.css'
function Packages({}) {

  const [loding,SetLoding] = useState(false)
  const [data, SetData] = useState([])

  const api = async () => {
    try {
      SetLoding(true)
      const res = await fetch(`https://treval-backend.onrender.com/getall`)
      // const res = await fetch(`http://localhost:3002/getall`)
    const newdata = await res.json()
  
    SetData(newdata) 
    SetLoding(false)
    } catch (error) {
      console.log(error);
    }
   
  }
  

 
  useEffect(() => {
    api() 
  }, [])
  
  
  console.log(data);


  return (
<>
       {loding? <div className="w-full h-[86vh] flex justify-center items-center bg-color3"> 
        <div class="loader"></div>
      </div>  :null}
    <main className='mx-auto max-w-[1900px] flex flex-wrap gap-6 w-full px-5 py-10 bg-color3 justify-center items-center'>
      {
        data.map((i) => (
          <div key={i._id} className="">
         
            <ListTourCard 
            NavLinkUrl={`/detailpackages/${i._id}`}
              image={i.thumbnail}
              price={i.price}
              tourName={i.packageName}
              mapLocation={i.packageLocationName} // Corrected typo: packageLoctionName to packageLocationName
              days={i.dayAndNight}
            />
          
        </div>
        ))

      }

    </main>
    </>

  )
}

export default Packages