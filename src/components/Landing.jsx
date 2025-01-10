import React, { useState, useEffect } from "react";
import rome from "/paint.jpg";
import romephone from "/paint_mob.jpg";
import logo from "/logo.png";
import Timer from "./Timer"; // Import the Timer component

const Landingpage = () => {
  const [imageSrc, setImageSrc] = useState(rome);

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

  return (
    <div className="relative bg-black">
      {/* Center Logo */}
      <img
        className="absolute top-1/2 brightness-[100%] rounded-full z-50 md:h-96 -translate-y-1/2 left-1/2 -translate-x-1/2"
        style={{ filter: "drop-shadow(0 0 10px orange)" }}
        src={logo}
        alt="Logo"
      />

      

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
  );
};

export default Landingpage;
