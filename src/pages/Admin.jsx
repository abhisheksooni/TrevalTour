import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Admin() {
  return (
    <main className='bg-color3 py-5'>
      <div className="">
        <ul className=' text-center text-xl flex justify-center gap-4 * text-color1 *:p-2 *:rounded-full *:px-6'>

          <NavLink to={"addpackage"} className={({ isActive }) => `${isActive ? 'bg-color5' : 'bg-color6'} hover:bg-color5  text-white`} ><i className="fa-solid fa-plus"> </i> Add Package</NavLink>
          <NavLink to={"editpackages"} className={({ isActive }) => `${isActive ? 'bg-color5' : 'bg-color6'} hover:bg-color5  text-white`} > <i className="fa-regular fa-pen-to-square"></i> Edit Packages</NavLink>
        </ul>

      </div>
      <section className='min-h-[80vh]'>
        <Outlet />
      </section>
    </main>
  )
}

export default Admin