import styles from '../../assets/css/Pricing.module.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import { motion as Motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const WebsiteDevelopment = () => { 
  return (
    <>
      <div className={styles.pricingContainer}>
        {/* Title Animation */}
        <Motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Pricing Plans
        </Motion.h1>
        <div className={styles.cards}>

          {[
            {
              title: "Static",
              price: "Starting from ₹2999",
              subtitle: "Perfect for small websites",
              features: [
                "Up to 5 pages",
                "Responsive design",
                "Basic SEO"
              ]
            },
            {
              title: "Dynamic",
              price: "Starting from ₹8999",
              subtitle: "Best for growing businesses",
              features: [
                "Admin dashboard",
                "Database integration",
                "Custom features"
              ],
              popular: true
            },
            {
              title: "E-Commerce",
              price: "Starting from ₹24999",
              subtitle: "Sell products online",
              features: [
                "Payment gateway",
                "Order management",
                "Inventory system"
              ]
            }
          ].map((plan, i) => (

            <Motion.div
              key={i}
              className={`${styles.card} ${plan.popular ? styles.popular : ""}`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={i}
              whileHover={{ y: -8 }}
            >

              {plan.popular && <div className={styles.ribbon}>Most popular</div>}

              <h3 className={styles.planTitle}>{plan.title}</h3>

              <p className={styles.price}>
                {plan.price}
              </p>

              <p className={styles.subtitle}>{plan.subtitle}</p>

              <button className={styles.primaryBtn}>Get Quote</button>

              <ul>
                {plan.features.map((f, idx) => (
                  <li key={idx}>✓ {f}</li>
                ))}
              </ul>

            </Motion.div>

          ))}

        </div>
        {/* EXTRA DETAILS SECTION */}
        <div className={styles.detailsSection}>

          {/* Per Page Pricing */}
          <Motion.div
            className={styles.detailCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Per Page Pricing</h3>
            <p className={styles.bigText}>₹ 899* /– </p>
            <span>Cost depends on design & complexity</span>
          </Motion.div>

          {/* Annual Costs */}
          <Motion.div
            className={styles.detailCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3>Annual Costs</h3>
            <ul>
              <li>🌐 Domain Price: Starting from – ₹599*/- [per year]</li>
              <li>☁️ Hosting: Starting from – ₹149*/- [per month]</li>
            </ul>
          </Motion.div>

          {/* Basic Plan */}
          <Motion.div
            className={styles.detailCardWide}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3>Basic Plan Includes</h3>

            <div className={styles.grid}>
              <div>✔ Free Domain Name</div>
              <div>✔ 5 Pages (Dynamic Website)</div>
              <div>✔ Business Email ID</div>
              <div>✔ Unlimited Images/Videos</div>
              <div>✔ Unlimited Bandwidth</div>
              <div>✔ 100% Responsive Design</div>
            </div>
          </Motion.div>

        </div>
      </div>
    </>
  );
}
export default WebsiteDevelopment;