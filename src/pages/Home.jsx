import React, { useState } from "react";
import styles from '../assets/css/Home.module.css';
import Rectangle8 from '../assets/images/Rectangle 8.png';
import ExperienceSlider from '../components/Slider/Slider';
import ShowCase from '../components/ShowCase/ShowCase';
import { motion as Motion } from "framer-motion";
import Enquiry from './Enquiry';
import { Link } from "react-router-dom";

const Home = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const handleRedirect = () => {
    const destination = encodeURIComponent(
      "267, Ganesh Nagar, Near Khade Ganesh Ji Temple, Kota Rajasthan 324010"
    );

    const url = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${destination}&travelmode=driving`;

    window.open(url, "_blank");
  };

  return (
    <>
      {/*<section className={styles.videoSection}>
        <video
          className={styles.video}
          src="/videos/intro.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
        />

        <div className={styles.overlay}>
          <h1>Welcome to Zylow Web Solutions</h1>
          <p>Transform your online presence with our cutting-edge web development services.</p>

          <button onClick={() => setShowEnquiry(true)}>Join Now</button>
        </div>
      </section>*/}

      <section className={styles.heroSection}>
        <Motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={Rectangle8} alt="web development" />
        </Motion.div>

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
            We Build Your Website With Zylow Web
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
      <section className={styles.homeAboutSection}>
        <div className={styles.container}>
          {/* Header Block */}
          <div className={styles.header}>
            <span className={styles.subHeading}>Who We Are</span>
            <h2>Zylow — A Digital Journey from Local to Global</h2>
            <p className={styles.tagline}>Empowering Local, Connecting Global</p>
          </div>

          {/* Content Block */}
          <div className={styles.contentGrid}>
            <div className={styles.textSide}>
              <p>
                Born from a vision that started in 2013 with <strong>“Look8Us”</strong> and evolved into
                <strong> Zylow</strong>, we are a revolutionary multi-purpose ecosystem.
                Unlike ordinary e-commerce platforms, we bridge the gap between traditional
                business and modern technology—helping local traders, startups, and professionals
                own their digital future.
              </p>
              <p>
                From professional website development and hyper-local marketplaces to social
                welfare and employment search, Zylow is dedicated to building a self-reliant,
                digitally empowered India.
              </p>

              {/* CTA Button */}
              <a href="/about" className={styles.readMoreBtn}>
                Discover Our Story &rarr;
              </a>
            </div>

            {/* Quick Highlights / Mini Features Grid */}
            <div className={styles.featuresSide}>
              <div className={styles.featureCard}>
                <h4>🌐 Local to Global</h4>
                <p>Giving local businesses a powerful online presence to compete globally.</p>
              </div>
              <div className={styles.featureCard}>
                <h4>💻 Expert Web Dev</h4>
                <p>High-performance, customized websites for traders, professionals, and startups.</p>
              </div>
              <div className={styles.featureCard}>
                <h4>🤝 Social Mission</h4>
                <p>Supporting communities with welfare initiatives and emergency assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.servicesPreview}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Services</h2>
            <p>Digital solutions designed to grow your business</p>
          </div>

          <div className={styles.servicesGrid}>
            {[
              {
                title: "Website Development",
                desc: "Modern & responsive websites",
                path: "/websiteDevelopment",
              },
              {
                title: "App Development",
                desc: "Powerful mobile & web applications",
                path: "/appDevelopment",
              },
              {
                title: "UI/UX Design",
                desc: "Beautiful and user-friendly interfaces",
                path: "/uiDesign",
              },
              {
                title: "SEO Optimization",
                desc: "Improve visibility and rankings",
                path: "/seoOptimization",
              },
            ].map((service, index) => (
              <Motion.div
                key={index}
                className={styles.serviceCard}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <Link to={service.path} className={styles.serviceBtn}>
                  Learn More
                </Link>
              </Motion.div>
            ))}
          </div>

          <div className={styles.viewAllWrapper}>
            <Link to="/services" className={styles.viewAllBtn}>
              View All Services
            </Link>
          </div>
        </div>
      </section>
      <ShowCase />
      <ExperienceSlider />
      {showEnquiry && <Enquiry onClose={() => setShowEnquiry(false)} />}
    </>
  );
};

export default Home;