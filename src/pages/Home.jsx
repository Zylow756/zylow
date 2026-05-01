import React from "react";
import styles from '../assets/css/Home.module.css';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Rectangle8 from '../assets/images/Rectangle 8.png';
import ExperienceSlider from '../components/Slider/Slider';
import ShowCase from '../components/ShowCase/ShowCase';
import { motion as Motion } from "framer-motion";


const Home = () => {

const handleRedirect = () => {
  const destination = encodeURIComponent(
    "267, Ganesh Nagar, Near Khade Ganesh Ji Temple, Kota Rajasthan 324010"
  );

  const url = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${destination}&travelmode=driving`;

  window.open(url, "_blank");
};

  return (
    <div className={styles.rootImage}>
      {/* Header */}
      <Nav />
      {/* Hero Section */}
      <section className={styles.heroSection}>

  {/* Image Animation */}
  <Motion.div
    className={styles.heroImage}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <img src={Rectangle8} alt="web development" />
  </Motion.div>

  {/* Text Animation */}
  <Motion.div
    className={styles.heroContent}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    <Motion.h2
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      We Build Your Website
      <br />
      With Zylow Web
    </Motion.h2>

    <Motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      "We craft aesthetic, high-performance websites designed with your
      users in mind to scale your business"
    </Motion.p>

    <Motion.button
      onClick={handleRedirect}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      Visit Us
    </Motion.button>

  </Motion.div>
</section>
      <ShowCase />
      <ExperienceSlider />
      <Footer />
    </div>
  );
};

export default Home;