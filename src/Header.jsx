// Header.js
import React from 'react';
import './Header.css'; // Ensure this file is imported

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <span className="logo-text">StyrLock</span> {/* Keep only the brand name */}
      </div>
      <div className="nav">
        <a href="#home" className="nav-link">
          <span className="oval">Home Products</span>
        </a>
        <a href="#services" className="nav-link">
          <span className="oval">Services</span>
        </a>
        <a href="#cart" className="nav-link">
          <span className="oval">Cart</span>
        </a>
        <a href="#contact" className="nav-link">
          <span className="oval">Contact</span>
        </a>    
      </div>
    </div>
  );
}

export default Header;
