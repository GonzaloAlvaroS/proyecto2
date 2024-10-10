import React, { useState } from "react";
import "./Navbar.css"
import logo2 from "../../assets/logo2.png"  
import menu_icon from "../../assets/menu-icon.png"
import { Link } from 'react-scroll'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
      setMobileMenu(!mobileMenu);
  };
  return (
     <nav className={`container "dark-nav" : }`}>   
      <img src={logo2} alt="" className='logo' />
      <ul className="hide-mobile-menu">
        <li><Link to="menu" smooth={true} offset={-85} duration={500}><b>MENU</b></Link></li>
        <li><Link to="hamburguesas" smooth={true} offset={-35} duration={500}><b>HAMBURGUESAS</b></Link></li>
        <li><Link to="promos" smooth={true} offset={-25} duration={500}><b>PROMOCIONES</b></Link></li>
        <li><Link to="contratando" smooth={true} offset={-125} duration={500}><b>CONTRATANDO</b></Link></li>
        <li><Link to="partebajatodo" smooth={true} offset={-100} duration={500}><b>CONTACTO</b></Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
