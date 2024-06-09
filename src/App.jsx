import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <h1 className='font-bold text-4xl'>hello</h1>
   
   </>
  )
}

export default App
