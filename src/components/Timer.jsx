import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Timer = () => {
  const targetDate = new Date("2025-01-31T23:59:59");

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setIsBlinking((prev) => !prev); // Toggle blinking state
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Function to format time as two digits
  const formatTime = (time) => {
    return time.toString().padStart(2, "0"); // Ensure it's two digits
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 4 }}
    >
      <h1
        className="text-xl md:text-2xl text-center mb-6 text-white"
        style={{ fontFamily: "'MedievalSharp', serif" }}
      >
        Countdown to the Roman Revelry
      </h1>
      <div className="poppins flex md:gap-6 gap-3 justify-center">
        {Object.keys(timeLeft).map((unit, index) => (
          <React.Fragment key={unit}>
            <div
              className="bg-[#8B4513] text-white rounded-lg p-2 sm:p-4 lg:p-5 w-12 py-2 sm:w-16 md:w-24 text-center shadow-md border border-[#B8860B] hover:shadow-lg hover:shadow-orange-400 transition-shadow duration-300"
            >
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                {formatTime(timeLeft[unit])} {/* Format the time as two digits */}
              </div>
            </div>
            {index < Object.keys(timeLeft).length - 1 && (
              <span
                className={`text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold self-center ${
                  isBlinking ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default Timer;
