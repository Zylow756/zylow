import React from "react";
import styles from "../assets/css/About.module.css";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
  <>
    <div className={styles.aboutContainer}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Zylow — A Digital Journey from Local to Global</h1>
        <p>Empowering Local, Connecting Global</p>
      </section>

      {/* EVOLUTION */}
      <section className={styles.section}>
        <h2>The Evolution of a Vision</h2>
        <p>
          In today’s rapidly changing era, this is truly the age of startups.
          The world of E-Commerce and Online Marketing is constantly evolving 
          with new innovations.
        </p>
        <p>
          One such innovation began in 2013 with <strong>“Look8Us”</strong>, 
          marking the start of a remarkable journey. In 2025, that vision took 
          its full and evolved form as <strong>Zylow</strong>.
        </p>
        <p>
          Unlike ordinary e-commerce platforms, Zylow represents a revolutionary 
          approach. We empower local entrepreneurs, strengthen the Indian economy, 
          and bridge the gap between traditional business and modern technology.
        </p>
      </section>

      {/* CURRENT REALITY */}
      <section className={styles.section}>
        <h2>The Current Reality</h2>
        <p>
          Most online platforms prioritize global corporations, while local 
          businesses struggle due to lack of digital presence.
        </p>
        <p>
          Many shopkeepers and small business owners find it difficult to survive 
          as customers increasingly look beyond their own cities, ignoring local markets.
        </p>
      </section>

      {/* SOLUTION */}
      <section className={styles.section}>
        <h2>The Solution — Zylow</h2>
        <p>
          Zylow is a multi-purpose ecosystem designed to help customers find what 
          they need within their own local area—often at better prices than large platforms.
        </p>
        <p>
          We don’t just list businesses—we empower them to own their digital future.
        </p>
      </section>

      {/* WEBSITE DEV */}
      <section className={styles.highlight}>
        <h2>Professional Website Development</h2>
        <p>
          Every business deserves a powerful digital presence. Zylow provides expert 
          website development services to help local traders, professionals, and startups 
          go online.
        </p>
        <p>
          We create high-performance, customized websites that make your business visible 
          not just locally—but globally.
        </p>
      </section>

      {/* FEATURES */}
      <section className={styles.section}>
        <h2>Features & Services</h2>
        <ul className={styles.list}>
          <li>Custom Website Development</li>
          <li>Deals and Discounts</li>
          <li>B2B Module</li>
          <li>Job Upload & Search</li>
          <li>Rental & Second-Hand Marketplace</li>
          <li>Homemade Items Platform</li>
          <li>Digital Marketing Place</li>
        </ul>
      </section>

      {/* SOCIAL */}
      <section className={styles.section}>
        <h2>Beyond Commerce: A Social Mission</h2>
        <ul className={styles.list}>
          <li>Social Welfare Initiatives</li>
          <li>Emergency Support (Blood/Plasma Assistance)</li>
        </ul>
      </section>

      {/* MISSION */}
      <section className={styles.section}>
        <h2>Empowering India, Empowering People</h2>
        <p>
          Zylow’s mission is national progress. From students to homemakers, 
          we enable individuals to become self-reliant and digitally empowered.
        </p>
        <p>
          Every business can build its identity, and every local market can grow 
          from <strong>Local to Global</strong>.
        </p>
      </section>

      {/* FOOTER LINE */}
      <section className={styles.footerNote}>
        <h3>Thank You</h3>
        <p>Zylow — Empowering Local, Connecting Global.</p>
      </section>
    </div>
    </>
  );
};

export default About;