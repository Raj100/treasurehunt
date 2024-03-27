"use client";
import React from 'react'
import { useState, useEffect } from 'react'
import JSConfetti from 'js-confetti'
import Link from 'next/link'



const page = () => {
    useEffect(() => {
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti();
    },[]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> congratulations bhai ! Abb aagle stage pr jane ka rasta thund </h1>
      <Link href="Level2"><button className='p-10 bg-blue-500 opacity-0	'> Submit</button></Link>
    </div>
  )
}

export default page
