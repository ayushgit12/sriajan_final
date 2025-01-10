import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(60); // Start timer at 60 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  return (
    <div
      style={{
        border: "2px solid gold",
        borderRadius: "10px",
        padding: "10px 20px",
        fontSize: "2rem",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        color: "gold",
        textShadow: "0 0 10px black",
        fontFamily: "'Cinzel', serif",
      }}
    >
      {seconds}
    </div>
  );
};

export default Timer;
