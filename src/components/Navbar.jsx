import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='header'>
      <img className='logo' src="/assets/log.png" alt="" />
      <div className="navbar">
        <ul>
          <li><NavLink to="/about" style={{ color: "rgb(237, 69, 8)", textDecoration: 'none', fontSize: '1.5rem', }}>About</NavLink></li>
          <li><NavLink to="/booknow" style={{ color: 'rgb(237, 69, 8)', textDecoration: 'none', fontSize: '1.5rem', width: "40%" }}>Booknow</NavLink></li>
          <li className='log'><NavLink to="/" style={{ color: 'maroon', textDecoration: 'none', fontSize: '2.3rem' }}>Winx</NavLink></li>
          <li><NavLink to="/reviews" style={{ color: 'rgb(237, 69, 8)', textDecoration: 'none', fontSize: '1.5rem' }}>Reviews</NavLink></li>
          <li><NavLink to="/contact" style={{ color: 'rgb(237, 69, 8)', textDecoration: 'none', fontSize: '1.5rem' }}>Contact</NavLink></li>
        </ul>
      </div>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa fa-user" aria-hidden="true"></i>  Profile
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#"><i class="fa fa-check-circle" aria-hidden="true"></i>  Register as Chef</a></li>
          <li><a class="dropdown-item" href="#"><i class="fa fa-cutlery" aria-hidden="true"></i>  Book a Cook</a></li>
          <li><a class="dropdown-item" href="#"><i class="fa fa-user-times" aria-hidden="true"></i> Logout</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar