import styles from "./ShowCase.module.css";
import Rectangle10 from '../../assets/images/Rectangle 10.png';
import Rectangle11 from '../../assets/images/Rectangle11.jfif';
import Rectangle12 from '../../assets/images/Rectangle 12.png';
import Rectangle13 from '../../assets/images/Rectangle13.jpg';
import Rectangle14 from '../../assets/images/Rectangle14.jfif';
import Rectangle15 from '../../assets/images/Rectangle15.jfif';
import coaching from '../../assets/images/showcase-coaching.png';
import ecommerse from '../../assets/images/zylow.png';
import { Link } from 'react-router-dom';

const services = [
  {
    title: <>Solar Panel<br /> Website</>,
    img: Rectangle14,
    bg: "#EFF6FF",
    textColor: "#2563EB",
  },
  {
    title: "Tour & Travelling Website",
    img: Rectangle12,
    bg: "#F0FDF4",
    textColor: "#14532D",
  },
  {
    title: "E-Commerce Platforms Website",
    img: ecommerse,
    link: "https://zylow.in/",
    bg: "#ECFEFF",
    textColor: "#155E75",
  },
  {
    title: "School & Coaching Website",
    img: coaching,
    link: "https://dhanvii.in/",
    bg: "#FDF4FF",
    textColor: "#86198F",
  },
  {
    title: "Cafe, Parlour, Restaurant Website",
    img: Rectangle10,
    bg: "#EEF2FF",
    textColor: "#312E81",
  },
  {
    title: <>Library<br /> Website</>,
    img: Rectangle13,
    bg: "#ECFEFF",
    textColor: "#0891B2",
  },
  {
    title: "Hotel & Resort Website",
    img: Rectangle11,
    bg: "#FEF2F2",
    textColor: "#DC2626",
  },
  {
    title: <>Hospital<br /> Website</>,
    img: Rectangle15,
    bg: "#f7f0fc",
    textColor: "#9c0afc",
  },
];

const ShowCase = ({ showAll = false }) => {
  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <section className={styles.expertise}>
      <h3>Our Expertise</h3>

      <div className={styles.serviceGrid}>
        {displayedServices.map((item, index) => (
          <a
            key={index}
            href={item.link || "#"}
            target={item.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={styles.serviceCard}
            style={{ backgroundColor: item.bg, border: `2px solid ${item.textColor}`, }}
          >
            <img src={item.img} alt="service" />
            <h4 style={{ color: item.textColor, }}>{item.title}</h4>
          </a>
        ))}
      </div>

      {!showAll && (
        <div className={styles.viewMoreContainer}>
          <Link to="/showCasePage" className={styles.viewMoreBtn}>
            View More
          </Link>
        </div>
      )}
    </section>
  );
};

export default ShowCase;