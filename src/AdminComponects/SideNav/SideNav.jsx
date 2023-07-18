import React from "react";
import "./SideNav.css";
function SideNav() {
  return (
    <div className="SideNavParent">
      <div className="logo"></div>
      <div className="links">
        <ul>
            <li>Dashboard</li>
            <li>Orders</li>
            <li>Profile ope the door</li>
            <li>Products</li>
            <li>OTP Vefiy</li>
            <li>Payments</li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
