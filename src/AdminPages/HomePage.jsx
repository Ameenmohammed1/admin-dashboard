import React from 'react'
import SideNav from '../AdminComponects/SideNav/SideNav'
import './Page.css'
import Home from '../AdminComponects/Home/Home'
function HomePage() {
  return (
    <div className='HomePage'>
        <SideNav/>
        <Home/>
    </div>
  )
}

export default HomePage