import React from "react";
import styles from "../assets/css/Contact.module.css";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        {/* MAIN SECTION */}
        <div className={styles.contactWrapper}>

          {/* Get Directions Button */}
          <div className={styles.directionBtn}>
            <FaMapMarkerAlt />
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
            <div className={styles.card} style={{backgroundColor: "#FFF1F2",color: "#E11D48",border: "3px solid #9F1239"}}>
              <h3>Customer Support</h3>
              <p><FaPhoneAlt /> +91-94688-70744</p>
              <p><FaEnvelope  /> zylowwebsolution@gmail.com</p>
              <p><FaEnvelope  /> enquiryzylowweb@gmail.com</p>
              <p>Mon–Sat: 10 AM – 7 PM</p>
            </div>

            <div className={styles.card} style={{backgroundColor: "#EFF6FF",color: "#2563EB",border: "3px solid #1E3A8A"}}>
              <h3>Business & Seller Support</h3>
              <p><FaPhoneAlt /> +91-94688-70744</p>
              <p><FaEnvelope  /> zylowwebsolution@gmail.com</p>
              <p><FaEnvelope  /> enquiryzylowweb@gmail.com</p>
              <p><FaWhatsapp /> +91-94688-70744</p>
            </div>

            <div className={styles.card} style={{backgroundColor: "#F0FDF4",color: "#16A34A",border: "3px solid #14532D"}}>
              <h3>Careers</h3>
              <p><FaEnvelope  /> zylowwebsolution@gmail.com</p>
              <p><FaEnvelope  /> enquiryzylowweb@gmail.com</p>
              <p>Join the Zylow team and grow with us</p>
            </div>

            <div className={styles.card} style={{backgroundColor: "#FDF4FF",color: "#C026D3",border: "3px solid #86198F"}}>
              <h3>Office Address</h3>
              <p>Zylow</p>
              <p>267, Ganesh nagar, Near Khade Ganesh Ji Temple, Kota-324010, Rajasthan</p>
              <p>India</p>
            </div>

          </div>

        </div>

      </div>
      </>
  );
};

export default Contact;