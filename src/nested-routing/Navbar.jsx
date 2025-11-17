import React, { useState } from 'react'
import './nav.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  
  
    return (
  
      <nav>
        {/* logo */}
        <NavLink to = '/' className="logo">
        SPIKEIT
        </NavLink>
        {/* hamburger menu icon */}
        <div className='menu-icon' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>

        </div>
        <ul className={menuOpen ? "show" : ""}>
        {/* Home */}
            <li>
                <NavLink to = '/' className={({ isActive }) => (isActive ? "active": "")}
                onClick={() => setMenuOpen(false)}>
                    HOME
                </NavLink>
            </li>

            {/* about */}
            <li>
                <NavLink to= '/about' className={({ isActive }) => (isActive ? "active": "")}
                onClick={() => setMenuOpen(false)}>
                    ABOUT

                </NavLink>
            </li>

            {/* service */}

            <li>
                <NavLink to= '/service' className={({ isActive }) => (isActive ? "active": "")}
                onClick={() => setMenuOpen(false)}>
                SERVICES

                </NavLink>
            </li>

        </ul>

      </nav>


  

    
  )
}

export default Navbar
