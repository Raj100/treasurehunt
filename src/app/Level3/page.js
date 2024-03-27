'use client';
import React from 'react'
// import eye from '../../assets/img.gif'

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-10 lg:p-24">
    <div className='flex flex-col gap-32'>
      <h1 className='text-center'>Bhai bhai bhai fire bhai level 3 pr phoch gya, dil se congo bhai congo!</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 '>
        <img className='drop-shadow-[0_0px_50px_rgb(216,18,93)]' src="/img-unscreen.gif" alt="" />
        <img className='drop-shadow-[0_0px_50px_rgb(216,18,93)]' src="/img-unscreen.gif" alt="" />
        <img className='drop-shadow-[0_0px_50px_rgb(216,18,93)]' src="/img-unscreen.gif" alt="" />
        {/* <img className='' src="/img.gif" alt="" />
        <img className='' src="/img.gif" alt="" /> */}
      </div>
      </div>
    </div>
  )
}

export default page
