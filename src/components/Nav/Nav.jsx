import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import logo from '../../assets/images/logo.png';
import React, { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles['nav-container']}>

          {/* Logo */}
          <div className={styles['logo']}>
            <img src={logo} alt="logo" />
          </div>

          {/* Hamburger Menu */}
          <div
            className={`${styles["menu-icon"]} ${menuOpen ? styles["open"] : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Overlay */}
          {menuOpen && (
            <div
              className={styles['overlay']}
              onClick={() => setMenuOpen(false)}
            ></div>
          )}

          {/* Navigation Links */}
          <ul className={`${styles["nav-links"]} ${menuOpen ? styles["active"] : ""}`}>
            <li className={styles.navItem}><Link to="/">Home</Link></li>
            <li className={styles.navItem}><Link to="/about">About Us</Link></li>
            <li className={styles.navItem}><Link to="/services">Services</Link></li>
            <li className={styles.navItem}><Link to="/contact">Contact Us</Link></li>
           
          </ul>
        </div>
      </nav>

     
    </>
  );
};

export default Nav;