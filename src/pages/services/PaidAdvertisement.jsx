import React from "react";
import styles from "../../assets/css/PaidAds.module.css";
import { motion as Motion } from "framer-motion";

const PaidAdvertisement = () => { 
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
              Paid Advertisement & <span>Social Media Marketing</span>
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
            <div className={styles.card}>
              <h3>Direct Lead Generation</h3>
              <p>
                Capture customer details like names, phone numbers, and emails
                directly through optimized platform forms.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Targeted<br /> Reach</h3>
              <p>
                Reach the right audience using advanced demographics,
                geo-targeting, and behavioral segmentation.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Conversion Optimization</h3>
              <p>
                High-performance creatives and landing pages designed to turn
                viewers into paying customers.
              </p>
            </div>
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

              <button>Get Quote</button>
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

              <button>Get Quote</button>
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
            <div className={styles.cardDark}>
              <h3>Content Management</h3>
              <p>
                Creative graphics, reels, and videos aligned with your brand’s
                identity and audience expectations.
              </p>
            </div>

            <div className={styles.cardDark}>
              <h3>Audience Engagement</h3>
              <p>
                Professional handling of comments, messages, and community
                interaction to strengthen customer relationships.
              </p>
            </div>

            <div className={styles.cardDark}>
              <h3>Brand Awareness</h3>
              <p>
                Maintain consistent visibility across Instagram, Facebook, and
                WhatsApp for maximum local impact.
              </p>
            </div>
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

              <button>Get Quote</button>
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

              <button>Get Quote</button>
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

              <button>Get Started</button>
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

              <button>Join Premium</button>
            </div>
          </div>
        </section>
      </div>
        </>
    )
}
export default PaidAdvertisement;