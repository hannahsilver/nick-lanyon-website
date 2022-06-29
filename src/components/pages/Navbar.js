import React, {useState} from "react"
import {NavLink, Link} from 'react-router-dom'
import Button from './Button'
import './Navbar.css' 
import {BrowserRouter as Router} from 'react-router-dom'


function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-top">
                    <Link to="/" className="navbar-logo">Nick Lanyon</Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-links" activeclassname="active" onClick={closeMobileMenu}>
                            portfolio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-links" activeclassname="active" onClick={closeMobileMenu}>
                            about
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <Button mailTo="mailTo:nicklanyon93@gmail.com"/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
