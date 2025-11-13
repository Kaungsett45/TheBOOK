import React from 'react'
import { Outlet , Link, useNavigate } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import '../../Layout/style.css'
import Nav from '../components/Home_components/navigation'
export default function Layout() {
  
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const isLoggedIn =!!token;



  return (
    <>
    <div className=' '>
        <Nav/>
            <SwitchTransition>
              <CSSTransition timeout={200} classNames='fade' key={location.pathname}>
            
                  <div className='  '>
                
                    <Outlet/>
                  </div>
              </CSSTransition>
            </SwitchTransition>
    </div>
      
       
    </>
  )
}
