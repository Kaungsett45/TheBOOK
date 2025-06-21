import { useEffect, useState } from "react";
import bookone from "../assets/books/bookone.jpg";
import useFetch from "../hooks/usefetch";
import fav_icon from "../assets/icon/fav-icon.png";
import axios from "axios";
import { Link } from "react-router-dom";
function TopBooks(){  


 let { data : bsk ,loading, error} =  useFetch("http://localhost:3000/books");
  
 if(error){
  return <p>{error}</p>
 }
 
 
 return(
    <>
      
        <div className="  w-full flex justify-between mt-12 ">
         <h2 className="text-[#FF7D29] text-md ">Featured Books</h2>
         <button className="text-[#FF7D29]">View All</button>
        </div>
            
              {loading && <p>Loading..</p>}
              
              {!!bsk && (
              
                <div className="  scrollbar-hide flex flex-wrap space-x-6 space-y-6  m-4 p-4 ">
                {bsk.map((book) => (
                <Link to={`/books/${book.id}`} key={book.id}>
                <div >
                      <img src={book.image} alt="" className=" flex justify-center w-42 h-46 object-fit rounded-xs" />
                    <h2 className="text-left flex-wrap  flex  ">{book.title}</h2>
                    <span className="text-xs text-gray-400">part 1</span>
                  <div className="  flex justify-between  items-center ">
                    <p>{book.price}</p>
                    <button className="bg-[#27548A] px-7 py-2  rounded-full text-white">Add</button>
                
                   </div>
                   </div>
              
                  
                  </Link>
                  ))}
                   </div>
              )}


              
    </>
  )
}
export default TopBooks;
