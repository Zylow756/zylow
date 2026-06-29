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

const AppDevelopment = () => {

  const cards = [
    {
      title: "Static",
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
      title: "Dynamic",
      price: "Starting from ₹24999",
      subtitle: "Sell products online",
      features: [
        "Payment gateway",
        "Order management",
        "Inventory system"
      ]
    },
    {
      title: "E-Commerce",
      price: "Starting from ₹74999",
      subtitle: "Sell products online",
      features: [
        "Payment gateway",
        "Order management",
        "Inventory system"
      ]
    }
  ];

  return (
      <div className={styles.pricingContainer}>
        {/* Title Animation */}
        <Motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our App Development Pricing Plans
        </Motion.h1>
        <div className={styles.cards}>
          {cards.map((plan, i) => (
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

              {/*<button className={styles.primaryBtn}>Get Quote</button>*/}

              <ul>
                {plan.features.map((f, idx) => (
                  <li key={idx}>✓ {f}</li>
                ))}
              </ul>
            </Motion.div>
          ))}

        </div>
      </div>
  );

}
export default AppDevelopment;