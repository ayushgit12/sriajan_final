import React, { useState, useEffect } from "react";
import torch from "/torch1.png"

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 className="text-xl md:text-2xl text-center mb-6 text-white">Countdown to the Roman Revelry</h1>
    <div className="poppins flex md:gap-6 gap-3 justify-center">
      {/* <img className="h-20" src={torch} alt="" /> */}

      {Object.keys(timeLeft).map((unit) => (
        <div
          key={unit}
          className="bg-[#8B4513] text-white rounded-lg p-2 sm:p-4 lg:p-5 w-12 py-2 sm:w-16 md:w-24 text-center shadow-md border border-[#B8860B] hover:shadow-xl hover:shadow-[#FFD700] transition-shadow duration-300"
        >
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            {timeLeft[unit]}
          </div>
          
        </div>
      ))}
      {/* <img className="h-20" src={torch} alt="" /> */}
    </div>
    </div>
  );
};

export default Timer;
