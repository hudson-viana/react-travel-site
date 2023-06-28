import React, { useState } from 'react'
import { link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <a href='#' className='navbar-logo'>Awesome Travel <i className="fa-solid fa-plane-departure"></i></a>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href='#' className='nav-links' onClick={closeMobileMenu}>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-links' onClick={closeMobileMenu}>Services</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-links' onClick={closeMobileMenu}>Products</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-links' onClick={closeMobileMenu}>To-Do</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar;