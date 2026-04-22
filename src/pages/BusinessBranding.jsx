import styles from '../assets/css/BusinessBranding.module.css';
import { FaCheckCircle } from "react-icons/fa";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const BusinessBranding = () => {
  return (
        <div className={styles.mainRoot}>
            <Nav />
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Build a Brand That <span>Stands Out</span>
          </h1>
          <p>
            We craft powerful brand identities that connect with your audience and drive growth.
          </p>

          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>Get Started</button>
            <button className={styles.secondaryBtn}>View Work</button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.services}>
        <h2>Our Branding Services</h2>
        <p>Everything you need to build a strong brand</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Logo & Identity</h3>
            <p>Unique logos and complete visual identity systems.</p>
          </div>

          <div className={styles.card}>
            <h3>Brand Strategy</h3>
            <p>Positioning, messaging, and long-term brand vision.</p>
          </div>

          <div className={styles.card}>
            <h3>Social Media Branding</h3>
            <p>Consistent visuals across all platforms.</p>
          </div>

          <div className={styles.card}>
            <h3>Marketing Design</h3>
            <p>Brochures, ads, and promotional creatives.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process}>
        <h2>Our Process</h2>

        <div className={styles.steps}>
          <div>
            <span>01</span>
            <h3>Research</h3>
            <p>Understanding your business & audience.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Strategy</h3>
            <p>Crafting a unique brand direction.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Design</h3>
            <p>Creating stunning visual identity.</p>
          </div>

          <div>
            <span>04</span>
            <h3>Launch</h3>
            <p>Delivering and scaling your brand.</p>
          </div>
        </div>
      </section>
</div>
<Footer />
    </div>
  );
};

export default BusinessBranding;