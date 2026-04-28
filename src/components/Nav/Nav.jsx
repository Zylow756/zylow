import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import logoImage from '../../assets/images/logo.png'

const Nav = () => {
  return (
  <header className={styles.heroHeader}>
    <div className={styles.logo}>
      <img src={logoImage}></img>
          <h1>Zylow - Web</h1>
  </div>
          <nav className={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">Show Case</Link>
            <Link to="/about">Career</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">Enquiry</Link>
          </nav>
        </header>
  );
};

export default Nav;