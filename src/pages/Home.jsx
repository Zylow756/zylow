import React from "react";
import styles from "../assets/css/Home.module.css";
// eslint-disable-next-line
import { motion } from "framer-motion";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
        <div className={styles.mainRoot}>
            <Nav />
    <div className={styles.container}>

      {/* HERO */}
      <motion.section 
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>Build Your Digital Future with Zylow</h1>
        <p>Multi-utility platform for websites, apps & business solutions</p>
        <button>Get Started</button>
      </motion.section>

      {/* SERVICES */}
      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.grid}>
          <div className={styles.card}>🌐 Website Development</div>
          <div className={styles.card}>📱 App Development</div>
          <div className={styles.card}>🎨 UI/UX Design</div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.features}>
        <h2>Why Zylow?</h2>
        <ul>
        </ul>
      </section>

      {/* PRICING */}
      <section className={styles.pricing}>
        <h2>Pricing Plans</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Basic</h3>
            <p>₹10000</p>
            <p>Simple Website</p>
          </div>
          <div className={styles.card}>
            <h3>Standard</h3>
            <p>₹15000</p>
            <p>Business Website</p>
          </div>
          <div className={styles.card}>
            <h3>Premium</h3>
            <p>₹23000</p>
            <p>Full App + Website</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <h2>What Clients Say</h2>
        <div className={styles.grid}>
          <div className={styles.card}>⭐ Amazing service!</div>
          <div className={styles.card}>⭐ Very professional</div>
          <div className={styles.card}>⭐ Highly recommended</div>
        </div>
      </section>

      
    </div>
    <Footer />
    </div>
  );
};

export default Home;