import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => (
  <nav className="nav-bar">
    <NavLink to="/">
      <div className="nav--bar--logo--title">
        <h1 className="logo--title">TOOLHUB</h1>
      </div>
    </NavLink>
  
    <div className="nav-bar-links">
      <NavLink to="/"  className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')} end>
        HOME
      </NavLink>
      <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
        LEADERBOARD
      </NavLink>
      <NavLink to="/recordsboard" className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
        RECORDSBOARD
      </NavLink>
    </div>
  </nav>

);

export default Navbar;