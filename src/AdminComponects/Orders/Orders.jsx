import React from 'react'
import './Orders.css'
import data from '../data.json'
import OrderTable from '../DataTable/OrderTable'
function Orders() {
  return (
    <div className='OrdersParent'>
         <div className="head">
            <p>Orders</p>
            {/* <button>Add Product</button> */}
            </div>
            <OrderTable data={data}/>
            
    </div>
  )
}

export default Orders