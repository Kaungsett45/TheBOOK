import React from 'react'
import { Outlet } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './style.css'
import Nav from '../components/navigation.jsx'
import Books from '../components/TopBooks.jsx'
export default function Layout() {
  return (
    <>
    <div className=' '>
        <Nav/>
            <SwitchTransition>
              <CSSTransition timeout={200} classNames='fade' key={location.pathname}>
            
                  <div className='   flex flex-col items-start ml-12 '>
                
                    <Outlet/>
                  </div>
              </CSSTransition>
            </SwitchTransition>
    </div>
      
       
    </>
  )
}
