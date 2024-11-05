import React from 'react';
import './Body.css';
import logo from './Logo Full.png';

function Body() {
  return (
    <main className="body">
      <div className="intro-section">
        <div className="logo-container">
          <img src={logo} alt="StyrLock Logo" className="body-logo" />
        </div>
        <h1 className="store-name">StyrLock</h1>
        <p className="tagline">locking in safety</p>
        <p className="description">
          Welcome to StyrLock, your trusted online pharmacy. We prioritize safety and
          reliability in every product we offer. Secure your health with StyrLock.
        </p>
        <div className="icon-container">
          <i className="fas fa-shield-alt icon"></i>
          <i className="fas fa-pills icon"></i>
          <i className="fas fa-truck icon"></i>
        </div>
        <button className="shop-now">Shop Now</button>
      </div>
    </main>
  );
}

export default Body;
