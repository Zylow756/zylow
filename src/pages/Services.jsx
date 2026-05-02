import React from "react";
import styles from "../assets/css/Services.module.css";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();


  return (
    <>
      <div className={styles.container}>

        {/* HERO */}
        <Motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Smart Digital Services for Your Growth 🚀</h1>
          <p>Zylow helps you build websites, apps & digital solutions</p>
        </Motion.div>

        {/* SERVICES */}
        <div className={styles.services}>

          {[
            { title: "Website Development", desc: "Modern & responsive websites" },
            { title: "App Development", desc: "Powerful mobile/web apps" },
            { title: "UI/UX Design", desc: "Attractive & user-friendly design" },
            { title: "Paid Advertisment", desc: "Google,Facebook,\nInstagram,Instant Leads" },
            { title: "Bulk WhatsApp Marketing", desc: "" },
            { title: "Content Marketing", desc: "" },
            { title: "SEO Optimization", desc: "" },
            { title: "Social Media Marketing", desc: "" },

          ].map((item, i) => (
            navigate("/pricing", { state: { service: item.title } }),
            <Motion.div
              key={i}
              className={styles.card}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >

              <h2>{item.title}</h2>
              <p>{item.desc}</p>

               <button
                className={styles.viewBtn}
                onClick={() =>
                  navigate("/pricing", {
                    state: { service: item.title },
                  })
                }
              >
                View Plans
              </button>
            </Motion.div>

          ))}

        </div>
      </div>
      </>
  );
};

export default Services;