import React from "react";
import Título from "./Título";
import MySwiperSlide from "./Swiper";

const Galeria = () => {
  return (
    <>
      <div className="min-h-screen flex-col justify-center items-start">
        <Título />
        <div className="ml-[40px]">
        <MySwiperSlide />
        </div>
      </div>
    </>
  );
};

export default Galeria;
