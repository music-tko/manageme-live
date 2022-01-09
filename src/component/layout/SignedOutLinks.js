import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import burgerClose from "../img/icon-close.svg";
import burgerOpen from "../img/icon-hamburger.svg"

const SignOutLinks = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }
  return (
    <nav className="navvie">
     <ul>
      <li><Link to="/">ManageMe</Link></li>
      <div className="navBar-SignOut">
        <li><NavLink to='/register'>Signup</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </div>
      </ul>
      <div className="burger-menu">
        <button onClick={handleToggle}>{navbarOpen ? <img className="burg-img" src={burgerClose} alt="burger-menu is closed" /> : <img className="burg-img" src={burgerOpen} alt="burger menu is open" />}</button>
        <ul className={`${navbarOpen ? "showMenu" : "hideMenu"}`}>
          <li class="nav-a">
            <NavLink
              activeClassName="active-link"
              onClick={() => closeMenu()}
              className="nav-p" to="/register" style={{ textDecoration: 'none' }}
              exact>
              Signup</NavLink></li>

          <li class="nav-a">
            <NavLink activeClassName="active-link"
              onClick={() => closeMenu()}
              className="nav-p" to="/login" style={{ textDecoration: 'none' }}
              exact>
              Login</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default SignOutLinks