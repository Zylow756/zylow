import React from "react";
import styles from '../assets/css/Home.module.css';
import Nav from '../components/Nav/Nav';
import Rectangle8 from '../assets/images/Rectangle 8.png';
import Rectangle10 from '../assets/images/Rectangle 10.png';
import Rectangle12 from '../assets/images/Rectangle 12.png';
import Rectangle11 from '../assets/images/Rectangle 11.png';
import Rectangle13 from '../assets/images/Rectangle 13.png';

const services = [
  {
    title: "Cafe, Parlour, Restaurant and Hotel Website",
    img: Rectangle10,
  },
  {
    title: "Online Product Demonstration Websites for Retailers",
    img: Rectangle11,
  },
  {
    title: "School, Coaching & Library Customized Website",
    img: Rectangle13,
  },
  {
    title: "Tour & Travelling, Train Bus Booking Website",
    img: Rectangle12,
  },
];

const Home = () => {

const handleRedirect = () => {
  const destination = encodeURIComponent(
    "267, Ganesh Nagar, Near Khade Ganesh Ji Temple, Kota Rajasthan 324010"
  );

  const url = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${destination}&travelmode=driving`;

  window.open(url, "_blank");
};

  return (
    <div className={styles.homepage}>
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

      {/* Expertise */}
      <section className={styles.expertise}>
        <h3>-- Our Expertise --</h3>

        <div className={styles.serviceGrid}>
          {services.map((item, index) => (
            <div className={styles.serviceCard} key={index}>
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;