import React from 'react'
import './Product.css'
import data from '../data.json'
import ProductTable from '../DataTable/ProductTable'
function Product() {
  return (
    <div className='ProductParent'>
       <div className="head">
            <p>Products</p>
            <button>Add Product</button>
            </div>
            <ProductTable data={data}/>
    </div>
  )
}

export default Product