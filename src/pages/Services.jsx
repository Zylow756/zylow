import React from "react";
import styles from "../assets/css/Services.module.css";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
// eslint-disable-next-line
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className={styles.rootImage}>
      {/* Header */}
      <Nav />
      <div className={styles.container}>

        {/* HERO */}
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Smart Digital Services for Your Growth 🚀</h1>
          <p>Zylow helps you build websites, apps & digital solutions</p>
        </motion.div>

        {/* SERVICES */}
        <div className={styles.services}>

          {[
            { title: "Website Development", desc: "Modern & responsive websites" },
            { title: "App Development",  desc: "Powerful mobile/web apps" },
            { title: "UI/UX Design",  desc: "Attractive & user-friendly design" },
            { title: "Paid Advertisment", desc: "Google,Facebook,\nInstagram,Instant Leads"},
            { title: "Bulk WhatsApp Marketing", desc: ""},
            { title: "Content Marketing", desc: ""},
            { title: "SEO Optimization", desc: ""},
            { title: "Social Media Marketing", desc: ""},

          ].map((item, i) => (

            <motion.div
              key={i}
              className={styles.card}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </motion.div>

          ))}

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;