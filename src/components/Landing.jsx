import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import rome from "/paint.jpg";
import romephone from "/paint_mob.jpg";
import logo from "/logo.png";
import Timer from "./Timer"; // Import the Timer component
import ImagesList from "./imagesList";
import down from "/down.gif";
import curtains from "/curtains.gif";

const Landingpage = () => {
  const [imageSrc, setImageSrc] = useState(rome);
  const [showText, setShowText] = useState(false);
  const [showCurtains, setShowCurtains] = useState(true); // State to manage curtains visibility

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowText(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateImage = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setImageSrc(isMobile ? romephone : rome);
    };

    // Initial check
    updateImage();

    // Add a listener for window resize
    window.addEventListener("resize", updateImage);

    // Clean up the event listener
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  useEffect(() => {
    // Hide the curtains after 3 seconds
    const timer = setTimeout(() => {
      setShowCurtains(false);
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div>
      {/* Curtains GIF */}
      {showCurtains && (
        <div className="fixed top-0 left-0 w-screen h-screen z-[100] flex items-center justify-center">
          <img src={curtains} alt="Curtains" className="w-full h-full object-cover" />
        </div>
      )}

      <div className="relative bg-black min-h-screen">
        <img
          src={down}
          className="absolute bottom-5 cursor-pointer h-28 z-50 left-1/2 -translate-x-1/2"
          alt=""
          onClick={scrollToNextSection} // Add onClick to trigger scrolling
        />
        {/* Center Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <motion.img
            initial={{ scale: 5 }} // Start very large
            animate={{ scale: 1 }} // Shrink to final size
            transition={{ duration: 3, ease: "easeInOut" }} // Smooth transition
            className="brightness-[100%] rounded-full md:h-96"
            style={{ filter: "drop-shadow(0 0 10px orange)", zIndex: "50" }}
            src={logo}
            alt="Logo"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Timer />
          </motion.div>
          <p
            className={`text-center mt-8 text-white font-semibold md:text-3xl transition-opacity duration-500 ${
              showText ? "opacity-100" : "opacity-0"
            }`}
          >
            January 31st to February 2nd, 2025
          </p>
        </div>

        {/* Background Image */}
        <img
          className="brightness-[63%] blur-[0.49px] opacity-0 animate-fade-in w-screen h-screen"
          draggable={false}
          src={imageSrc}
          alt="Rome"
        />

        <style jsx>{`
          @keyframes fade-in {
            0% {
              opacity: 0.8;
              transform: scale(1.05);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fade-in {
            animation: fade-in 3s ease-in-out forwards;
          }
        `}</style>
      </div>
      <div className=" bg-gradient-to-r from-[#d4b896] to-[#dec8a7] min-h-screen">
        <h1 className="text-4xl text-center font-serif pt-10">
          Welcome to the Roman Revelry
        </h1>
        <p className="text-center text-lg font-serif pb-16">
          A celebration of the Roman Empire
        </p>

        <ImagesList />
      </div>
    </div>
  );
};

export default Landingpage;
