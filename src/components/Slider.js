import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import t3slider from "../assets/t3slider.jpg"
import t3slider2 from "../assets/t3slider2.jpg"
import t3slider3 from "../assets/t3slider3.jpg"
import t3slider4 from "../assets/t3slider4.jpg"

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide><img src={t3slider} alt="slider image"/></SwiperSlide>
        <SwiperSlide><img src={t3slider2} alt="slider image"/></SwiperSlide>
        <SwiperSlide><img src={t3slider3} alt="slider image"/></SwiperSlide>
        <SwiperSlide><img src={t3slider4} alt="slider image"/></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
