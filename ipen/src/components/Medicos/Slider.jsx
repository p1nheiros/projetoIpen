import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/ai'

const Slider = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);
    const [timeoutId, setTimeoutId] = useState(null);

    const wrapperRef = useRef(null);
    const carouselRef = useRef(null);
    const firstCardRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        const firstCardWidth = firstCardRef.current.offsetWidth;
        const arrowBtns = wrapperRef.current.querySelectorAll("i");
        const carouselChildrens = Array.from(carousel.children);

        // Get the number of cards that can fit in the carousel at once
        const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        // Insert copies of the last few cards to the beginning of the carousel for infinite scrolling
        carouselChildrens.slice(-cardPerView).reverse().forEach((card) => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        // Insert copies of the first few cards to the end of the carousel for infinite scrolling
        carouselChildrens.slice(0, cardPerView).forEach((card) => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        // Scroll the carousel at the appropriate position to hide the first few duplicate cards on Firefox
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

        // Add event listeners for the arrow buttons to scroll the carousel left and right
        arrowBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
            });
        });

        const dragStart = (e) => {
            setIsDragging(true);
            carousel.classList.add("dragging");
            // Records the initial cursor and scroll position of the carousel
            setStartX(e.pageX);
            setStartScrollLeft(carousel.scrollLeft);
        };

        const dragging = (e) => {
            if (!isDragging) return; // if isDragging is false return from here
            // Updates the scroll position of the carousel based on the cursor movement
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        };

        const dragStop = () => {
            setIsDragging(false);
            carousel.classList.remove("dragging");
        };

        const infiniteScroll = () => {
            // If the carousel is at the beginning, scroll to the end
            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }
            // If the carousel is at the end, scroll to the beginning
            else if (
                Math.ceil(carousel.scrollLeft) ===
                carousel.scrollWidth - carousel.offsetWidth
            ) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }

            // Clear existing timeout & start autoplay if the mouse is not hovering over the carousel
            clearTimeout(timeoutId);
            if (!wrapperRef.current.matches(":hover")) autoPlay
            const autoPlay = () => {
                if (window.innerWidth < 800 || !isAutoPlay) return; // Return if the window is smaller than 800 or isAutoPlay is false
                // Autoplay the carousel after every 2500 ms
                setTimeoutId(setTimeout(() => {
                    carousel.scrollLeft += firstCardWidth;
                }, 2500));
            };

            autoPlay();

            carousel.addEventListener("mousedown", dragStart);
            carousel.addEventListener("mousemove", dragging);
            document.addEventListener("mouseup", dragStop);
            carousel.addEventListener("scroll", infiniteScroll);
            wrapperRef.current.addEventListener("mouseenter", () => clearTimeout(timeoutId));
            wrapperRef.current.addEventListener("mouseleave", autoPlay);

            return () => {
                carousel.removeEventListener("mousedown", dragStart);
                carousel.removeEventListener("mousemove", dragging);
                document.removeEventListener("mouseup", dragStop);
                carousel.removeEventListener("scroll", infiniteScroll);
                wrapperRef.current.removeEventListener("mouseenter", () =>
                    clearTimeout(timeoutId)
                );
                wrapperRef.current.removeEventListener("mouseleave", autoPlay);
            };
        };
    },
        []);


    return (
        <div className="wrapper" ref={wrapperRef}>
            <MdKeyboardArrowLeft />
            <ul className="carousel" ref={carouselRef}>
                <li className="card" ref={firstCardRef}>
                    <div className="img">
                        <img src="../" alt="img" draggable="false" />
                    </div>
                    <h2>Blanche Pearson</h2>
                    <span>Sales Manager</span>
                </li>
                {/* Add other card items here */}
            </ul>
            <MdKeyboardArrowRight />
        </div>
    );
};

export default Slider;
