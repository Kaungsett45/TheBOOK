import React from 'react'
import bookone from "../assets/books/booktwo.png";
export default function Books() {
  
  
  
  
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
  {[1, 2, 3, 4, 5].map(() => (
    <div className="border-2 border-red-600 rounded-xl overflow-hidden shadow-md bg-white">
      <img
        src={bookone}
        alt="book"
        className="w-full h-48 object-cover"
      />
      <div className="text-center p-4 space-y-2">
        <h1 className="text-lg font-semibold">Book Title</h1>
        <p className="text-sm text-gray-600">Description goes here</p>
        <div className="flex flex-wrap justify-center">
          {["History", "Comedy", "Horror"].map((genre) => (
            <span
              key={genre}
              className="rounded-xl bg-blue-500 text-white text-xs px-3 py-1 m-1"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

  )
}
