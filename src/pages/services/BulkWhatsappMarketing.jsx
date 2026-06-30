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
  },
  {
    icon: <FaChartLine />,
    title: "Real-time Analytics",
    desc: "Track message delivery, open rates, and customer engagement in real time.",
  },
  {
    icon: <FaRobot />,
    title: <>Smart<br/> Automation</>,
    desc: "Automate customer interactions with AI-powered WhatsApp chatbots.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Official API Integration",
    desc: "Safe and secure messaging through official WhatsApp Business API.",
  },
  {
    icon: <FaUsers />,
    title: "Audience Segmentation",
    desc: "Target customers based on interests, location, and buying behavior.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Compliance & Security",
    desc: "100% compliant with Meta Policies, TRAI, and DPDP Act 2023.",
  },
];

const keyCard = [
  {
    title: "Interactive Buttons",
    desc: "Add direct CTA buttons like “Visit Website” or “Call Now”.",
  },
  {
    title: "Green Tick Verification",
    desc: "Assistance for official WhatsApp verification badge.",
  },
  {
    title: "Schedule & Forget",
    desc: "Schedule campaigns in advance with automated delivery.",
  },
  {
    title: "Rich Media Support",
    desc: "Send PDFs, images, videos, and interactive messages.",
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
              <div className={styles.featureCard} key={index}>
                <div className={styles.icon}>
                  {item.icon}
                  <h3>{item.title}</h3>
                </div>

                <p>{item.desc}</p>
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
              <div className={styles.keyCard} key={i}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
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