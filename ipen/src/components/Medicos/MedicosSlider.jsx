import React, { useState, useEffect } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const MedicosSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [numVisibleSlides, setNumVisibleSlides] = useState(3);
  const slides = [
    <div className="bg-[url('../img/medicoImgUm.png')] bg-cover bg-center bg-no-repeat h-full w-full rounded-lg" />,
    <div className="bg-[url('../img/medicoImgDois.png')] bg-cover bg-center bg-no-repeat h-full w-full rounded-lg" />,
    <div className="bg-[url('../img/medicoImgTres.png')] bg-cover bg-center bg-no-repeat h-full w-full rounded-lg" />,
    <div className="bg-[url('../img/medicoImgQuatro.png')] bg-cover bg-center bg-no-repeat h-full w-full rounded-lg" />,
    "Slide 5",
    "Slide 6",
    "Slide 7",
    "Slide 8",
    "Slide 9",
    "Slide 10"
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - numVisibleSlides : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - numVisibleSlides ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumVisibleSlides(1);
      } else {
        setNumVisibleSlides(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {slides.slice(currentSlide, currentSlide + numVisibleSlides).map((slide, index) => (
          <div
            key={index}
            className={`w-[320px] h-[360px] md:w-[400px] md:h-[480px] ${numVisibleSlides === 1 ? "mx-auto" : "mr-4"
              } bg-lightGreen rounded-lg flex-shrink-0 relative`}
          >
            {/* Coloque o conteúdo do slide aqui */}
            {slide}
            {index === 0 && (
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray px-3 py-3 rounded-full"
                onClick={prevSlide}
              >
                <MdOutlineArrowBackIos size={24} />
              </button>
            )}
            {index === numVisibleSlides - 1 && (
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray px-3 py-3 rounded-full"
                onClick={nextSlide}
              >
                <MdOutlineArrowForwardIos size={24} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicosSlider;