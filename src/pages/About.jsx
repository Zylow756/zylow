import styles from "../assets/css/About.module.css";
import Enquiry from './Enquiry';
import React, { useState } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaBullhorn,
  FaSearch,
  FaWhatsapp,
  FaPenNib,
  FaChartLine,
  FaRocket,
  FaHandshake
} from "react-icons/fa";

const About = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className={styles.aboutPage}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>We Build The Digital Engines</h1>
            <h2> That Power Modern Business Growth</h2>
          <p>
            At Zylow Web Solutions, we don't just write code or design screens—we engineer
            digital experiences that turn clicks into customers and ideas into
            scalable realities.
          <br/>
            Whether you're a startup launching your first product or an
            established business ready to dominate your market, we integrate
            strategy, design, and aggressive marketing to make it happen.
          </p>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className={styles.intro}>
          <h2>Who We Are</h2>
          <p>
            We bridge the gap between complex technology and high-impact
            marketing. Our mission is simple: help businesses grow faster,
            convert better, and scale smarter through technology-driven
            solutions.
          </p>
      </section>

      {/* SERVICES */}
      <section className={styles.services}>
        <div className={styles.container}>
          <h2>What We Do</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard} style={{backgroundColor: "#EEF2FF",color: "#4F46E5",border: "3px solid #312E81"}}>
              <FaLaptopCode style={{color: "#312E81"}} />
              <h3>Digital Engineering</h3>
              <ul>
                <li>Custom Website Development</li>
                <li>Responsive Business Websites</li>
                <li>Custom App Development</li>
              </ul>
            </div>

            <div className={styles.serviceCard} style={{backgroundColor: "#ECFEFF",color: "#0891B2",border: "3px solid #155E75"}}>
              <FaPalette style={{color: "#155E75"}} />
              <h3>Design & Experience</h3>
              <ul>
                <li>UI Design</li>
                <li>UX Research</li>
                <li>Brand Experience Design</li>
              </ul>
            </div>

            <div className={styles.serviceCard} style={{backgroundColor: "#FDF4FF",color: "#C026D3",border: "3px solid #86198F"}}>
              <FaChartLine style={{color: "#86198F"}} />
              <h3>Growth & Visibility</h3>
              <ul className={styles.serviceList}>
                <li>Paid Advertisement</li>
                <li> SEO Optimization</li>
                <li>WhatsApp Marketing</li>
                <li>Content Marketing</li>
                <li>Lead Generation Campaigns</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={styles.whyUs}>
        <div className={styles.container}>
          <h2>Why Partner With Us?</h2>

          <div className={styles.whyGrid}>
            <div className={styles.whyCard} style={{ backgroundColor: "#F0FDF4",color: "#16A34A",border: "3px solid #14532D" }}>
              <FaRocket style={{color: "#14532D"}}  />
              <h3>Full-Funnel Advantage</h3>
              <p style={{color: "#14532D"}} >
                We handle the complete ecosystem—from development and design
                to SEO, paid advertising, and customer acquisition.
              </p>
            </div>

            <div className={styles.whyCard} style={{ backgroundColor: "#EFF6FF",color: "#2563EB",border: "3px solid #1E3A8A" }}>
              <FaChartLine style={{color: "#1E3A8A"}}  />
              <h3>Data Over Guesswork</h3>
              <p style={{color: "#1E3A8A"}} >
                Every decision is backed by analytics, measurable KPIs,
                and user behavior insights.
              </p>
            </div>

            <div className={styles.whyCard} style={{ backgroundColor: "#FFF1F2",color: "#E11D48",border: "3px solid #9F1239" }}>
              <FaHandshake  style={{color: "#9F1239"}} />
              <h3>True Customization</h3>
              <p style={{color: "#9F1239"}} >
                No rigid templates. Every solution is designed specifically
                around your business goals and growth strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2>Our Values</h2>

          <div className={styles.valueGrid}>
            <div className={styles.valueCard} style={{ backgroundColor: "#FEF2F2",color: "#DC2626",border: "3px solid #991B1B" }}>
              <h3>Radical Transparency</h3>
              <p style={{color: "#991B1B"}} >
                Clear communication, transparent reporting, and real business
                metrics—not vanity numbers.
              </p>
            </div>

            <div className={styles.valueCard} style={{ backgroundColor: "#ECFEFF",color: "#0891B2",border: "3px solid #155E75" }}>
              <h3>Velocity & Quality</h3>
              <p style={{color: "#155E75"}} >
                Fast execution without compromising scalability,
                performance, or maintainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Let's Build Something Remarkable</h2>

        <p>
          Ready to take your digital presence to the next level?
          Let's discuss your project goals and create a strategy
          that drives measurable growth.
        </p>

        <button className={styles.ctaBtn} onClick={() => setShowEnquiry(true)}>
         Get in Touch
        </button>
      </section>
      {showEnquiry && <Enquiry onClose={() => setShowEnquiry(false)} />}

    </div>
  );
};

export default About;