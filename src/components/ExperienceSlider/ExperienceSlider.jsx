import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./ExperienceSlider.module.css";

const data = [
  {
    title: "2+ Years Experience",
    desc: "Building scalable and modern web applications",
    bg: "#ECFEFF",
    heading: "#0891B2",
    subheading: "#155E75",
  },
  {
    title: "50+ Projects",
    desc: "Delivered high-quality UI/UX solutions",
    bg: "#FDF4FF",
    heading: "#C026D3",
    subheading: "#86198F",
  },
  {
    title: "10+ Clients",
    desc: "Worked with clients across industries",
    bg: "#F0F9FF",
    heading: "#0284C7",
    subheading: "#0C4A6E",
  },
  {
    title: "Full Stack Dev",
    desc: "React, Node, MongoDB expert",
    bg: "#F0FDF4",
    heading: "#16A34A",
    subheading: "#14532D",
  },
];

const ExperienceSlider = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Our Experience</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card} style={{ backgroundColor: item.bg, border: `3px solid ${item.heading}` }}>
              <h3 style={{ color: item.heading }}>{item.title}</h3>
              <p style={{ color: item.subheading }}>{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExperienceSlider;