import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import logoImage from '../../assets/images/logo.png';
import React, { useState, useEffect } from "react";
import Enquiry from '../../pages/Enquiry';
import { motion as Motion } from "framer-motion";
import {
  FaGlobe,
  FaMobileAlt,
  FaPaintBrush,
  FaSearch,
  FaBullhorn,
  FaWhatsapp,
  FaPenNib,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
const text = "Zylow-Web-Solution";


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showPlans, setShowPlans] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const plans = [
    {
      title: "Website Development",
      desc: "Modern responsive websites",
      icon: <FaGlobe />,
      path: "/websiteDevelopment",
    },
    {
      title: "App Development",
      desc: "Android & iOS Applications",
      icon: <FaMobileAlt />,
      path: "/appDevelopment",
    },
    {
      title: "UI / UX Design",
      desc: "Beautiful user experiences",
      icon: <FaPaintBrush />,
      path: "/uiDesign",
    },
    {
      title: "SEO Optimization",
      desc: "Rank higher on Google",
      icon: <FaSearch />,
      path: "/seoOptimization",
    },
    {
      title: "Paid Advertisement",
      desc: "Google & Meta Ads",
      icon: <FaBullhorn />,
      path: "/paidAdvertisement",
    },
    {
      title: "Content Marketing",
      desc: "Grow with engaging content",
      icon: <FaPenNib />,
      path: "/contentMarketing",
    },
    {
      title: "Bulk WhatsApp Marketing",
      desc: "Reach thousands instantly",
      icon: <FaWhatsapp />,
      path: "/bulkWhatsappMarketing",
    },
  ];

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
                animate={{ y: [0, -6, 0], }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.1
                }}
                className={styles.letter}
              >
                {char === " " ? "\u00A0" : char}
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
        <div
          className={styles.dropdown}
          onMouseEnter={() => !menuOpen && setShowPlans(true)}
          onMouseLeave={() => !menuOpen && setShowPlans(false)}
        >
          <button
            className={styles.dropdownBtn}
            onClick={() => {
              if (menuOpen) {
                setShowPlans(prev => !prev);
              }
            }}
          >
            Plans
            {showPlans ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {showPlans && (
            <Motion.div
              className={styles.megaMenu}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {plans.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={styles.serviceCard}
                  onClick={handleNavClick}
                >
                  <div className={styles.icon}>
                    {item.icon}
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>

                  <span className={styles.arrow}>→</span>
                </Link>
              ))}
            </Motion.div>
          )}
        </div>
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