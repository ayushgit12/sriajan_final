import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import rome from "/paint.jpg";
import romephone from "/paint_mob3.jpg";
import logo from "/logo.png";
import Timer from "./Timer"; // Import the Timer component
import ImagesList from "./imagesList";
import down from "/down.gif";
import curtains from "/curtains.gif";
import img from "/bg4.avif";
import day3 from "/day32.mp4";
import InfiniteCarousel from "./InfiniteCarousel";

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
      {/* {showCurtains && (
        <div className="fixed top-0 left-0 w-screen h-screen z-[100] flex items-center justify-center">
          <img
            src={curtains}
            alt="Curtains"
            className="w-full h-full object-cover"
          />
        </div>
      )} */}

      <div className="relative bg-black min-h-screen">
        <img
          src={down}
          className="absolute bottom-5 cursor-pointer h-28 z-50 left-1/2 -translate-x-1/2"
          alt=""
          onClick={scrollToNextSection} // Add onClick to trigger scrolling
        />
        {/* Center Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-screen mx-auto flex justify-center">
            <motion.img
              initial={{ scale: 5, opacity: 0 }} // Start very large and invisible
              animate={{ scale: 1, opacity: 1 }} // Shrink to final size and become visible
              transition={{
                duration: 3, // Smooth transition over 3 seconds
                ease: "easeInOut",
                delay: 1, // Delay the animation by 2 seconds
              }}
              className="brightness-[100%] rounded-full md:h-96 h-[250px] w-[600px] "
              style={{ filter: "drop-shadow(0 0 10px orange)", zIndex: "1" }}
              src={logo}
              alt="Logo"
            />
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Timer />
          </motion.div>
          <p
            className={`text-center mt-8 text-white font-semibold md:text-4xl transition-opacity duration-500 ${
              showText ? "opacity-100" : "opacity-0"
            }`}
            style={{ fontFamily: "'MedievalSharp', serif",
              color: "white"

             }}
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
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="md:text-5xl text-2xl text-center font-serif pt-16"
          style={{
            fontFamily: "'MedievalSharp', serif",
            color: "#8B4513",
            fontWeight: 800,
          }}
        >
          Welcome to the Roman Revelry
        </h1>
        <p className="text-center md:text-2xl text-lg  font-serif md:pb-4">
          A celebration of the Roman Empire
        </p>

        <ImagesList />

        <p className="text-center text-3xl text-amber-900 font-bold pb-4">
          Echoes of Festive Joy from Years Past.
        </p>
        <video
          loop={true}
          controls
          autoPlay={true}
          muted
          className="h-full mx-auto pb-16 "
          src={day3}
        ></video>
        <InfiniteCarousel />

        <p className="text-center md:text-6xl text-amber-950 font-bold text-3xl py-16">
          Coming Soon !
        </p>
      </div>
    </div>
  );
};

export default Landingpage;
