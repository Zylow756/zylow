import React, { useState } from "react";
import styles from "../../assets/css/ContentMarketing.module.css";
import Enquiry from '../Enquiry';

const plans = [
  {
    title: "Starter Plan",
    audience: "Startups & Bloggers",
    words: "Up to 3,000 words",
    seo: "Basic Keywords",
    revisions: "1 per article",
    delivery: "5–7 Business Days",
    price: "₹2,999",
  },
  {
    title: "Professional Plan",
    audience: "Growing Businesses",
    words: "Up to 10,000 words",
    seo: "Advanced Keyword Research",
    revisions: "3 per article",
    delivery: "3–5 Business Days",
    price: "₹8,999",
    featured: true,
  },
  {
    title: "Enterprise Plan",
    audience: "Large Organizations",
    words: "Custom / Unlimited",
    seo: "Full SEO Strategy",
    revisions: "Unlimited",
    delivery: "Priority Support",
    price: "Contact for Quote",
  },
];

const services = [
  {
    title: "SEO Blog Writing",
    desc: "High-quality articles designed to rank on search engines and provide value to your readers.",
    bg: "#FEF2F2",
    headingColor: "#DC2626",
    subHeadingColor: "#991B1B",
  },
  {
    title: "Website Content",
    desc: 'Professional "About Us," "Services," and Landing Page copy that defines your brand identity.',
    bg: "#EEF2FF",
    headingColor: "#4F46E5",
    subHeadingColor: "#312E81",
  },
  {
    title: "Product Descriptions",
    desc: "Persuasive and concise descriptions that highlight features and benefits to boost e-commerce sales.",
    bg: "#ECFEFF",
    headingColor: "#0891B2",
    subHeadingColor: "#155E75",
  },
  {
    title: "Social Media Content",
    desc: "Engaging captions and posts tailored for platforms like Instagram, LinkedIn, and Facebook.",
    bg: "#FDF4FF",
    headingColor: "#C026D3",
    subHeadingColor: "#86198F",
  },
  {
    title: "Technical Writing",
    desc: "Clear and structured documentation, whitepapers, or manuals for specialized industries.",
    bg: "#F0FDF4",
    headingColor: "#16A34A",
    subHeadingColor: "#14532D",
  },
];

const reasons = [
  {
    title: "Hunar (Skill) Over Filler",
    desc: "We believe in meaningful writing that serves a purpose, not just hitting word counts.",
    bg: "#FFF1F2",
    headingColor: "#E11D48",
    subHeadingColor: "#9F1239",
  },
  {
    title: "SEO Integrated",
    desc: "Every piece of content is structured to help you show up where your customers are searching.",
    bg: "#EFF6FF",
    headingColor: "#2563EB",
    subHeadingColor: "#1E3A8A",
  },
  {
    title: "Industry Expertise",
    desc: "Our writers research your specific niche to ensure the tone and facts are 100% accurate.",
    bg: "#F0FDF4",
    headingColor: "#16A34A",
    subHeadingColor: "#14532D",
  },
  {
    title: "Conversion Focused",
    desc: "We don't just write for bots; we write to engage human beings and encourage action.",
    bg: "#FDF4FF",
    headingColor: "#C026D3",
    subHeadingColor: "#86198F",
  },
];

const ContentMarketing = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.tag}>Zylow Web Solution</p>

          <h1>
            Content Writing:
            <span> The Voice of Your Digital Presence</span>
          </h1>

          <p className={styles.subtitle}>
            We craft compelling, research-driven, and SEO-optimized content
            designed to convert visitors into loyal customers.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.sectionHeader}>
          <span>About Our Services</span>
          <h2>Words That Build Brands & Drive Growth</h2>
        </div>

        <p>
          In today’s digital landscape, content is not just information—it is
          the bridge between a brand and its audience. Whether you need to
          establish authority through blogs or drive sales through persuasive
          copy, our writing services are tailored to meet your business goals.
        </p>
      </section>

      {/* SERVICES */}
      <section className={styles.services}>
        <div className={styles.sectionHeader}>
          <span>Core Services</span>
          <h2>What We Offer</h2>
        </div>

        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard} style={{ backgroundColor: service.bg, border: `3px solid ${service.subHeadingColor}`, }}>
              <div className={styles.cardNumber} style={{ color: service.subHeadingColor }}>
                0{index + 1}
              </div>

              <h3 style={{ color: service.headingColor }}>{service.title}</h3>
              <p style={{ color: service.subHeadingColor }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className={styles.pricing}>
        <div className={styles.sectionHeader}>
          <span>Pricing Plans</span>
          <h2>Flexible Plans For Every Business</h2>
        </div>

        <div className={styles.pricingGrid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.planCard} ${plan.featured ? styles.featured : ""
                }`}
            >
              {plan.featured && (
                <div className={styles.popular}>
                  MOST POPULAR
                </div>
              )}

              <h3>{plan.title}</h3>

              <h1>{plan.price}</h1>

              <ul>
                <li>
                  <strong>Audience:</strong> {plan.audience}
                </li>

                <li>
                  <strong>Monthly Words:</strong> {plan.words}
                </li>

                <li>
                  <strong>SEO:</strong> {plan.seo}
                </li>

                <li>
                  <strong>Revisions:</strong> {plan.revisions}
                </li>

                <li>
                  <strong>Delivery:</strong> {plan.delivery}
                </li>

                <li>
                  <strong>Plagiarism Report:</strong> Included
                </li>
              </ul>

              {/*<button>Get Quote</button>*/}
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className={styles.whyChoose}>
        <div className={styles.sectionHeader}>
          <span>Why Choose Us</span>
          <h2>Why Businesses Trust Zylow</h2>
        </div>

        <div className={styles.reasonGrid}>
          {reasons.map((item, index) => (
            <div key={index} className={styles.reasonCard} style={{ backgroundColor: item.bg, border: `3px solid ${item.subHeadingColor}`, }}>
              <span style={{ color: item.subHeadingColor }}> 0{index + 1}</span>

              <h3 style={{ color: item.headingColor }}>{item.title}</h3>

              <p style={{ color: item.subHeadingColor }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready To Elevate Your Brand With Powerful Content?</h2>

        <p>
          Let our expert writers create content that speaks,
          converts, and grows your business online.
        </p>

        <button onClick={() => setShowEnquiry(true)}>Contact Us Today</button>
      </section>
      {showEnquiry && <Enquiry onClose={() => setShowEnquiry(false)} />}
    </div>
  )
}
export default ContentMarketing;