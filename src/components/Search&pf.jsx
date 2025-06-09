import React from 'react'

export default function Search() {
  return (
    <div >
      <div className='text-white rounded-md p-2 flex justify-center '>
        <button className='bg-[#919191]  text-sm px-4 py-2 rounded-md mx-1'>ALL</button>
        <input 
          type="text" 
          placeholder="Search your favorite books,authors etc." 
          className="bg-[#919191] px-2  rounded w-[300px]"
        />
          <button className='bg-[#E3D4B1] border-[#919191] p-3 border-4  rounded-md mx-1'>Search</button>
      </div>
  </div>
  )
}
