import React from 'react'

export default function Books() {
  
  
  
  
  return (
    <div className='flex-1 w-full grid grid-cols-4 gap-4 border-2 border-green-400'>
        {[1,2,3,4,5].map(()=>(
            <div className='bg-blue-200 '>
                <img src="" alt="" />
                <div>
                   <h1>Book Title</h1>
                    <p>description</p>
                    <div>
                        <span>Genres</span>
                    </div>
                </div>
            </div>
        ))}
       
    </div>
  )
}
