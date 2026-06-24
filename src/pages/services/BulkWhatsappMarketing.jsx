import React from "react";
import styles from "../../assets/css/BulkWhatsappMarketing.module.css";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaChartLine,
  FaRobot,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const plans = [
  {
    title: "Starter",
    price: "₹1,499/month",
    best: "Small Businesses",
    features: [
      "2,000 Messages/month",
      "Basic Support",
      "CSV Upload",
    ],
  },
  {
    title: "Growth",
    price: "₹4,999/month",
    best: "Emerging Brands",
    features: [
      "10,000 Messages/month",
      "Chatbot Integration",
      "API Access",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom Pricing",
    best: "Large Scale",
    features: [
      "Unlimited Messages*",
      "Multi-agent Inbox",
      "CRM Sync",
    ],
  },
];

const features = [
  {
    icon: <FaWhatsapp />,
    title: <>Massive<br /> Reach</>,
    desc: "Send promotional campaigns, updates, and alerts to thousands instantly.",
    bg: "#FEF2F2",
    headingColor: "#DC2626",
    subHeadingColor: "#991B1B",
  },
  {
    icon: <FaChartLine />,
    title: "Real-time Analytics",
    desc: "Track message delivery, open rates, and customer engagement in real time.",
    bg: "#EEF2FF",
    headingColor: "#4F46E5",
    subHeadingColor: "#312E81",
  },
  {
    icon: <FaRobot />,
    title: "Smart Automation",
    desc: "Automate customer interactions with AI-powered WhatsApp chatbots.",
    bg: "#ECFEFF",
    headingColor: "#0891B2",
    subHeadingColor: "#155E75",
  },
  {
    icon: <FaShieldAlt />,
    title: "Official API Integration",
    desc: "Safe and secure messaging through official WhatsApp Business API.",
    bg: "#FDF4FF",
    headingColor: "#C026D3",
    subHeadingColor: "#86198F",
  },
  {
    icon: <FaUsers />,
    title: "Audience Segmentation",
    desc: "Target customers based on interests, location, and buying behavior.",
    bg: "#F0FDF4",
    headingColor: "#16A34A",
    subHeadingColor: "#14532D",
  },
  {
    icon: <FaCheckCircle />,
    title: "Compliance & Security",
    desc: "100% compliant with Meta Policies, TRAI, and DPDP Act 2023.",
    bg: "#EFF6FF",
    headingColor: "#2563EB",
    subHeadingColor: "#1E3A8A",
  },
];

const keyCard = [

  {
    title: "Interactive Buttons",
    desc: "Add direct CTA buttons like “Visit Website” or “Call Now”.",
    bg: "#FDF4FF",
    headingColor: "#C026D3",
    subHeadingColor: "#86198F",
  },
  {
    title: "Green Tick Verification",
    desc: "Assistance for official WhatsApp verification badge.",
    bg: "#F0FDF4",
    headingColor: "#16A34A",
    subHeadingColor: "#14532D",
  },
  {
    title: "Schedule & Forget",
    desc: "Schedule campaigns in advance with automated delivery.",
    bg: "#EFF6FF",
    headingColor: "#2563EB",
    subHeadingColor: "#1E3A8A",
  },
  {
    title: "Rich Media Support",
    desc: "Send PDFs, images, videos, and interactive messages.",
    bg: "#FFF1F2",
    headingColor: "#E11D48",
    subHeadingColor: "#9F1239",
  },
]

const BulkWhatsappMarketing = () => {
  return (
    <>
      <div className={styles.container}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              Bulk WhatsApp Marketing Services
            </h1>

            <p>
              Empower your business with high-conversion WhatsApp marketing
              solutions by Zylow Web Solution. Reach customers instantly with
              secure, scalable, and engaging campaigns.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className={styles.whyChoose}>
          <div className={styles.sectionTitle}>
            <h2>Why Choose Our WhatsApp Marketing?</h2>
            <p>
              Powerful tools designed to maximize engagement and business growth.
            </p>
          </div>

          <div className={styles.featureGrid}>
            {features.map((item, index) => (
              <div className={styles.featureCard} key={index} style={{ backgroundColor: item.bg, border: `3px solid ${item.subHeadingColor}`, }}>
                <div className={styles.icon} style={{ color: item.headingColor }}>
                  {item.icon}
                  <h3 style={{ color: item.headingColor }}>{item.title}</h3>
                </div>

                <p style={{ color: item.subHeadingColor }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className={styles.pricing}>
          <div className={styles.sectionTitle}>
            <h2>Our Service Plans (2026 Standard)</h2>
            <p>Choose the perfect package for your business needs.</p>
          </div>

          <div className={styles.pricingGrid}>
            {plans.map((plan, index) => (
              <div className={styles.planCard} key={index}>
                <h3>{plan.title}</h3>
                <h4>{plan.price}</h4>
                <span>{plan.best}</span>

                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔ {feature}</li>
                  ))}
                </ul>

                {/*<button>Get Quote</button>*/}
              </div>
            ))}
          </div>

          <p className={styles.note}>
            * Official Meta conversation charges (₹0.15 - ₹0.90/message)
            apply separately as per latest 2026 guidelines.
          </p>
        </section>

        {/* KEY FEATURES */}
        <section className={styles.keyFeatures}>
          <div className={styles.sectionTitle}>
            <h2>Key Features for Your Business</h2>
          </div>

          <div className={styles.keyGrid}>
            {keyCard.map((item, i) => (
              <div className={styles.keyCard} key={i} style={{ backgroundColor: item.bg, border: `3px solid ${item.subHeadingColor}`, }}>
                <h3 style={{ color: item.headingColor }}>{item.title}</h3>
                <p style={{ color: item.subHeadingColor }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMPLIANCE */}
        <section className={styles.compliance}>
          <div className={styles.complianceBox}>
            <h2>Compliance & Security</h2>

            <p>
              We ensure every campaign follows the latest regulations and
              privacy standards.
            </p>

            <div className={styles.complianceList}>
              <div>
                <span>1</span>
                <p>TRAI Regulations with DND filtering</p>
              </div>

              <div>
                <span>2</span>
                <p>DPDP Act 2023 compliant data handling</p>
              </div>

              <div>
                <span>3</span>
                <p>Official Meta-approved channels only</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        {/*<section className={styles.cta}>
        <h2>Ready to Grow Your Business?</h2>

        <p>
          Start your first WhatsApp marketing campaign with Zylow Web
          Solution today.
        </p>

        <button>Chat on WhatsApp</button>
      </section>*/}
      </div>
    </>
  )
}
export default BulkWhatsappMarketing;