import React, { useState } from "react";
import styles from '../../assets/css/SeoOptimization.module.css';
import Enquiry from '../Enquiry';

const plans = [
    {
        title: "Basic Plan",
        subtitle: "Local Growth",
        bestFor: "Local businesses, professionals & startups",
        features: [
            "5–10 Local Intent Keywords",
            "On-Page SEO for 5 Pages",
            "Google Business Profile Setup",
            "Weekly GBP Posting & Reviews",
            "XML Sitemap & Robots.txt",
            "Monthly SEO Reports",
        ],
    },
    {
        title: "Professional Plan",
        subtitle: "Business Accelerator",
        bestFor: "SMEs & service-based companies",
        features: [
            "25 SEO Keywords",
            "2 SEO Blog Posts / Month",
            "5–10 High Quality Backlinks",
            "Schema Markup & Core Web Vitals",
            "AI Search Optimization",
            "Competitor Analysis",
        ],
        active: true,
    },
    {
        title: "Enterprise Plan",
        subtitle: "Market Leader",
        bestFor: "Large businesses & e-commerce",
        features: [
            "Unlimited Commercial Keywords",
            "Long-form Content Strategy",
            "Authority PR Link Building",
            "Technical SEO Audits",
            "Landing Page A/B Testing",
            "Revenue Driven SEO",
        ],
    },
];

const coreFeatures = [
    {
        title: "Mobile-First Design",
        desc: "Fully responsive and optimized for all devices.",
        bg: "#F0FDF4",
        headingColor: "#16A34A",
        subHeadingColor: "#14532D",
    },
    {
        title: "Secure HTTPS",
        desc: "SSL integration for better trust and security.",
        bg: "#FFF1F2",
        headingColor: "#E11D48",
        subHeadingColor: "#9F1239",
    },
    {
        title: "Analytics Setup",
        desc: "GA4 and Google Search Console integration.",
        bg: "#FDF4FF",
        headingColor: "#C026D3",
        subHeadingColor: "#86198F",
    },
    {
        title: "Zero-Click SEO",
        desc: "Featured snippets & AI answer optimization.",
        bg: "#EFF6FF",
        headingColor: "#2563EB",
        subHeadingColor: "#1E3A8A",
    },
    {
        title: "Competitor Tracking",
        desc: "Track top competitors and improve strategy.",
        bg: "#ECFEFF",
        headingColor: "#0891B2",
        subHeadingColor: "#155E75",
    },
];

const SeoOptimization = () => {
    const [showEnquiry, setShowEnquiry] = useState(false);

    return (
        <div className={styles.seoPage}>
            {/* HERO SECTION */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <p className={styles.tag}>Zylow Web Solution</p>
                    <h1>
                        Smart SEO Solutions For 2026 Businesses
                    </h1>
                    <p className={styles.heroText}>
                        Rank higher, generate quality leads, dominate AI search results, and grow your business with modern SEO strategies.
                    </p>
                </div>
            </section>

            {/* PLANS SECTION */}
            <section className={styles.plansSection}>
                <div className={styles.sectionHeading}>
                    <h2>SEO Service Plans</h2>
                    <p>
                        Flexible SEO packages tailored for startups, SMEs, and enterprise
                        brands.
                    </p>
                </div>

                <div className={styles.plansGrid}>
                    {plans.map((plan, index) => (
                        <div
                            className={`${styles.planCard} ${plan.active ? styles.activePlan : ""}`}
                            key={index}
                        >
                            {plan.active && <span className={styles.popularBadge}>POPULAR</span>}

                            <h3>{plan.title}</h3>
                            <h4>{plan.subtitle}</h4>

                            <p className={styles.bestFor}>{plan.bestFor}</p>

                            <ul>
                                {plan.features.map((feature, i) => (
                                    <li key={i}>✓ {feature}</li>
                                ))}
                            </ul>

                            {/*<button className={styles.planBtn}>Get Quote</button>*/}
                        </div>
                    ))}
                </div>
            </section>

            {/* CORE FEATURES */}
            <section className={styles.coreSection}>
                <div className={styles.sectionHeading}>
                    <h2>Core SEO Features</h2>
                    <p>Essential SEO practices included in every package.</p>
                </div>

                <div className={styles.coreGrid}>
                    {coreFeatures.map((item, index) => (
                        <div className={styles.coreCard} key={index} style={{ backgroundColor: item.bg, border: `3px solid ${item.subHeadingColor}`, }}>
                            <h3 style={{color: item.headingColor}}>{item.title}</h3>
                            <p style={{color: item.subHeadingColor}}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SUCCESS SECTION */}
            <section className={styles.successSection}>
                <div className={styles.successContainer}>
                    <div className={styles.successLeft}>
                        <h2>Why Businesses Choose Zylow?</h2>

                        <p>
                            We focus on real business growth — not just rankings. Our SEO
                            strategies combine AI optimization, UX improvements, and
                            conversion-focused techniques.
                        </p>

                        <div className={styles.successPoints}>
                            <div>
                                <span>✓</span>
                                <p>Free SEO Audit & Consultation</p>
                            </div>

                            <div>
                                <span>✓</span>
                                <p>SEO-Ready Website Development</p>
                            </div>

                            <div>
                                <span>✓</span>
                                <p>AI Search Visibility Optimization</p>
                            </div>

                            <div>
                                <span>✓</span>
                                <p>Lead & Revenue Focused Strategy</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.successRight}>
                        <div className={styles.statsCard}>
                            <h3>2026 SEO Focus</h3>

                            <div className={styles.stat}>
                                <h4>95%</h4>
                                <p>Mobile Search Traffic</p>
                            </div>

                            <div className={styles.stat}>
                                <h4>70%</h4>
                                <p>Users Prefer AI Answers</p>
                            </div>

                            <div className={styles.stat}>
                                <h4>4X</h4>
                                <p>Higher Conversion with SEO + UX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <h2>Ready To Grow Your Business?</h2>

                <p>
                    Start your SEO journey with Zylow Web Solution and dominate search
                    rankings in 2026.
                </p>

                <button onClick={() => setShowEnquiry(true)}>Book Consultation</button>
            </section>
            {showEnquiry && <Enquiry onClose={() => setShowEnquiry(false)} />}
        </div>
    );
};

export default SeoOptimization;