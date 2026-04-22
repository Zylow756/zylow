import styles from './Footer.module.css';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube
} from "react-icons/fa";

const Footer = () => {
    return (

        <footer className={styles.cta}>
            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.603161943886!2d75.82995781064194!3d25.115291277670995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f85769b646627%3A0x76a92e4033fd49c7!2sZylow!5e0!3m2!1sen!2sin!4v1776839460677!5m2!1sen!2sin"
                    width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
            <div className={styles.footerRight}>
                <div className={styles.footerContact}>
                    <h3>Let's talk</h3>
                    <p>zylow0744@gmail.com</p>
                    <p>+91 9414729662</p>
                </div>
                <div className={styles.footerLinks}>
                    <p>Quick Links</p>
                    <div className={styles['footer-social-media']}>
                        <a href="https://www.facebook.com/profile.php?id=61586426829152" className={styles['social-icons']}><FaFacebookF /></a>
                        <a href="https://www.linkedin.com/in/zylow-community-2022203a6" className={styles['social-icons']}><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/zylow.in/" className={styles['social-icons']}><FaInstagram /></a>
                        <a href="https://www.youtube.com/@zylow-t1t" className={styles['social-icons']}><FaYoutube /></a>
                    </div>
                </div>
                <p className={styles.footerBottom}>
                    © 2025 Zylow. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;