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
          <h1>Smart Digital Services for Your Growth</h1>
          <p>Zylow helps you build websites, apps & digital solutions</p>
        </Motion.div>

        {/* SERVICES */}
        <div className={styles.services}>
          {[
            {
              title: <>Website Development</>,
              desc: "Modern & responsive websites",
              path: "/websiteDevelopment",
            },
            {
              title: <>App Development</>,
              desc: "Powerful mobile/web apps",
              path: "/appDevelopment",
            },
            {
              title: <>UI/UX Design</>,
              desc: "Attractive & user-friendly design",
              path: "/uiDesign",
            },
            {
              title: <>Paid Advertisment</>,
              desc: "Social Media Leads",
               path: "/paidAdvertisement",
            },
            {
              title: <>Bulk WhatsApp <br /> Marketing</>,
              desc: "",
               path: "/bulkWhatsappMarketing",
            },
            {
              title: <>Content <br /> Marketing</>,
              desc: "",
               path: "/contentMarketing",
            },
            {
              title: <>SEO <br /> Optimization</>,
              desc: "",
               path: "/seoOptimization",
            },

          ].map((item, i) => (
            <Motion.div
              key={i}
              className={styles.card}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >

              <h2>{item.title}</h2>
              <p>{item.desc}</p>

              <button
                className={styles.viewBtn}
                onClick={() =>
                  navigate(item.path)
                }
              >
                Get Details
              </button>
            </Motion.div>

          ))}

        </div>
      </div>
    </>
  );
};

export default Services;