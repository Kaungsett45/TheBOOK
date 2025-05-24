import React from 'react'
import { Outlet } from 'react-router-dom'
import Search from '../pages/Search.jsx'
import Nav from '../components/navigation.jsx'
export default function Layout() {
  return (
    <div className='flex '>
        <Nav/>
        <Search/>

            <Outlet/>
    </div>
  )
}
