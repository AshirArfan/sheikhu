import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <a href="#home" className="footer-link">Home</a>
          <a href="#products" className="footer-link">Products</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#contact" className="footer-link">Contact</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Medical Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
