import React from "react";
import styles from "../assets/css/Services.module.css";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Website Development",
      desc: "Modern & responsive websites",
      path: "/websiteDevelopment",
      bg: "#FEF2F2",
      headingColor: "#DC2626",
      subHeadingColor: "#991B1B",
    },
    {
      title: "App Development",
      desc: "Powerful mobile/web apps",
      path: "/appDevelopment",
      bg: "#EEF2FF",
      headingColor: "#4F46E5",
      subHeadingColor: "#312E81",
    },
    {
      title: "UI/UX Design",
      desc: "Attractive & user-friendly design",
      path: "/uiDesign",
      bg: "#ECFEFF",
      headingColor: "#0891B2",
      subHeadingColor: "#155E75",
    },
    {
      title: "Paid Advertisment",
      desc: "Social Media Leads",
      path: "/paidAdvertisement",
      bg: "#FDF4FF",
      headingColor: "#C026D3",
      subHeadingColor: "#86198F",
    },
    {
      title: "Bulk WhatsApp Marketing",
      desc: "",
      path: "/bulkWhatsappMarketing",
      bg: "#F0FDF4",
      headingColor: "#16A34A",
      subHeadingColor: "#14532D",
    },
    {
      title: "Content Marketing",
      desc: "",
      path: "/contentMarketing",
      bg: "#EFF6FF",
      headingColor: "#2563EB",
      subHeadingColor: "#1E3A8A",
    },
    {
      title: "SEO Optimization",
      desc: "",
      path: "/seoOptimization",
      bg: "#FFF1F2",
      headingColor: "#E11D48",
      subHeadingColor: "#9F1239",
    },
  ];

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
          {services.map((item, i) => (
            <Motion.div
              key={i}
              className={styles.card}
              style={{ backgroundColor: item.bg, border: `2px solid ${item.subHeadingColor}`, }}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >

              <h2 style={{ color: item.headingColor, }}>{item.title}</h2>
              <p style={{ color: item.subHeadingColor, }}>{item.desc}</p>

              <button
                className={styles.viewBtn}
                style={{ backgroundColor: item.subHeadingColor, border: `2px solid ${item.subHeadingColor}`, }}
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