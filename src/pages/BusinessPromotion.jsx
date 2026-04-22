import React from "react";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import styles from '../assets/css/BusinessPromotion.module.css';
import { FaBullhorn, FaChartLine, FaUsers, FaCheckCircle } from "react-icons/fa";

const BusinessPromotion = () => {
  return (
        <div className={styles.mainRoot}>
            <Nav />
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Grow Your Business Faster</h1>
        <p>
          We help you reach more customers, increase visibility, and boost sales with smart promotion strategies.
        </p>
        <button>Start Promotion</button>
      </section>

      {/* SERVICES */}
      <section className={styles.services}>
        <h2>Our Promotion Services</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <FaBullhorn />
            <h3>Digital Marketing</h3>
            <p>Targeted campaigns to reach the right audience.</p>
          </div>

          <div className={styles.card}>
            <FaChartLine />
            <h3>SEO Optimization</h3>
            <p>Rank higher on search engines and get organic traffic.</p>
          </div>

          <div className={styles.card}>
            <FaUsers />
            <h3>Social Media Ads</h3>
            <p>Boost engagement and grow your online presence.</p>
          </div>
        </div>
      </section>

      {/* RESULTS / STATS */}
      <section className={styles.stats}>
        <div>
          <h2>150+</h2>
          <p>Projects Completed</p>
        </div>

        <div>
          <h2>200%</h2>
          <p>Average Growth</p>
        </div>

        <div>
          <h2>100+</h2>
          <p>Happy Clients</p>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default BusinessPromotion;