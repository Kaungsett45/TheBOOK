import {React ,useState} from 'react'

import { Link } from 'react-router-dom'
export default function dropdown() {

    
        const menuItems = [
       { label: 'Setting', to: '/setting' },
        { label: 'Create', to: '/create' },
        { label: 'Payment', to: '/payment' },
        { label: 'Log out', to: '/logout' }
    
        ];

  return (
 <div className="bg-[#E9762B] p-2 text-white absolute left-6 top-14 border-2 rounded-md space-y-2">
  {menuItems.map((item, index) => (
    <Link
      key={index}
      to={item.to}
      className="block p-1 cursor-pointer rounded-sm hover:scale-105 hover:bg-[#F29F58]"
    >
      {item.label}
    </Link>
  ))}
</div>
  )
}
