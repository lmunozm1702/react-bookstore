import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navContainer">
    <div className="navLogo">Bookstore CMS</div>
    <nav className="menuOptions">
      <ul className="navList">
        <li><NavLink to="/" className={(navData) => (navData.isActive ? 'activeLink' : 'none')}>Books</NavLink></li>
        <li><NavLink to="/categories" className={(navData) => (navData.isActive ? 'activeLink' : 'none')}>Categories</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
