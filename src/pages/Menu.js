import React from 'react'
import './Menu.css';

function Menu() {
  return (
    <div className='menu-container'>
      <div className="menu">
        <a href="#home">Home</a>
      </div>
      <div className="menu">
        <a href="#about">About</a>
      </div>
      <div className="menu">
        <a href="#portfolio">Portfolio</a>
      </div>
      <div className="menu">
        <a href="#github">GitHub</a>
      </div>
      <div className="menu">
        <a href="#linkedin">LinkedIn</a>
      </div>
      <div className="menu">
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Menu