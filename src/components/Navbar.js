import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => (
  <div className="nav-bar">
    <a className="nav-brand" href="#/">Bookstore CMS</a>
    <ul className="nav-list">
      <li><NavLink to="/" className={(navData) => (navData.isActive ? 'nav-link active-link' : 'nav-link')}>BOOKS</NavLink></li>
      <li><NavLink to="/categories" className={(navData) => (navData.isActive ? 'nav-link active-link' : 'nav-link')}>CATEGORIES</NavLink></li>
    </ul>
    <div className="icon-button">
      <ImUser />
    </div>
  </div>
);

export default Navbar;
