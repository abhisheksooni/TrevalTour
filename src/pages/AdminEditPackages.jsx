import React, { useEffect, useState } from 'react'
import AdminPackageCard from '../components/AdminPackageCard'
function AdminEditPackages() {
    const [loding,SetLoding] = useState(false)
    const [data, SetData] = useState([])
    const [Total, SetTotal] = useState("")


    const totalTours  = async ()=>{
      await SetTotal(data.length)
    }
       
     const callapi =  async () => {
      try {
        SetLoding(true)
        const res = await fetch(`https://treval-backend.onrender.com/getall`,)
        const newdata = await res.json()
        SetData(newdata)
        SetLoding(false)
     SetTotal(newdata.length)
      } catch (error) {
        console.log(error);
      }
     
      }
     

    useEffect(() => {

  
      callapi()
    
        SetTotal(data.length)
        totalTours()
      }, [data.length])


  return (
    <>
   
    {loding? <div className="w-full h-[86vh] flex justify-center items-center bg-color3"> 
        <div class="loader"></div>
      </div>  :null}
    <div className="w-full bg-color3 text-center my-10">
        <p  className='text-xl font-semibold'>Total Packages : {Total}</p>
        <div className="mx-auto max-w-[1900px] flex flex-wrap gap-6 w-full px-5 py-10  justify-center items-center">
        {
            data.map((i)=>(
                <AdminPackageCard image={i.thumbnail} days={i.dayAndNight}  tourName={i.packageName} price={i.price} mapLoction={i.packageLocationName} NavLinkAdd={i._id} />
            ))
        }
       </div>
    </div>
    </>
  )
}

export default AdminEditPackages