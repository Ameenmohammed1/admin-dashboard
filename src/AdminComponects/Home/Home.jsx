import React from 'react'
import './Home.css'
import UserTable from '../DataTable/User'
function Home() {
  return (
    <div className='HomeParent'>
        <div className="head">
            <p>Profile</p>
            <button>Creat</button>
            </div>
            <div className="dataTabelParent">
            <UserTable/>
            </div>
            
       
    </div>
  )
}

export default Home