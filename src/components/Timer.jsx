import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ring from "../assets/border.png";

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
      setIsBlinking((prev) => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 4 }}
      className="relative"
    >
      <h1
        className="text-2xl md:text-2xl font-bold text-center mb-6 text-amber-100 hover:text-amber-200 transition-colors duration-300"
        style={{
          fontFamily: "'MedievalSharp', serif",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
        }}
      >
        Countdown to the Roman Revelry
      </h1>
      <div className="poppins flex md:gap-4 gap-2 justify-center">
        {Object.keys(timeLeft).map((unit, index) => (
          <React.Fragment key={unit}>
            <motion.div
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{
                y: {
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                },
              }}
            >
              <div className="absolute inset-0 bg-amber-500 rounded-lg blur-md group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-30" />
              <motion.div
                className="bg-gradient-to-b from-[#8B4513] to-[#654321] text-amber-100 
                           rounded-lg p-2 w-16 py-4 sm:w-16 md:w-20 
                           text-center relative overflow-hidden
                           border-2 border-[#DAA520] group-hover:border-amber-400
                           transition-all duration-300"
                style={{
                  boxShadow:
                    "0 4px 6px rgba(139, 69, 19, 0.3), inset 0 1px 0 rgba(218, 165, 32, 0.2)",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              >
                <motion.div
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                    fontFamily: "'MedievalSharp', serif",
                  }}
                >
                  {formatTime(timeLeft[unit])}
                </motion.div>
                <motion.div
                  className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider mt-1 text-amber-200 group-hover:text-amber-300 transition-colors duration-300"
                  style={{ fontFamily: "'MedievalSharp', serif" }}
                >
                  {unit}
                </motion.div>
              </motion.div>
            </motion.div>
            {index < Object.keys(timeLeft).length - 1 && (
              <span
                className={`text-amber-100 text-sm sm:text-base md:text-lg lg:text-xl 
                           font-bold self-center ${
                             isBlinking ? "opacity-100" : "opacity-0"
                           }
                           transition-opacity duration-500`}
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                  fontFamily: "'MedievalSharp', serif",
                }}
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