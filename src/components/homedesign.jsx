import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react';

export default function Homedesign() {
  return (
    <>
    <div className='  '>

        <div className="relative w-fit mt-24">
      <div className="absolute z-0 rounded-full rotate-45 bg-[#FFBD73] w-24 h-13 top-2 left-2"></div>
      <div className="relative z-10 space-y-2 tracking-wide font-semibold text-2xl">
        <p>S<span className='text-white'>tore</span> Books,</p>
        <p>Buy <span className='text-white'>wh</span>at You Love, Showcase</p>
        <p>Your Collection with Pride.</p>
      </div>
        <div className="absolute z-0 rounded-full rotate-15 bg-[#FFBD73] w-24 h-13 -top-5 right-2"></div>


    </div>

    </div>

      <Link to="/"  className=' border-2 mt-12 p-2 rounded-full px-3 bg-[#FB9E3A] font-semibold text-white'> Getting Started  </Link>
     
     
     
     
      </>
  )
}
