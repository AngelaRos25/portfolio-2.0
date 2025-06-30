import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to={"/"}>
        <img src={logo} className='logo' alt="" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='nav-links'>
        <ul className={menuOpen ? "open" : ""} >
          <li><NavLink to="/about">Chi sono</NavLink></li>
          <li><NavLink to="/project">Progetti</NavLink></li>
          <li><NavLink to="/contact">Contatti</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;