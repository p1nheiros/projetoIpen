import React from "react";
import Título from "./Título";
import MySwiperSlide from "./Swiper";

const Galeria = () => {
  return (
    <>
      <div className="min-h-screen flex-col justify-center items-start static">
        <Título />
        <MySwiperSlide />
      </div>
    </>
  );
};

export default Galeria;
