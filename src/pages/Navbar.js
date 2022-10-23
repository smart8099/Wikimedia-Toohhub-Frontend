import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Toolhub_community_logo.svg'

const Navbar = () => (
  <nav className="nav-bar">
    <NavLink to="/">
      <div className="nav-logo">
        <img className="toolhub-logo" src={logo} alt="toolhub logo" />
        <h1 className="logo-title"><abbr title="Toolhub Record Management System">TRMS</abbr></h1>
      </div>
    </NavLink>

    <div className="nav-bar-links">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
        Home
      </NavLink>
      <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
        LeaderBoard
      </NavLink>
      <NavLink to="/recordsboard" className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>
        RecordsBoard
      </NavLink>
    </div>
  </nav>

);

export default Navbar;