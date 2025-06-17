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
        <div className="grid grid-cols-2 mt-12 space-y-4">
          <div>
            <img src={book.image} alt={book.title} className="w-78 object-cover rounded" />
            <h1 className="text-2xl  font-bold mt-4">{book.title}</h1>
            <div className='rounded-full bg-blue-400 text-white px-4 py-1 mt-2 inline-block'>
            {book.genre}</div>
          </div>
            <div className='ml-12 '>
            <p className="text-gray-600 mt-2">{book.summary}</p>
            </div>
        </div>
      )}
    </div>
  )
}
