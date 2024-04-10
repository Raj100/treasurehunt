"use client"
import React from 'react'
import panda1 from '../../assets/panda/image_part_001.jpg'
import pandas from './PandaPuzzleGame'
import panda from "../../assets/panda.jpeg"
import PandaPuzzleGame from './PandaPuzzleGame'

const page = () => {
  return (
    <div>
      <PandaPuzzleGame src="../../assets/panda.jpeg" numRows={3} numCols={3}></PandaPuzzleGame>
    </div>
  )
}

export default page
