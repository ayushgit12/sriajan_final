import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './Carousel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [items.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden border-4 border-blacky">
      <div
        className="flex transition-transform duration-1000 carousel-image"
        style={{
          width: `${items.length * 100}vw`, // Dynamically set the width based on the number of images
          transform: `translateX(-${currentIndex * 50}%)`
        }}
      >
        {items.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Slide ${index + 1}`}
            className="w-screen object-fill" // Use w-screen to take full screen width
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-transparent text-gold p-2 rounded-full"
      >
        <FaChevronLeft size={30} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-transparent text-gold p-2 rounded-full"
      >
        <FaChevronRight size={30} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gold" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
