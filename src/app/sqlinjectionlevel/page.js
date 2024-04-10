import React from 'react'

const page = () => {
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center justify-between  p-10 lg:p-24">
      <div className='flex flex-col gap-4 w-full h-full items-center justify-center'>
        <input className='p-4 text-lg rounded-md w-full max-w-[500px]' type="text" placeholder='YourEmailId' name="" id="" />
        <input className='p-4 text-lg rounded-md w-full max-w-[500px]' type="password" placeholder='password' name="" id="" />
        <button onClick={} className='p-4 bg-blue-500 text-white rounded-md w-full max-w-[500px]'>Login</button>
      </div>
    </div>
  )
}

export default page
