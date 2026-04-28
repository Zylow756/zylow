import styles from './Footer.module.css';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={styles.footer}>
                <p className={styles.footerBottom}>
                    © 2025 Zylow. All rights reserved.
                </p>
                <div className={styles.footerLinks}>
                    <p>Quick Links</p>
                    <div className={styles.footerSocialMedia}>
                        <a href="https://www.facebook.com/profile.php?id=61586426829152" className={styles.socialIcons}><FaFacebookF /></a>
                        <a href="https://www.linkedin.com/in/zylow-community-2022203a6" className={styles.socialIcons}><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/zylow.in/" className={styles.socialIcons}><FaInstagram /></a>
                        <a href="https://www.youtube.com/@zylow-t1t" className={styles.socialIcons}><FaYoutube /></a>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;