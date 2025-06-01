import React from 'react'
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
    <div className=" h-auto">
            
        <img src={logo} alt="Logo" className=""/>
        
        <h2 className="mt-12 font-semibold text-[#484848] text-xs">MENU</h2>
      <div className='bg-[#E9DCC1] m-4 p-6 rounded-2xl'>
          {navItems.map((item, index) => (
            <div key={index} className='mt-6 first:mt-0 group flex hover:text-white cursor-pointer items-center gap-2'>
              <img src={item.icon} alt="" className='w-8 group-hover:opacity-60 transition duration-200' />
              <p className='group-hover:text-[#B5B5B5] font-semibold font-pri_font text-xs transition duration-200'>
                {item.label}
              </p>
            </div>
          ))}
      </div>

    </div>
  )
}
