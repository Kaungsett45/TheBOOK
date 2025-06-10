import React from 'react'
import Adsone from '../assets/icon/ads-one.png'
import cate from '../assets/icon/category-icon.png'
import fav from '../assets/icon/fav-icon.png'
import logo from '../assets/logo/logo.png'
import cart from '../assets/icon/cart-icon.png'
import set from '../assets/icon/setting-icon.png'
export default function navigation() {

  const navItems = [
  { label: "CATEGORIES", icon: cate },
  { label: "FAVOURITE", icon: fav },
  { label: "CART", icon: cart },
  { label: "SETTING", icon: set },
];

  return (
    <div className="flex justify-between ">
            
        <img src={logo} alt="Logo" className=""/>
        
        <div className='flex items-center space-x-12'>
      
            <p>Home</p>
            <p>Books</p>
            <p>Author</p>
          <img
  src={Adsone}
  alt="Advertisement"
  className="w-12 h-12 object-cover rounded-full shadow-md"
/>
   <p>Setting</p>
         
         </div>

     

    </div>
  )
}
