import React from 'react';
import { NavLink } from 'react-router-dom';
// import './style/Navbar.css';

const Navbar = () => {
    return (
      <nav className="nav">
        <NavLink to="/" end className="nav-item" activeClassName="active">About</NavLink>
        <NavLink to="/resume" className="nav-item" activeClassName="active">Resume</NavLink>
        <NavLink to="/research" className="nav-item" activeClassName="active">Research</NavLink>
        <NavLink to="/projects" className="nav-item" activeClassName="active">Projects</NavLink>
      </nav>
    );
  };
  
  export default Navbar;
