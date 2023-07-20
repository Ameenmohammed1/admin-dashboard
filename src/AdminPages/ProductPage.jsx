import React,{} from "react";
import SideNav from "../AdminComponects/SideNav/SideNav";
import "./Page.css";
import Product from "../AdminComponects/Products/Product";
function ProductPage() {
  return (
  
 <div className="ProductPageParent">
      <SideNav/>
      <Product/>
      
    </div>
 
   
  );
}

export default ProductPage;
