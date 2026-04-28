import React from "react";
import styles from "../assets/css/Contact.module.css";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const Contact = () => {
  return (
    <div className={styles.rootImage}>
      <Nav />
      <div className={styles.container}>
        {/* MAIN SECTION */}
        <div className={styles.contactWrapper}>

          {/* Get Directions Button */}
          <div className={styles.directionBtn}>
            <a
              href="https://maps.app.goo.gl/GQkTrdUhy3678TUe7"
              target="_blank"
              rel="noopener noreferrer"
            >
               Get Directions
            </a>
          </div>
          {/* LEFT INFO */}
          <div className={styles.contactSection}>
            <div className={styles.card}>
              <h3>Customer Support</h3>
              <p>📞 +91-94688-70744</p>
              <p>✉️ zylow0744@gmail.com</p>
              <p>Mon–Sat: 10 AM – 7 PM</p>
            </div>

            <div className={styles.card}>
              <h3>Business & Seller Support</h3>
              <p>📞 +91-94688-70744</p>
              <p>✉️ zylow0744@gmail.com</p>
              <p>📱 WhatsApp: +91-94688-70744</p>
            </div>

            <div className={styles.card}>
              <h3>Partnership & Collaboration</h3>
              <p>✉️ zylow0744@gmail.com</p>
              <p>For marketing, sponsorships & business tie-ups</p>
            </div>

            <div className={styles.card}>
              <h3>Community & Welfare Assistance</h3>
              <p>📞 +91-94688-70744</p>
              <p>✉️ zylow0744@gmail.com</p>
              <p>Emergency help (blood/plasma assistance)</p>
            </div>

            <div className={styles.card}>
              <h3>Careers</h3>
              <p>✉️ zylow0744@gmail.com</p>
              <p>Join the Zylow team and grow with us</p>
            </div>

            <div className={styles.card}>
              <h3>Office Address</h3>
              <p>Zylow</p>
              <p>267, Ganesh nagar, Near Khade Ganesh Ji Temple, Kota-324010, Rajasthan</p>
              <p>India</p>
            </div>

          </div>

        </div>

        {/* RIGHT FORM */}
        <form
          className={styles.form}>
          <h2>Send Us a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Mobile Number" />
          <textarea placeholder="Your Message..." rows="5"></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
      <Footer />
    </div>
  );
};

export default Contact;