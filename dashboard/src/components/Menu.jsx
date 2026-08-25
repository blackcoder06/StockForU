import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../index.css';

const Menu = () => {
  const [selectedMenu , setSelectedMenu] = useState(0);
  const [isProfilDropdownOpen , setisProfilDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfilClick = (index) => {
    setisProfilDropdownOpen(!isProfilDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

const handleLogOut = () => {
  window.location.href = "http://localhost:5173";
};

  return (
    <div className="menu-container mt-2">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus mt-4">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={() => {
              handleMenuClick(0);
            }}>
            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
              <Link style={{textDecoration:"none"}} to="/orders" onClick={() => {
              handleMenuClick(1);
            }}>
            <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
              <Link style={{textDecoration:"none"}} to="/holdings" onClick={() => {
              handleMenuClick(2);
            }}>
            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
              <Link style={{textDecoration:"none"}} to="/positions" onClick={() => {
              handleMenuClick(3);
            }}>
            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
            
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds" onClick={() => {
              handleMenuClick(4);
            }}>
            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
            
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/apps" onClick={() => {
              handleMenuClick(5);
            }}>
            <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          
          </li>
        </ul>
        <hr />
        <div className="profile-wrapper">
  <div
    className="profile d-flex align-items-center mb-4"
    onClick={handleProfilClick}
  >
    <div className="avatar">ZU</div>

    <span className="username mb-0">
      USERID
    </span>
  </div>

  {isProfilDropdownOpen && (
    <div className="profile-dropdown">
      <button onClick={handleLogOut}>
        Logout
      </button>
    </div>
  )}
</div>
        
      </div>
    </div>
  );
};

export default Menu;
