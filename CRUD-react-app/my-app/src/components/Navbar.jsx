import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="container nav-container">
        <nav className="navbar">
          <h3 className="home-link" ><Link className="link" to='/' >Home</Link></h3>
          <h3><Link className="link" to='/additem' >Add Item</Link></h3>
          <h3 className="show-link"><Link className="link" to='/showitems' >Show Items</Link></h3>
        </nav>
    </div>
    </>
  )
}

export default Navbar
