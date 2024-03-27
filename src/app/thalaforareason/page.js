'use client';
import React from 'react'
import JSConfetti from 'js-confetti'
import Link from 'next/link'

const page = () => {
  const handlenumber = (e) => {
    if(e.target.value==="7"){
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti();
      console.log('congo');
      // alert('you are guessed it correct right but you fooled by the ');
      alert("Congratulations! You've journeyed far, but beware, the path ahead is fraught with deception. You've been led astray by illusions and false trails. Turn back now, retracing your steps to the very pixel where your journey began anew. There, you will find the truth you seek. Good luck!");
    }
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between  p-10 lg:p-24 bg-yellow-500">
      <div className='h-96 w-96 bg-gray-100 text-black rounded-lg border text-center p-4' >
        <h1 className='my-4 mb-10 text-lg'> Guess the number </h1>
        <input type="number" className='p-4 w-full rounded-sm' placeholder='guess the lucky number' onChange={(e)=>{handlenumber(e)}}/>
        {/* <button className='bg-blue-500'>Submit</button> */}
      </div>
    </div>
  )
}

export default page
