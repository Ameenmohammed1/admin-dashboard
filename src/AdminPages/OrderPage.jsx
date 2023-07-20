import React from 'react'
import './Page.css'
import SideNav from '../AdminComponects/SideNav/SideNav'
import Orders from '../AdminComponects/Orders/Orders'
function OrderPage() {
  return (
    <div className='OrderPageParant'>
        <SideNav/>
        <Orders/>
    </div>
  )
}

export default OrderPage