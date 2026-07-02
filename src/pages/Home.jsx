import React, { useState } from "react";
import styles from '../assets/css/Home.module.css';
import Rectangle8 from '../assets/images/Rectangle8.webp';
import ExperienceSlider from '../components/ExperienceSlider/ExperienceSlider';
import Services from '../components/Services/Services';
import ShowCase from '../components/ShowCase/ShowCase';
import FloatingShare from '../components/FloatingShare/FloatingShare';
import { motion as Motion } from "framer-motion";
import Enquiry from './Enquiry';
import { Link } from "react-router-dom";
import {
  FaGlobe, 
  FaLaptop, 
  FaHandsHelping,
  FaChartLine,
  FaRocket,
  FaLayerGroup,
  FaHandshake,
} from "react-icons/fa";


const Home = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const features = [
    {
      icon: <FaChartLine />,
      title: "Build for Business Growth",
      description:
        "We don't just build websites—we engineer digital experiences that generate leads, streamline operations, and maximize your ROI. Every design decision and every line of code is focused on measurable business growth.",
    },
    {
      icon: <FaRocket />,
      title: "Modern Stack. Zero Technical Debt.",
      description:
        "Using cutting-edge technologies like React, Next.js, Flutter, Node.js, and cloud-native architectures, we create lightning-fast, secure, and scalable solutions that are built for the future.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Complete Digital Ecosystem",
      description:
        "From UI/UX design and custom software development to API integrations, cloud deployment, hosting, automation, and marketing systems—we manage your entire digital journey under one roof.",
    },
    {
      icon: <FaHandshake />,
      title: "Transparent Execution",
      description:
        "No hidden costs. No missed deadlines. No confusing technical jargon. You'll receive clear project milestones, regular updates, and a dedicated team committed to delivering exceptional results.",
    },
  ];

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
      <FloatingShare />
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
            We build high-converting websites and custom software for growing businesses.
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            From high-converting e-commerce web portals to seamless Android & iOS mobile applications, we engineer the complete technology ecosystem your business needs to grow.
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

      <section className={styles.aboutSection} id="about">
        <div className={styles.container}>
          <div className={styles.heading}>
            <span>WHY PARTNER WITH US</span>
            <h2>Moving Your Business Forward With Technology That Delivers</h2>
            <p>
              We combine strategy, design, development, and innovation to create
              digital products that drive real business outcomes. Our mission is
              simple: build scalable solutions that help your business grow
              faster, operate smarter, and outperform the competition.
            </p>
          </div>

          <div className={styles.grid}>
            {features.map((item, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.icon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <a href="/about" className={styles.readMoreBtn}>
          Discover Our Story &rarr;
        </a>
      </section>

      <Services />
      <ShowCase showAll={false} />
      <ExperienceSlider />
      {showEnquiry && <Enquiry onClose={() => setShowEnquiry(false)} />}
    </>
  );
};

export default Home;