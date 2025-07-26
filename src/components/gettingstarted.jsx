import React from 'react'

export default function gettingstarted() {
  return (
    <div className="flex justify-center items-center w-full  ">
        


        <div className='space-y-2 w-96 p-4 mt-14 shadow-md rounded-lg'>
          <h2 className='text-center font-bold'>Register</h2>
          <div className=""><p>email</p>
          <input type="email" placeholder='enter your email' className='border-2 py-1 px-2 rounded-sm require w-full'></input>
            </div>
          <button type="submit" className='text-white  bg-[#E9762B] w-full rounded-sm py-1 px-2 '>Continue</button>
         

         </div>

         
    
    </div>
  )
}
