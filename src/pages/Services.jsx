import React from "react";
import styles from "../assets/css/Services.module.css";
import Nav from '../components/Nav/Nav';
// eslint-disable-next-line
import { motion } from "framer-motion";

const Services = () => {
  return (
        <div className={styles.mainRoot}>
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
          { title: "Website Development", icon: "🌐", desc: "Modern & responsive websites" },
          { title: "App Development", icon: "📱", desc: "Powerful mobile/web apps" },
          { title: "UI/UX Design", icon: "🎨", desc: "Attractive & user-friendly design" },
          
        ].map((item, i) => (
          
          <motion.div 
            key={i}
            className={styles.card}
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className={styles.icon}>{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>

        ))}

      </div>

      {/* CTA */}
      <motion.div 
        className={styles.cta}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2>Let’s Build Something Amazing 💡</h2>
        <button>Get Started</button>
      </motion.div>
</div>
    </div>
  );
};

export default Services;