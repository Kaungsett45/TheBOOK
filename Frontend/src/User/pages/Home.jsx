import React from 'react'
import { Outlet , Link, useNavigate } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import '../../Layout/style.css'
import Nav from '../components/navigation';
import UserDashboard from '../components/UserDashboard';
export default function Layout() {
  
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  console.log(token)
  const isLoggedIn =!!token;




  return (
    <>


   
    <div className=' '>
        <Nav/>
         {isLoggedIn ? (
          <div>
               <UserDashboard/>
          </div>
         ):(
          <div>
            <SwitchTransition>
              <CSSTransition timeout={200} classNames='fade' key={location.pathname}>
            
                  <div className='  '>
                
                    <Outlet/>
                  </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
         )}
    </div>
      
       
    </>
  )
}
