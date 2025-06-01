import React from 'react'

export default function Search() {
  return (
    <div className='ml-12 border-red-400 border-2'>
      <div className='bg-[#D9D9D9] rounded-md p-2 flex justify-center '>
        <button className='bg-white text-sm px-4 py-2 rounded-md mx-1'>ALL</button>
        <input 
          type="text" 
          placeholder="Search your favorite books,authors etc." 
          className="bg-white px-2  rounded w-[300px]"
        />
          <button className='bg-[#E3D4B1] p-3 border-4 border-white rounded-md mx-1'>Search</button>
      </div>
  </div>
  )
}
