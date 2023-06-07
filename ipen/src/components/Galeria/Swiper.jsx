import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function MySwiperSlide() {
  return (
    <>
      <style>
        {`
        .swiper-pagination-bullet{
          padding: 7px;
        }`}
      </style>
      <div className="relative bg-lightGreen text-lg mx-[40px] p-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-11/12"
        >
          <SwiperSlide className="text-center bg-darkGreen flex justify-center items-center my-[40px] mb-[60px] rounded-lg">
            Slide 1 
          </SwiperSlide> 
          <SwiperSlide className="text-center bg-darkGreen flex justify-center items-center my-[40px] mb-[60px] rounded-lg">
            Slide 2 
          </SwiperSlide> 
          <SwiperSlide className="text-center bg-darkGreen flex justify-center items-center my-[40px] mb-[60px] rounded-lg">
            Slide 3 
          </SwiperSlide> 
          <SwiperSlide className="text-center bg-darkGreen flex justify-center items-center my-[40px] mb-[60px] rounded-lg">
            Slide 4 
          </SwiperSlide> 
          <SwiperSlide className="text-center bg-darkGreen flex justify-center items-center my-[40px] mb-[60px] rounded-lg">
            Slide 5 
          </SwiperSlide> 
          <SwiperSlide className="text-center bg-darkGreen flex justify-center items-center my-[40px] mb-[60px] rounded-lg">
            Slide 6 
          </SwiperSlide> 
          <SwiperSlide className="text-center bg-darkGreen flex justify-center items-center my-[40px] mb-[60px] rounded-lg">
            Slide 7 
          </SwiperSlide> 
          <SwiperSlide className="text-center bg-darkGreen flex justify-center items-center my-[40px] mb-[60px] rounded-lg">
            Slide 8 
          </SwiperSlide> 
          <SwiperSlide className="text-center bg-darkGreen flex items-center justify-center  my-[40px] mb-[60px] rounded-lg">
            Slide 9
          </SwiperSlide>
          <SwiperSlide className="text-center bg-darkGreen flex items-center justify-center  my-[40px] mb-[60px] rounded-lg">
            Slide 10
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
