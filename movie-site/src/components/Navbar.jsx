import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <Link to='/'>Movie App</Link>
        </div>
        <div className='navbar-links'>
            <Link to='/'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
        </div>
    </div>
  )
}

export default Navbar