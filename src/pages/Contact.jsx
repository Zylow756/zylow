import React from "react";
import styles from "../assets/css/Contact.module.css";
// eslint-disable-next-line
import { motion } from "framer-motion";
import Nav from '../components/Nav/Nav';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBuilding } from "react-icons/fa";

const Contact = () => {
  return (
        <div className={styles.mainRoot}>
            <Nav />
    <div className={styles.container}>

      {/* HERO */}
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Contact Us</h1>
        <p>Let’s build something amazing together</p>
      </motion.div>

      {/* MAIN SECTION */}
      <div className={styles.contactWrapper}>

        {/* LEFT INFO */}
                <div className={styles.contact}>
                    <h2>Connect With Us!</h2>

                    <div className={styles.item}>
                        <FaPhoneAlt className={styles.icon} />
                        <div className={styles.text}><strong>Call Us At<br /></strong>
                        <p>+91 9414729662 [Grievance Call-Sanjay Nagar]<br /> +91 9468870744 [Counselor]<br/>+91 9468870744 [WhatsApp]</p></div>
                    </div>

                    <div className={styles.item}>
                        <FaEnvelope className={styles.icon} />
                        <div className={styles.text}><strong>Mail Us At</strong>
                        <p>zylow0744@gmail.com</p></div>
                    </div>

                    <div className={styles.item}>
                        <FaBuilding  className={styles.icon} />
                        <div className={styles.text}>
                            <strong>Address</strong><br/>
                            <p>267, Ganesh Nagar,<br />
                            Near Khade Ganesh Ji Temple,<br />
                            Kota [Rajasthan] - 324010</p>
                        </div>
                    </div>

                    {/* Get Directions Button */}
                    <a
                        href="https://maps.app.goo.gl/GQkTrdUhy3678TUe7"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaMapMarkerAlt className="btn-icon" /> Get Directions
                    </a>
                </div>

        {/* RIGHT FORM */}
        <div
          className={styles.form}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Mobile Number" />
          <textarea placeholder="Your Message..." rows="5"></textarea>

          <button type="submit">Send Message</button>
        </div>

      </div>
</div>
    </div>
  );
};

export default Contact;