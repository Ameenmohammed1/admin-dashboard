import React from "react";
import "./SideNav.css";
import {useNavigate} from 'react-router-dom'

function SideNav() {
  const navigate = useNavigate();
  return (
    <div className="SideNavParent">
      <div className="logo"></div>
      <div className="links">
        <ul>
            <li onClick={()=>navigate('/')}>Dashboard</li>
            <li onClick={()=>navigate('/order')}>Orders</li>
            {/* <li>Profile</li> */}
            <li onClick={()=>navigate('/product')}>Products</li>
            {/* <li>OTP Vefiy</li> */}
            {/* <li>Payments</li> */}
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
