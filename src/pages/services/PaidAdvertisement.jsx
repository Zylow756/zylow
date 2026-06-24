import React from "react";
import styles from "../../assets/css/PaidAds.module.css";
import { motion as Motion } from "framer-motion";

const PaidAdvertisement = () => {

  const card = [
    {
      title: "Direct Lead Generation",
      desc: "Capture customer details like names, phone numbers, and emails directly through optimized platform forms.",
      bg: "#EEF2FF",
      headingColor: "#4F46E5",
      subHeadingColor: "#312E81",
    },
    {
      title: <>Targeted<br /> Reach</>,
      desc: "Reach the right audience using advanced demographics, geo-targeting, and behavioral segmentation.",
      bg: "#ECFEFF",
      headingColor: "#0891B2",
      subHeadingColor: "#155E75",
    },
    {
      title: "Conversion Optimization",
      desc: "High-performance creatives and landing pages designed to turn viewers into paying customers.",
      bg: "#FDF4FF",
      headingColor: "#C026D3",
      subHeadingColor: "#86198F",
    },
  ];

  const cardDark = [
    {
      title: "Content Management",
      desc: "Creative graphics, reels, and videos aligned with your brand’s identity and audience expectations.",
      bg: "#F0FDF4",
      headingColor: "#16A34A",
      subHeadingColor: "#14532D",
    },
    {
      title: "Audience Engagement",
      desc: "Professional handling of comments, messages, and community interaction to strengthen customer relationships.",
      bg: "#EFF6FF",
      headingColor: "#2563EB",
      subHeadingColor: "#1E3A8A",
    },
    {
      title: "Brand Awarenes",
      desc: "Maintain consistent visibility across Instagram, Facebook, and WhatsApp for maximum local impact.",
      bg: "#FFF1F2",
      headingColor: "#E11D48",
      subHeadingColor: "#9F1239",
    },
  ];

  return (
    <>
      <div className={styles.page}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <Motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.heroContent}
          >
            <span className={styles.tag}>Zylow Digital Growth Solutions</span>

            <h1>
              Paid Advertisement & Social Media Marketing
            </h1>

            <p>
              Grow your business with high-converting paid campaigns and
              powerful social media branding strategies designed to increase
              leads, engagement, and long-term customer loyalty.
            </p>
          </Motion.div>
        </section>

        {/* Paid Advertisement Section */}
        <section className={styles.section}>
          <Motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>1. Paid Advertisement (Social Media Leads)</h2>
            <p>
              Designed for businesses that need immediate results and
              high-quality inquiries through strategic advertising campaigns.
            </p>
          </Motion.div>

          <div className={styles.cards}>
            {card.map((item, i) => (
              <div className={styles.card} key={i} style={{ backgroundColor: item.bg, border: `3px solid ${item.subHeadingColor}`, }}>
                <h3 style={{ color: item.headingColor, }}> {item.title} </h3>
                <p style={{ color: item.subHeadingColor, }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Plans */}
          <div className={styles.planWrapper}>
            <div className={styles.planCard}>
              <h3>Growth Starter</h3>
              <span>Best For: Local Small Businesses</span>

              <ul>
                <li>1 Lead Generation Campaign</li>
                <li>Basic Audience Targeting</li>
                <li>Weekly Lead Reports</li>
                <li>Campaign Monitoring</li>
              </ul>

              {/*<button>Get Quote</button>*/}
            </div>

            <div className={styles.planCardFeatured}>
              <div className={styles.badge}>Most Popular</div>

              <h3>Business Pro</h3>
              <span>Best For: Rapidly Expanding Firms</span>

              <ul>
                <li>Multi-Platform Campaigns</li>
                <li>A/B Testing for Creatives</li>
                <li>CRM Integration</li>
                <li>Advanced Lead Management</li>
                <li>Performance Optimization</li>
              </ul>

              {/*<button>Get Quote</button>*/}
            </div>
          </div>
        </section>

        {/* SMM Section */}
        <section className={styles.sectionDark}>
          <Motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>2. Social Media Marketing (SMM)</h2>

            <p>
              Build long-term brand awareness, customer engagement, and a
              professional online identity across major social platforms.
            </p>
          </Motion.div>

          <div className={styles.cards}>
            {cardDark.map((item, i) => (
              <div className={styles.cardDark} key={i} style={{ backgroundColor: item.bg, border: `3px solid ${item.subHeadingColor}`, }}>
                <h3 style={{ color: item.headingColor }}>{item.title}</h3>
                <p style={{ color: item.subHeadingColor }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Plans */}
          <div className={styles.planWrapper}>
            <div className={styles.planCard}>
              <h3>Essential Brand</h3>
              <span>Best For: Businesses Needing a Presence</span>

              <ul>
                <li>12-15 Monthly Posts</li>
                <li>Profile Optimization</li>
                <li>Monthly Insights Report</li>
                <li>Basic Engagement Support</li>
              </ul>

              {/*<button>Get Quote</button>*/}
            </div>

            <div className={styles.planCardFeatured}>
              <div className={styles.badge}>Premium</div>

              <h3>Dominant Presence</h3>
              <span>Best For: Market-Leading Brands</span>

              <ul>
                <li>Daily Posting Schedule</li>
                <li>Professional Reel Creation</li>
                <li>Community Management</li>
                <li>Advanced Branding Strategy</li>
                <li>High Engagement Campaigns</li>
              </ul>

              {/*<button>Get Quote</button>*/}
            </div>
          </div>
        </section>

        {/* Membership Section */}
        <section className={styles.membership}>
          <h2>Zylow Membership Plans</h2>

          <p>
            Businesses can also register on the Zylow platform through our
            membership tiers for local business networking and visibility.
          </p>

          <div className={styles.membershipCards}>
            <div className={styles.memberCard}>
              <h3>Silver / Regular</h3>
              <h1>₹600</h1>

              <ul>
                <li>Business Listing</li>
                <li>Local Networking Access</li>
                <li>Basic Visibility</li>
              </ul>

              {/*<button>Get Started</button>*/}
            </div>

            <div className={styles.memberCardGold}>
              <h3>Prime / Golden</h3>
              <h1>₹1500</h1>

              <ul>
                <li>Premium Business Listing</li>
                <li>Enhanced Local Reach</li>
                <li>Priority Networking</li>
                <li>Featured Visibility</li>
              </ul>

              {/*<button>Join Premium</button>*/}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default PaidAdvertisement;