import { useState, useEffect, useRef } from 'react';

import Drop from './dropdown.jsx'
import Search from '../components/Search&pf.jsx'
import Adsone from '../assets/icon/ads-one.png'
import cate from '../assets/icon/category-icon.png'
import fav from '../assets/icon/fav-icon.png'
import logo from '../assets/logo/logo.png'
import cart from '../assets/icon/cart-icon.png'
import set from '../assets/icon/setting-icon.png'
import { Link } from 'react-router-dom'
import iset from '../assets/icon/settings-3-fill-svgrepo-com.svg'
export default function navigation() {
 const wrapperRef = useRef(null);

 useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
  { label: "CATEGORIES", icon: cate },
  { label: "FAVOURITE", icon: fav },
  { label: "CART", icon: cart },
  { label: "SETTING", icon: set },
];

  return (
    <div className="flex items-center justify-between  mt-6 ml-32 mr-32">
        <Link to="/" className='flex items-center '>
        <h1 className='font-2xl font-semibold  '>The BOOKS</h1>
        </Link>
            <div className='flex items-center space-x-4'>
             <Search/>  
            </div>
        <div className=' flex items-center text-lg space-x-12'>
           <div className='rounded-full mx-6  font-md text-white flex space-x-4  p-2 bg-[#E9762B] '>
            <Link to="/" className=' hover:scale-105 transition-colors duration-200 rounded-full py-1 px-6 hover:bg-[#F29F58] cursor-pointer' >Home</Link>
            <Link to="/books"  className='hover:scale-105 transition-colors duration-200 rounded-full px-6 py-1 hover:bg-[#F29F58] cursor-pointer'>Books</Link>
            <Link to="/"  className='hover:scale-105  transition-colors duration-200 rounded-full px-6 py-1 hover:bg-[#F29F58] cursor-pointer'>Pricing</Link>
           
            </div>
            <div className='relative '  ref={wrapperRef}>
                      <img
              src={Adsone}
              onClick={() => setIsOpen(!isOpen)}
              alt="Advertisement"
              className="relative w-12 h-12 object-cover rounded-full shadow-md cursor-pointer"
            />
                          {isOpen && (
                            <Drop/>
                          )}
              </div>
         
         </div>

     

    </div>
  )
}
