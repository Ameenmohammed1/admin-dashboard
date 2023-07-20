import React from 'react'
import './Home.css'
import UserTable from '../DataTable/UserTable'
import data from '../data.json'

function Home() {
  return (
    <div className='HomeParent'>
        <div className="head">
            <p>Profile</p>
            <button>Creat</button>
            </div>
            <div className="dataTabelParent">
            <UserTable data={data}/>
            </div>
            
       
    </div>
  )
}

export default Home