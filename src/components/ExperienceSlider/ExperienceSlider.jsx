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
  },
  {
    title: "50+ Projects",
    desc: "Delivered high-quality UI/UX solutions",
  },
  {
    title: "10+ Clients",
    desc: "Worked with clients across industries",
  },
  {
    title: "Full Stack Dev",
    desc: "React, Node, MongoDB expert",
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
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 3,
    },
    2560: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExperienceSlider;