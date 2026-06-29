import React from "react";
import styles from "../../assets/css/UIUXDesign.module.css";
import { motion as Motion } from "framer-motion";

const services = [
  {
    title: "User Research & Strategy",
    description:
      "Analyzing target audiences to understand their pain points, behavior, and business goals.",
  },
  {
    title: "Wireframing & Prototyping",
    description:
      "Creating structured blueprints and interactive prototypes before development begins.",
  },
  {
    title: "Visual Design (UI)",
    description:
      "Crafting visually stunning interfaces with modern typography, colors, and branding.",
  },
  {
    title: "Interaction Design",
    description:
      "Designing engaging interactions, smooth animations, and intuitive navigation systems.",
  },
  {
    title: "Usability Testing",
    description:
      "Testing with real users to identify friction points and improve user satisfaction.",
  },
  {
    title: "Responsive Design",
    description:
      "Ensuring seamless experiences across desktop, tablet, and mobile devices.",
  },
];

const plans = [
  {
    name: "Essential UI",
    audience: "Startups / Small Shops",
    features: [
      "Landing Page Design",
      "Basic Mobile Responsiveness",
      "Standard Branding",
    ],
  },
  {
    name: "Pro Experience",
    audience: "Growing Businesses",
    features: [
      "Full Website Design",
      "Interactive Wireframes",
      "Custom Icons & UI Kit",
    ],
  },
  {
    name: "Enterprise UX",
    audience: "E-commerce / Complex Apps",
    features: [
      "User Research",
      "High-Fidelity Prototypes",
      "Usability Testing",
      "Ongoing Design Support",
    ],
  },
];

const UiDesign = () => {
  return (
    <>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <Motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={styles.heroContent}
          >
            <h1>UI/UX Design: Elevating Digital Experiences</h1>

            <p>
              UI (User Interface) and UX (User Experience) are the foundation of
              every successful digital product. Zylow creates visually stunning
              and highly functional experiences that convert visitors into loyal
              customers.
            </p>
          </Motion.div>
        </section>

        {/* Services Section */}
        <section className={styles.services}>
          <h2>Key Services & Features</h2>

          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <Motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Motion.div>
            ))}
          </div>
        </section>

        {/* Marketing Section */}
        <section className={styles.marketing}>
          <h2>Why Choose Zylow?</h2>

          <div className={styles.taglineContainer}>
            <div className={styles.tagline}>
              "Design That Speaks, Experience That Works."
            </div>

            <div className={styles.tagline}>
              "Your Business Deserves More Than Just a Website."
            </div>

            <div className={styles.tagline}>
              "From Concept to Conversion: UI/UX Solutions Tailored for Local
              Businesses."
            </div>

            <div className={styles.tagline}>
              "Smarter Designs for Faster Growth."
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className={styles.plans}>
          <h2>Service Plans</h2>

          <div className={styles.planGrid}>
            {plans.map((plan, index) => (
              <Motion.div
                key={index}
                className={styles.planCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>{plan.name}</h3>

                <span>{plan.audience}</span>

                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>

                {/*<button>Get Quote</button>*/}
              </Motion.div>
            ))}
          </div>
        </section>
      </div>

    </>
  )
}
export default UiDesign;