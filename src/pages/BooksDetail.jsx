import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/usefetch';

export default function BooksDetail() {


  let{id} =useParams();

  let {data :book , loading ,error} =  useFetch(`http://localhost:3000/books/${id}`);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {book && (
        <div className="flex flex-col items-center mt-12">
          <img src={book.image} alt={book.title} className="w-48 h-64 object-cover rounded" />
          <h1 className="text-2xl font-bold mt-4">{book.title}</h1>
          <p className="text-gray-600 mt-2">{book.summary}</p>
          <p className="text-lg font-semibold mt-4">${book.price}</p>
          <button className="bg-[#27548A] px-6 py-2 rounded-full text-white mt-4">Add to Cart</button>
        </div>
      )}
    </div>
  )
}
