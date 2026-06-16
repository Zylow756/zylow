import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import logoImage from '../../assets/images/logo.png';
import React, { useState } from "react";
import Enquiry from '../../pages/Enquiry';
import { motion as Motion } from "framer-motion";
const text = "Zylow-Web-Solution";


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.heroHeader}>
      <div className={styles.logo}>
        {/* <Motion.img
  src={logoImage} // your logo path
  alt="logo"
  initial={{ scale: 0, rotate: -180 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  whileHover={{ rotate: 10, scale: 1.1 }}
  className={styles.logo}
/>*/}
        <img src={logoImage}></img>
        <div className={styles.titleWrapper}>
          <Motion.h1 className={styles.title}>
            {text.split("").map((char, index) => (
              <Motion.span
                key={index}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.1
                }}
                style={{ display: "inline-block" }}
              >
                {char}
              </Motion.span>
            ))}
          </Motion.h1>
        </div>
      </div>
      {/* Hamburger Menu */}
      <div
        className={`${styles.menuIcon} ${menuOpen ? styles["open"] : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <nav className={`${styles.navbar} ${menuOpen ? styles["active"] : ""}`}>
        <Link to="/" onClick={handleNavClick}>Home</Link>
        <Link to="/about" onClick={handleNavClick}>About Us</Link>
        <Link to="/services" onClick={handleNavClick}>Services</Link>
        <Link to="/showCasePage" onClick={handleNavClick}>Show Case</Link>
        <span
          onClick={() => {
            setShowEnquiry(true);
            setMenuOpen(false);
          }}
        >
          Enquiry
        </span>
        <Link to="/contact" onClick={handleNavClick}>Contact Us</Link>
        <Link to="/jobVacancies" onClick={handleNavClick}>Job Vacancies</Link>
      </nav>
      {showEnquiry && <Enquiry onClose={() => setShowEnquiry(false)} />}
    </header>
  );
};

export default Nav;