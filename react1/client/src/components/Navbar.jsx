import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className="container">
        <nav className="navbar">
          <h3><Link className="link" to='/' >Home</Link></h3>
          <h3><Link className="link" to='/notes' >Notes</Link></h3>
          <h3><Link className="link" to='/createnote' >Create Notes</Link></h3>
        </nav>
    </div>
    </>
  )
}

export default Navbar
