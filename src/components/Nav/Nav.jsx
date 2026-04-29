import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import logoImage from '../../assets/images/logo.png';
import React, { useState } from "react";
import Career from '../../pages/Career';
import Enquiry from '../../pages/Enquiry';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCareer, setShowCareer] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <header className={styles.heroHeader}>
      <div className={styles.logo}>
        <img src={logoImage}></img>
        <h1>Zylow - Web</h1>
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
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/showCasePage">Show Case</Link>
        <span onClick={() => setShowCareer(true)} className={styles.careerBtn}>Career</span>
        <Link to="/contact">Contact Us</Link>
        <span onClick={() => setShowEnquiry(true)} className={styles.enquiryBtn}>Enquiry</span>
      </nav>
      {showCareer && <Career onClose={() => setShowCareer(false)} />}
      {showEnquiry && <Enquiry onClose={() => setShowEnquiry(false)} />}
    </header>
  );
};

export default Nav;