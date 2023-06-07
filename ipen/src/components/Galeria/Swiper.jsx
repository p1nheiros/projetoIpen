import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";

const MySwiperSlide = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <style>
        {`
          .swiper-container {
            height: 500px;
          }
          .swiper-slide {
            background: lightGreen;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          ...
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-scrollbar"></div>
      </div>
    </>
  );
};

export default MySwiperSlide;
