import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import logo from '../../assets/images/logo.png';
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

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
            {/* Dropdown */}

            <li ref={dropdownRef} onClick={() => setIsOpen(!isOpen)} className={styles.dropdown}>
              <span>Business </span>

              {/* Icon changes based on state */}
              <FaChevronDown className={isOpen ? styles.rotate : ""} />

              {isOpen && (
                <ul className={styles.dropdownMenu}>
                  <li><Link to="/branding" onClick={() => setIsOpen(false)}>Business Branding</Link></li>
                  <li><Link to="/promotion" onClick={() => setIsOpen(false)}>Business Promotion</Link></li>
                </ul>
              )}
            </li>
            <li className={styles.navItem}><Link to="/services">Services</Link></li>
            <li className={styles.navItem}><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </nav>


    </>
  );
};

export default Nav;