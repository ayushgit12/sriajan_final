import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import rome from "/paint.jpg";
import romephone from "/mob4.jpeg";
import logo from "/logo.png";
import Timer from "./Timer";
import ImagesList from "./imagesList";
import down from "/down.gif";
import InfiniteCarousel from "./InfiniteCarousel";
import diff3 from "/bg23.jpg";
import sound from "/sound1.mp3";

const Landingpage = () => {
  const [imageSrc, setImageSrc] = useState(rome);
  const [showText, setShowText] = useState(false);
  const audioRef = useRef(null); // Reference to the audio element

  // Function to play sound
  const playSound = () => {
    // if (audioRef.current) {
    //   audioRef.current
    //     .play()
    //     .catch((error) => console.warn("Audio playback prevented:", error));
    // }
    localStorage.setItem("music", "on");
  };

  // Smooth scroll to the next section
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
    playSound();
  };

  // Handle scrolling logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setShowText(true);
      }
      playSound();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle responsive image updates
  useEffect(() => {
    const updateImage = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setImageSrc(isMobile ? romephone : rome);
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  // Add event listeners for various interactions to play sound
  useEffect(() => {
    const handleInteraction = () => playSound();

    window.addEventListener("click", handleInteraction);
    window.addEventListener("mousemove", handleInteraction);

    // Autoplay sound on load if allowed by the browser
    playSound();

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
    };
  }, []);

  return (
    <div>
      {/* First Section */}
      <div className="relative bg-black min-h-screen">
        <img
          src={down}
          className="absolute bottom-5 cursor-pointer h-28 z-20 left-1/2 -translate-x-1/2"
          alt="Scroll Down"
          onClick={scrollToNextSection}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-screen mx-auto flex justify-center">
            <motion.img
              initial={{ scale: 5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="brightness-[100%] rounded-full lg:h-96 lg:w-[800px] h-[200px] w-[600px]"
              style={{ filter: "drop-shadow(0 0 10px orange)", zIndex: "1" }}
              src={logo}
              alt="Logo"
              onWheel={(e) => {
                if (e.deltaY > 0) scrollToNextSection();
              }}
              onMouseEnter={playSound} // Play sound on hover
            />
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Timer />
          </motion.div>
          <p
            className={`text-center mt-8 text-white font-semibold md:text-4xl transition-opacity duration-500 text-2xl ${
              showText ? "opacity-100" : "opacity-0"
            }`}
            style={{
              fontFamily: "'MedievalSharp', serif",
              color: "white",
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

        <style>{`
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

      {/* Second Section */}
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `url(${diff3})`,
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
        <p className="text-center md:text-2xl text-lg font-serif md:pb-4">
          A celebration of the Roman Empire
        </p>

        <ImagesList />

        {/* <video
          loop
          controls
          autoPlay
          muted
          className="h-full mx-auto pb-16"
          style={{
            borderRadius: "4%",
          }}
          src={day3}
        ></video> */}

        <InfiniteCarousel />

        <p className="text-center md:text-6xl text-amber-950 font-bold text-3xl py-16">
          Coming Soon!
        </p>
      </div>

      {/* Background Audio */}
      <audio ref={audioRef} src={sound} loop />
    </div>
  );
};

export default Landingpage;
