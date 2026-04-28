import React from "react";
import styles from '../assets/css/Home.module.css';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Rectangle8 from '../assets/images/Rectangle 8.png';
import ExperienceSlider from '../components/Slider/Slider';
import ShowCase from '../components/ShowCase/ShowCase';

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
        <div className={styles.heroImage}>
          <img
            src={Rectangle8}
            alt="web development"
          />
        </div>

        <div className={styles.heroContent}>
          <h2>
            We Build Your Website
            <br />
            With Zylow Web
          </h2>

          <p>
            "We craft aesthetic, high-performance websites designed with your
            users in mind to scale your business"
          </p>

         {/* <button>Start Now</button>*/}
          <button onClick={handleRedirect}>Visit Us</button>
        </div>
      </section>

      <ShowCase />
      
      <ExperienceSlider />
      <Footer />
    </div>
  );
};

export default Home;