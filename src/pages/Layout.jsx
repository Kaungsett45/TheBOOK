import React from 'react'
import { Outlet } from 'react-router-dom'
import Search from '../components/Search&pf.jsx'

import Nav from '../components/navigation.jsx'
import Books from '../components/Books.jsx'
export default function Layout() {
  return (
    <>
    <div className='flex '>
        <Nav/>
        <div className=' flex flex-col items-start ml-12 border-2 border-red-400 '>
         <Search/>
          <Outlet/>
         </div>
    </div>
      
       
    </>
  )
}
