import styles from "./ShowCase.module.css";
import { motion as Motion } from "framer-motion";
import Rectangle14 from "../../assets/images/Rectangle14.jfif";
import Rectangle12 from "../../assets/images/Rectangle 12.png";
import ecommerce from "../../assets/images/zylow.png";
import coaching from "../../assets/images/showcase-coaching.png";
import Rectangle10 from "../../assets/images/Rectangle 10.png";
import Rectangle13 from "../../assets/images/Rectangle13.jpg";
import Rectangle11 from "../../assets/images/Rectangle11.jfif";
import Rectangle15 from "../../assets/images/Rectangle15.jfif";
import { Link } from 'react-router-dom';

const ShowCase = ({ showAll = false }) => {

  const showcase = [
    {
      title: "Solar Panel Website",
      image: Rectangle14,
      description:
        "Professional website designed for solar businesses to generate leads and showcase renewable energy solutions.",
      textColor: "#2563EB",
        descColor: "#1E3A8A",
    },
    {
      title: "Tour & Travelling Website",
      image: Rectangle12,
      description:
        "Modern travel website with destination listings, booking options and attractive user experience.",
      textColor: "#16A34A",
        descColor: "#14532D",
    },
    {
      title: "E-Commerce Website",
      image: ecommerce,
      description:
        "Complete online shopping platform with secure payments and responsive design.",
      textColor: "#0891B2",
        descColor: "#155E75",
      link: "https://zylow.in/",
    },
    {
      title: "School & Coaching Website",
      image: coaching,
      description:
        "Educational website with admissions, faculty information and student management.",
      textColor: "#C026D3",
        descColor: "#86198F",
      link: "https://dhanvii.in/",
    },
    {
      title: "Cafe & Restaurant Website",
      image: Rectangle10,
      description:
        "Restaurant website featuring digital menus, reservations and food gallery.",
      textColor: "#4F46E5",
        descColor: "#312E81",
    },
    {
      title: "Library Website",
      image: Rectangle13,
      description:
        "Library portal with digital catalog, memberships and search.",
      textColor: "#0891B2",
        descColor: "#155E75",
    },
    {
      title: "Hotel & Resort Website",
      image: Rectangle11,
      description:
        "Luxury hotel website with booking, gallery and reviews.",
      textColor: "#DC2626",
        descColor: "#991B1B",
    },
    {
      title: "Hospital Website",
      image: Rectangle15,
      description:
        "Healthcare website with appointments and doctor profiles.",
      textColor: "#9f39e2",
        descColor: "#6f14ac",
    },
  ];

  const displayedProjects = showAll
    ? showcase
    : showcase.slice(0, 3);

  return (
    <section className={styles.showcaseSection}>
      <div className={styles.container}>

        <Motion.div
          className={styles.heading}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <span>OUR SHOWCASE</span>
          <h2>Our Recent Work</h2>
          <p>
            We build websites that help businesses grow online and convert
            visitors into customers.
          </p>
        </Motion.div>

        <div className={styles.grid}>
          {displayedProjects.map((item, index) => (
            <Motion.div
              key={index}
              className={styles.card}
              style= {{ border: `3px solid ${item.descColor}` }}
              whileHover={{ y: -12 }}
            >
              <div className={styles.imageBox}>
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className={styles.content}>
                <h3 style={{ color: item.textColor }}>
                  {item.title}
                </h3>
                <p style={{ color:item.descColor }}>{item.description}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.btn}
                    style={{ background: item.textColor }}
                  >
                    Visit Website →
                  </a>
                ) : (
                  <a
                    /*href={item.link}*/
                    target="_blank"
                    rel="noreferrer"
                    className={styles.btn}
                    style={{ background: item.textColor }}
                  >
                    View Project →
                  </a>
                )}
              </div>
            </Motion.div>
          ))}
        </div>
        {!showAll && (
          <div className={styles.viewMore}>
            <Link to="/showCasePage" className={styles.viewMoreBtn}>
              View All Projects →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowCase;