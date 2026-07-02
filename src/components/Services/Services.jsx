import React, { useState } from "react";
import styles from "./Services.module.css";
import webImg from "../../assets/images/service-website.webp";
import appImg from "../../assets/images/service-app.webp";
import uiImg from "../../assets/images/service-ui.webp";
import seoImg from "../../assets/images/service-seo.webp";
import adsImg from "../../assets/images/service-paid.webp";
import contentImg from "../../assets/images/service-content.webp";
import whatsappImg from "../../assets/images/service-whatsapp.webp";

const Services = () => {
      const [active, setActive] = useState(0);

      const services = [
            {
                  title: "Website Development",
                  image: webImg,
                  description:
                        "Custom websites designed to convert visitors into customers and accelerate business growth.",
                  path: "/websiteDevelopment",
            },
            {
                  title: "App Development",
                  image: appImg,
                  description:
                        "Scalable Android, iOS and web applications engineered for performance.",
                  path: "/appDevelopment",
            },
            {
                  title: "UI / UX Design",
                  image: uiImg,
                  description:
                        "Beautiful interfaces and user experiences that improve engagement and customer satisfaction.",
                  path: "/uiDesign",
            },
            {
                  title: "SEO Optimization",
                  image: seoImg,
                  description:
                        "Rank higher on Google, increase visibility, and generate consistent organic traffic.",
                  path: "/seoOptimization",
            },
            {
                  title: "Paid Advertisement",
                  image: adsImg,
                  description:
                        "Generate high-quality leads and maximize ROI through strategic Google and Meta advertising campaigns.",
                  path: "/paidAdvertisement",
            },
            {
                  title: "Content Marketing",
                  image: contentImg,
                  description:
                        "Create valuable, engaging content that builds trust, strengthens your brand, and drives customer conversions.",
                  path: "/contentMarketing",
            },
            {
                  title: "Bulk WhatsApp Marketing",
                  image: whatsappImg,
                  description:
                        "Reach thousands of customers instantly with personalized WhatsApp campaigns, promotions, and automated messaging.",
                  path: "/bulkWhatsappMarketing",
            },
      ];

      return (
            <section className={styles.servicesSection}>
              <h2>OUR SERVICES</h2>
                  <div className={styles.container}>
                        <div className={styles.leftSide}>
                              <div className={styles.imageWrapper}>
                                    <img
                                          src={services[active].image}
                                          alt={services[active].title}
                                    />
                              </div>

                              <div className={styles.content}>
                                    <h3>{services[active].title}</h3>
                                    <p>{services[active].description}</p>
                                    <a
                                          href={services[active].path}
                                          className={styles.learnBtn}
                                    >
                                          Learn More
                                    </a>
                              </div>
                        </div>

                        <div className={styles.rightSide}>
                              {services.map((service, index) => (
                                    <div
                                          key={index}
                                          className={`${styles.serviceItem} ${active === index ? styles.active : ""
                                                }`}
                                          onClick={() => setActive(index)}
                                    >
                                          {service.title}
                                    </div>
                              ))}
                        </div>

                  </div>
            </section>
      );
};

export default Services;