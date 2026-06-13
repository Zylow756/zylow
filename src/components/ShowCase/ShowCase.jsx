import styles from "./ShowCase.module.css";
import Rectangle10 from '../../assets/images/Rectangle 10.png';
import Rectangle12 from '../../assets/images/Rectangle 12.png';
import Rectangle11 from '../../assets/images/Rectangle 11.png';
import coaching from '../../assets/images/showcase-coaching.png';

const services = [
  {
    title: "Cafe, Parlour, Restaurant and Hotel Website",
    img: Rectangle10,
  },
  {
    title: "Online Product Demonstration Websites for Retailers",
    img: Rectangle11,
  },
  {
    title: "School, Coaching & Library Customized Website",
    img: coaching,
    link: "https://dhanvii.in/",
  },
  {
    title: "Tour & Travelling, Train Bus Booking Website",
    img: Rectangle12,
  },
];

const ShowCase = () => {
  return (
    <section className={styles.expertise}>
      <h3>Our Expertise</h3>

      <div className={styles.serviceGrid}>
        {services.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.serviceCard}
          >
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ShowCase;