import { useEffect, useState } from "react";
import useFetch from "../hooks/usefetch";
import { Link, useLocation } from "react-router-dom";

function TopBooks() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  console.log(params);
  let search = params.get('search');// test term
  const { data: bsk, loading, error } = useFetch(`http://localhost:3000/books${search ? `?q=${search}` : ''}`);

  return (
    <>
      <div className="p-12 w-full flex justify-between mt-12">
        <h2 className="text-[#FF7D29] text-md">Featured Books</h2>
        <button className="text-[#FF7D29]">View All</button>
      </div>

         {loading && 
               <div className="flex justify-center items-center h-40">
                <svg className="animate-spin h-8 w-8 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
              </div> 

        }
      {error && <p className="text-red-500">❌ {error}</p>}
      {!loading && bsk && bsk.length === 0 && <p>No books found.</p>}

      {!!bsk && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-4 p-4">
          {bsk.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id}>  
              <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                <h2 className="text-left font-semibold">{book.title}</h2>
                <div className="flex flex-wrap my-2">
                  {book.categories.map((c) => (
                    <span
                      key={c}
                      className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <button className="transition delay-75 border-[#E9762B] border px-5 py-2 rounded-full hover:bg-[#E9762B] hover:text-white">
                    Add
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default TopBooks;
