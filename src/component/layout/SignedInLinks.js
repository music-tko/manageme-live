import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import burgerClose from "../img/icon-close.svg";
import burgerOpen from "../img/icon-hamburger.svg"

const SignedInLinks = () => {

	const [navbarOpen, setNavbarOpen] = useState(false)

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen)
	}

	const closeMenu = () => {
		setNavbarOpen(false)
	}

	return (
		<nav className="navvie">
			<div>
			
					
					
				<ul className='mainNav'>

				<li><Link to='/dashboard'>ManageMe</Link></li>

				    <div className="navBar-SignIn">
			
					<li>
						<NavLink to='/to-do'>Todo</NavLink>
					</li>
					<li>
						<NavLink to='/notes'>Notes</NavLink>
					</li>
					<li>
						<NavLink to='/pomodoro'>Pomodoro</NavLink>
					</li>
					<li>
						<NavLink to='/dashboard'>Dashboard</NavLink>
					</li>
					
					</div>
				</ul>
			</div>

			<div className='burger-menu'>
				<button onClick={handleToggle}>
					{navbarOpen ? (
						<img
							className='burg-img'
							src={burgerClose}
							alt='burger-menu is closed'
						/>
					) : (
						<img
							className='burg-img'
							src={burgerOpen}
							alt='burger menu is open'
						/>
					)}
				</button>
				<ul className={`${navbarOpen ? " showMenu" : "hideMenu"}`}>
					{/* <li class='nav-a'>
						<NavLink
							activeClassName='active-link'
							onClick={() => closeMenu()}
							className='nav-p'
							to='/dashboard'
							style={{ textDecoration: "none" }}
							exact>
							ManageMe
						</NavLink>
					</li> */}

					<li class='nav-a'>
						<NavLink
							activeClassName='active-link'
							onClick={() => closeMenu()}
							className='nav-p'
							to='/to-do'
							style={{ textDecoration: "none" }}
							exact>
							ToDo
						</NavLink>
					</li>

					<li class='nav-a'>
						<NavLink
							activeClassName='active-link'
							onClick={() => closeMenu()}
							className='nav-p'
							to='/notes'
							style={{ textDecoration: "none" }}
							exact>
							Notes
						</NavLink>
					</li>

					<li class='nav-a'>
						<NavLink
							activeClassName='active-link'
							onClick={() => closeMenu()}
							className='nav-p'
							to='/pomodoro'
							style={{ textDecoration: "none" }}
							exact>
							Pomodoro
						</NavLink>
					</li>

					<li class='nav-a'>
						<NavLink
							activeClassName='active-link'
							onClick={() => closeMenu()}
							className='nav-p'
							to='/dashboard'
							style={{ textDecoration: "none" }}
							exact>
							Dashboard
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default SignedInLinks;
