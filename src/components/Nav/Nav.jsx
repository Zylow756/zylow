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


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showPlans, setShowPlans] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleNavClick = () => {
    setShowPlans(false);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <img src={logoImage} alt="logo" />
        <div className={styles.titleWrapper}>
          <div className={styles.brand}>
            <h1 className={styles.brandName}>ZYLOW</h1>
            <span className={styles.brandTag}>WEB SOLUTIONS</span>
          </div>
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
        {!isMobile ? (
          <div
            className={styles.dropdown}
            onMouseEnter={() => setShowPlans(true)}
            onMouseLeave={() => setShowPlans(false)}
          >
            <button className={styles.dropdownBtn}>
              Plans
              {showPlans ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {showPlans && (
              <Motion.div
                className={styles.megaMenu}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {plans.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={styles.serviceCard}
                    onClick={handleNavClick}
                  >
                    <div className={styles.icon}>{item.icon}</div>

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
        ) : (
          <div className={styles.mobilePlansWrapper}>
            <button
              className={styles.mobilePlansBtn}
              onClick={() => setShowPlans(!showPlans)}
            >
              <span>Plans</span>

              {showPlans ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <Motion.div
              className={styles.mobilePlans}
              initial={false}
              animate={{
                height: showPlans ? "auto" : 0,
                opacity: showPlans ? 1 : 0,
              }}
            >
              {plans.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={styles.mobilePlanItem}
                  onClick={handleNavClick}
                >
                  {item.title}
                </Link>
              ))}
            </Motion.div>
          </div>
        )}
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