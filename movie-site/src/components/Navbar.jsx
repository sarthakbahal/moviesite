import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <Link to='/'>
          <span className="logo-icon">🎬</span>
          Movie App
        </Link>
      </div>
      <div className='navbar-links'>
        <Link to='/'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  )
}

export default Navbar