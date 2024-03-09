import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-brand">
        <h2>Voting App</h2>
      </div>

      <div className='navbar-links'>
        <NavLink to='/'>Home</NavLink>
        <button>Logout</button>
        <button>Result</button>
      </div>
      <button>Register</button>
    </div>
  )
}

export default Navbar;


