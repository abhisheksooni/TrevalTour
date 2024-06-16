import React,{useState} from 'react'

function Singin() {
    const [from,Setfrom] = useState({})
    const [user,Setuser] = useState([])

const handleForm = (e)=>{
    Setfrom({
        ...from,
        [e.target.name]:e.target.value
    })
}

const handleSubmit  = async (e)=>{
    e.preventDefault();
    const res = await fetch("http://localhost:3002/shinup",{
        method:'POST',
        body:JSON.stringify(from),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data = await res.json();
    console.log(data);
}


const getall = async(e)=>{
   const res =  await fetch("http://localhost:3002/getall")
   const data = await res.json();
   Setuser(data);
//    console.log(User);
}

  return (
    <div   className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div   className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2   className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Longin only admin</h2>
    </div>
  
    <div   className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit}className='  flex flex-col gap-2'>
          {/* <span className='text-lg font-semibold pl-3'>Username</span>
          <input type="text" name="username" onChange={handleForm}  placeholder='Username' className='border-2 rounded-xl w-full py-3  px-3'></input> */}
          
          <span className='text-lg font-semibold pl-3'>Email</span>
          <input type="text" name="email"  placeholder='Email' onChange={handleForm} className='border-2 rounded-xl w-full py-3  px-3'></input>
          <span className='text-lg font-semibold pl-3'>Password</span>
          <input type="text" name="password" placeholder='Set Password' onChange={handleForm} className='border-2 rounded-xl w-full py-3  px-3 mb-4'></input>
          <button type='submit' className='rounded-full p-4 bg-color5 text-white w-full max-w-[250px] mx-auto'>Login Admin</button>
        </form>
    </div>
  </div>
  
  )
}

export default Singin